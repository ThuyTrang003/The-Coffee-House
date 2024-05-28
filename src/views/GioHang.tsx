import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import Modal from 'react-native-modal';
import { ScrollView } from 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Dropdown } from 'react-native-element-dropdown';
import { FlatList } from "react-native-gesture-handler";
import ItemCart from '../component/itemCart';
import { firebase } from "../firebase/FirebaseConfig";

const screenWidth = Dimensions.get('window').width;



function GioHang({ navigation, route }): React.JSX.Element {
    const { user } = route.params;
    const [openModal, setOpenModal] = React.useState(false);
    const toggleModalShipping = () => {
        setOpenModal(!openModal);
    };
    const [selectedAddress, setSelectedAddress] = useState('');

    const [cartData, setCartData] = useState(null);
    const [cartAllData, setCartAllData] = useState(null);
    const [CoffeeData, setCoffeeData] = useState([])
    const coffeeDataQry = firebase.firestore().collection('CoffeeData')

    const [TeaData, setTeaData] = useState([])
    const teaDataQry = firebase.firestore().collection('TeaData')

    const [JuiceData, setJuiceData] = useState([])
    const juiceDataQry = firebase.firestore().collection('Juice')
    const [totalPrice, setTotalPrice] = useState(0)
    useEffect(() => {
        const unsubscribeCoffee = coffeeDataQry.onSnapshot(snapshot => {
            const data = snapshot.docs.map(doc => ({
                ...doc.data(),
                id: doc.id,
            }));
            setCoffeeData(data);
        });

        const unsubscribeTea = teaDataQry.onSnapshot(snapshot => {
            const data = snapshot.docs.map(doc => ({
                ...doc.data(),
                id: doc.id,
            }));
            setTeaData(data);
        });

        const unsubscribeJuice = juiceDataQry.onSnapshot(snapshot => {
            const data = snapshot.docs.map(doc => ({
                ...doc.data(),
                id: doc.id,
            }));
            setJuiceData(data);
        });

        return () => {
            unsubscribeCoffee();
            unsubscribeTea();
            unsubscribeJuice();
        };
    }, []);
    console.log(CoffeeData)
    console.log(TeaData)
    console.log(JuiceData)
    const cartDataHandler = async () => {
        const docref = firebase.firestore().collection('UserCart').doc(user.uid);
        try {
            await docref.get().then((doc) => {
                if (doc.exists) {
                    setCartAllData(doc.data().cartItems);
                } else {
                    console.log('There is no data');
                }
            })
        } catch (error) {
            console.log('Error fetching cart data:', error);
        }
    };
    const selectAddress = (address) => {
        setSelectedAddress(address);
    };
    const createOrder = async () => {
        try {
            const orderRef = firebase.firestore().collection('OrderData');
            const timestamp = firebase.firestore.Timestamp.now();
            const orderItems = cartAllData.map(item => {
                let nData = null;
                if (CoffeeData.some(coffee => coffee.id === item.itemId)) {
                    nData = CoffeeData.find(coffee => coffee.id === item.itemId);
                } else if (TeaData.some(tea => tea.id === item.itemId)) {
                    nData = TeaData.find(tea => tea.id === item.itemId);
                } else if (JuiceData.some(juice => juice.id === item.itemId)) {
                    nData = JuiceData.find(juice => juice.id === item.itemId);
                }

                const itemTotalPrice = getPriceForSize(nData, item.itemSize) * item.itemQuantity;
                return {
                    productName: nData ? nData.Name : "Unknown",
                    size: mapSize(item.itemSize),
                    quantity: item.itemQuantity,
                    totalPrice: itemTotalPrice,
                };
            });

            const totalOrderPrice = orderItems.reduce((acc, curr) => acc + curr.totalPrice, 0);

            await orderRef.add({
                userId: user.uid,
                items: orderItems,
                totalOrderPrice: totalOrderPrice,
                statusOrder: 'Đang thực hiện',
                orderTime: timestamp,
                addressShip: selectedAddress
            });

            console.log('Đặt hàng thành công');
            clearCart();
        } catch (error) {
            console.error('Lỗi khi đặt hàng:', error);
        }
    };
    const deleteCartItem = async (itemId) => {
        try {
            const docRef = firebase.firestore().collection('UserCart').doc(user.uid);
            const updatedCartItems = cartAllData.filter(item => item.cartItemId !== itemId);
            await docRef.update({
                cartItems: updatedCartItems,
            });
            setCartAllData(updatedCartItems);
        } catch (error) {
            console.error('Lỗi khi xóa sản phẩm:', error);
        }
    };

    const clearCart = async () => {
        try {
            const docRef = firebase.firestore().collection('UserCart').doc(user.uid);
            await docRef.update({
                cartItems: [],
            });
            setCartAllData(null);
            setTotalPrice(0);
        } catch (error) {
            console.error('Lỗi khi xóa giỏ hàng sau khi đặt hàng:', error);
        }
    };

    console.log(cartAllData)
    //modal giao hàng
    const mapSize = (size) => {
        switch (size) {
            case 'SizeSmall':
                return 'Nhỏ';
            case 'SizeMedium':
                return 'Vừa';
            case 'SizeLarge':
                return 'Lớn';
            default:
                return size;
        }
    };
    const getPriceForSize = (product, size) => {
        if (size == 'SizeSmall') {
            return product.Price.SizeSmall;
        }
        else if (size == 'SizeMedium') {
            return product.Price.SizeMedium;
        }
        else {
            return product.Price.SizeLarge;
        }
    };
    useEffect(() => {
        const fetchData = async () => {
            await cartDataHandler();
            calculateTotalPrice(cartAllData);
        };

        fetchData();
    }, [cartAllData]);
    const calculateTotalPrice = (cartAllData) => {
        let total = 0;
        cartAllData.forEach(item => {
            let nData = null;
            if (CoffeeData.some(coffee => coffee.id === item.itemId)) {
                nData = CoffeeData.find(coffee => coffee.id === item.itemId);
            } else if (TeaData.some(tea => tea.id === item.itemId)) {
                nData = TeaData.find(tea => tea.id === item.itemId);
            } else if (JuiceData.some(juice => juice.id === item.itemId)) {
                nData = JuiceData.find(juice => juice.id === item.itemId);
            }
            if (nData) {
                total += getPriceForSize(nData, item.itemSize) * item.itemQuantity;
            }
        });

        console.log('Total Price:', total.toLocaleString());
        setTotalPrice(total);
    };

    function renderModal() {
        return (
            <Modal
                isVisible={openModal}
                onBackdropPress={toggleModalShipping}
                style={styles.modal}
                backdropTransitionOutTiming={0}
            >
                <View style={styles.modalContent}>
                    <View style={styles.phuongThucDatHang}>
                        <TouchableOpacity
                            onPress={toggleModalShipping}
                        >
                            <Image source={require('../images/reject_black.png')}
                                style={{ height: 20, width: 20, position: 'relative', left: screenWidth - 60 }} />
                        </TouchableOpacity>

                        <Text style={[styles.fontWeight, { fontSize: 14, color: 'black', marginLeft: 50 }]}>
                            Phương thức lấy hàng</Text>

                    </View>

                    <TouchableOpacity onPress={() => selectAddress('484 Lê Văn Việt, Tăng Nhơn Phú A, Thủ Đức')}>
                        <View style={[styles.item]}>
                            <View style={{ flexDirection: 'row' }}>
                                <Image source={require('../images/edit.png')} style={{ height: 17, width: 17, marginRight: 10 }} />
                                <View style={[styles.categoryInfor]}>
                                    <Text style={[styles.fontWeight, { fontSize: 12, color: 'black' }]}>Giao hàng</Text>
                                    <Text style={[styles.fontWeightLight, { fontSize: 12, color: 'gray' }]}>484 Lê Văn Việt, Tăng Nhơn Phú A, Thủ Đức</Text>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => selectAddress('28 Hoàng Diệu 2, TP. Thủ Đức')}>
                        <View style={styles.item}>
                            <View style={{ flexDirection: 'row' }}>
                                <Image source={require('../images/edit.png')} style={{ height: 17, width: 17, marginRight: 10 }} />
                                <View style={[styles.categoryInfor]}>
                                    <Text style={[styles.fontWeight, { fontSize: 12, color: 'black' }]}>Mang đi</Text>
                                    <Text style={[styles.fontWeightLight, { fontSize: 12, color: 'gray' }]}>28 Hoàng Diệu 2, TP. Thủ Đức</Text>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>


                </View>
            </Modal>
        )
    }

    return (
        <View style={styles.background}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => clearCart()}>
                    <Text style={[styles.fontWeightLight, { fontSize: 13, color: 'gray' }]}>
                        Xóa</Text>
                </TouchableOpacity>
                <Text style={[styles.fontWeight, { fontSize: 15, color: 'black', marginLeft: (screenWidth - 230) / 2 }]}>
                    Xác nhận đơn hàng</Text>
            </View>
            <GestureHandlerRootView style={{ flex: 8 }}>
                <View style={styles.titleComponent}>
                    <View style={styles.component}>
                        <Text style={[styles.fontWeight, { fontSize: 15, color: 'black' }]}>
                            Phương thức lấy hàng</Text>
                        <TouchableOpacity
                            onPress={() => setOpenModal(true)}
                            style={[styles.button1]}>

                            <Text style={{ fontSize: 12, color: 'black' }}>
                                Thay đổi</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginBottom: 10 }}>
                        <Text style={[styles.fontWeight, { fontSize: 13, color: 'gray' }]}>
                            Địa chỉ: {selectedAddress}</Text>
                    </View>
                </View>
                {cartAllData && cartAllData.length > 0 ? (
                    <View style={styles.titleComponent}>
                        <View style={styles.component}>
                            <Text style={[styles.fontWeight, { fontSize: 15, color: 'black' }]}>
                                Sản phẩm đã chọn</Text>
                            <TouchableOpacity style={[styles.button1]}>
                                <Text style={{ fontSize: 12, color: 'black' }}>
                                    + Thêm</Text>
                            </TouchableOpacity>
                        </View>

                        <FlatList
                            data={cartAllData}
                            renderItem={({ item }) => {
                                let nData = null;
                                if (CoffeeData.some(coffee => coffee.id === item.itemId)) {
                                    nData = CoffeeData.find(coffee => coffee.id === item.itemId);
                                } else if (TeaData.some(tea => tea.id === item.itemId)) {
                                    nData = TeaData.find(tea => tea.id === item.itemId);
                                } else if (JuiceData.some(juice => juice.id === item.itemId)) {
                                    nData = JuiceData.find(juice => juice.id === item.itemId);
                                }

                                return (
                                    <View style={[styles.item]}>
                                        <View style={{ flexDirection: 'row' }}>
                                            <TouchableOpacity onPress={() => deleteCartItem(item.cartItemId)}>
                                                <Image source={require('../images/bin.png')}
                                                    style={{ height: 17, width: 17, marginRight: 10 }} />
                                            </TouchableOpacity>
                                            <View>
                                                <View style={[styles.categoryInfor]}>
                                                    <Text style={[styles.fontWeight, { fontSize: 15, color: 'black' }]}>
                                                        {nData ? nData.Name : "Unknown"}</Text>
                                                </View>
                                                <View style={{ flexDirection: 'row' }}>
                                                    <View style={styles.dropdown}>
                                                        <Text style={[styles.fontWeightLight, { fontSize: 12, color: 'dimgray' }]}>
                                                            Size: {mapSize(item.itemSize)}</Text>
                                                    </View>
                                                    <View style={[styles.quantityButton]} >
                                                        <Text style={[styles.fontWeightLight, { fontSize: 11, color: 'dimgray' }]}>
                                                            Số lượng: {item.itemQuantity}</Text>
                                                    </View>
                                                </View>
                                            </View>
                                        </View>

                                        <Text style={{ fontSize: 14, color: 'black', marginBottom: 10 }}>
                                            {(getPriceForSize(nData, item.itemSize) * item.itemQuantity).toLocaleString()}đ</Text>
                                    </View>
                                );
                            }}
                            keyExtractor={item => item.id}
                        />
                    </View>
                ) : (
                    <Text style={{ textAlign: 'center', marginTop: 20 }}>
                        Giỏ hàng trống</Text>
                )}
            </GestureHandlerRootView>
            <View style={[styles.totalPay]}>
                <View style={[styles.component]}>
                    <Text style={[styles.fontWeight, { fontSize: 15, color: 'black' }]}>
                        Tổng tiền
                    </Text>
                    <Text style={[styles.fontWeight, { fontSize: 15, color: 'black' }]}>
                        {totalPrice.toLocaleString()}đ
                    </Text>
                </View>
                <TouchableOpacity style={[styles.button]} onPress={createOrder} >
                    <Text style={[styles.fontWeight, { fontSize: 14, color: 'white' }]}>
                        Đặt hàng</Text>
                </TouchableOpacity>
            </View>
            {renderModal()}
        </View>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        padding: 20,
        backgroundColor: 'white',
    },
    fontWeightLight: {
        fontFamily: 'Roboto-Light',
    },
    fontWeight: {
        fontWeight: 'bold',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        paddingBottom: 10,
    },
    titleComponent: {
        paddingTop: 10,
        backgroundColor: 'white',
    },
    component: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    button1: {
        backgroundColor: '#DBAFA0',
        borderRadius: 15,
        paddingVertical: 5,
        paddingHorizontal: 10,
    },
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomColor: 'lightgray',
        borderBottomWidth: 1,
        paddingBottom: 10,
        paddingTop: 10,
    },
    editComponent: {

    },
    categoryInfor: {
        width: (screenWidth) / 5 * 3,
        marginBottom: 10,
    },
    totalPay: {
        flex: 1,
        justifyContent: 'flex-end',
        borderColor: 'lightgray',
        borderTopWidth: 2,
        paddingTop: 15,
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#5F374B',
        borderRadius: 8,
        width: '100%',
        height: 40,
    },
    modal: {
        justifyContent: 'flex-end',
        margin: 0,
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        //height: Dimensions.get('window').height * 0.4,
    },
    phuongThucDatHang: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomColor: 'lightgray',
        borderBottomWidth: 1,
        paddingBottom: 10,
    },
    sizeButton: {
        borderColor: 'lightgray',
        borderWidth: 1,
        alignItems: 'center',
        height: 25,
        width: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    //dropdown
    dropdown: {
        height: 30,
        width: 80,
        flexDirection: 'row',
        borderColor: 'black',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    placeholderStyle: {
        fontSize: 13,
    },
    selectedTextStyle: {
        fontSize: 13,
        color: 'black',
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    itemTextStyle: {
        fontSize: 13,
        color: 'black',
    },
    quantityButton: {
        height: 30,
        width: 80,
        borderColor: 'black',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 10,
        alignItems: 'center'
    },
});

export default GioHang;