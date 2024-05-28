import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import Modal from 'react-native-modal';
import { ScrollView } from 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Dropdown } from 'react-native-element-dropdown';
import { FlatList } from "react-native-gesture-handler";

const screenWidth = Dimensions.get('window').width;



function GioHang(): React.JSX.Element {

    const [openModal, setOpenModal] = React.useState(false);
    const toggleModalShipping = () => {
        setOpenModal(!openModal);
    };
    const [optionModel, setOptionModel] = React.useState(1);
    //modal giao hàng
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

                    <TouchableOpacity
                        onPress={toggleModalShipping}>
                        <View style={[styles.item]}>
                            <View style={{ flexDirection: 'row' }}>
                                <Image source={require('../images/edit.png')}
                                    style={{ height: 17, width: 17, marginRight: 10 }} />
                                <View style={[styles.categoryInfor]}>
                                    <Text style={[styles.fontWeight, { fontSize: 12, color: 'black' }]}>
                                        Giao hàng</Text>
                                    <Text style={[styles.fontWeightLight, { fontSize: 12, color: 'gray' }]}>
                                        Địa chỉ nhà Địa chỉ nhà Địa chỉ nhà Địa chỉ nhà</Text>

                                </View>
                            </View>
                            <TouchableOpacity

                                style={[styles.button1]}>

                                <Text style={{ fontSize: 12, color: 'black' }}>
                                    Sửa</Text>
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={toggleModalShipping}>
                        <View style={styles.item}>
                            <View style={{ flexDirection: 'row' }}>
                                <Image source={require('../images/edit.png')}
                                    style={{ height: 17, width: 17, marginRight: 10 }} />
                                <View style={[styles.categoryInfor]}>
                                    <Text style={[styles.fontWeight, { fontSize: 12, color: 'black' }]}>
                                        Mang đi</Text>
                                    <Text style={[styles.fontWeightLight, { fontSize: 12, color: 'gray' }]}>
                                        Địa chỉ quán Địa chỉ quán Địa chỉiii quán Địa chỉ quán </Text>

                                </View>
                            </View>
                            <TouchableOpacity
                                style={[styles.button1]}>
                                <Text style={{ fontSize: 12, color: 'black' }}>
                                    Sửa</Text>
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>
                </View>
            </Modal>
        )
    }

    // biến cho size
    const sizes = [
        { label: 'S', value: 'S' },
        { label: 'M', value: 'M' },
        { label: 'L', value: 'L' },
    ];
    const [openSize, setOpenSize] = useState(false);
    const [selectedSize, setSelectedSize] = useState('S');

    const selectSize = (option: any) => {
        setSelectedSize(option);
        setOpenSize(false);
    };
    // tăng, giảm số lượng
    const increaseCount = (id: string, newQuantity: number, newPrice: number) => {

        setData(prevData =>
            prevData.map(item =>
                item.id === id ? { ...item, quantity: newQuantity, price:newPrice } : item
            )
        );
    };
    const decreaseCount = (id: string, newQuantity: number, newPrice: number) => {
        if (newQuantity + 1 > 1) {
            setData(prevData =>
                prevData.map(item =>
                    item.id === id ? { ...item, quantity: newQuantity, price:newPrice } : item
                )
            );
        }

    };

    //chứa dữ liệu của 1 item
    const [data, setData] = useState([
        { id: '1', name: 'Olong Tứ Quý Vải1', size: 'S', price: 30000, quantity: 1 },
        { id: '2', name: 'Olong Tứ Quý Vải2', size: 'M', price: 40000, quantity: 2 },
        { id: '3', name: 'Olong Tứ Quý Vải3', size: 'L', price: 50000, quantity: 3 },
    ]);
    const renderItem = ({ item }) => (

        <View style={[styles.item]}>
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity>
                    <Image source={require('../images/bin.png')}
                        style={{ height: 17, width: 17, marginRight: 10 }} />
                </TouchableOpacity>
                <View>
                    <View style={[styles.categoryInfor]}>
                        {/* Tên sp */}
                        <Text style={[styles.fontWeight, { fontSize: 12, color: 'black' }]}>
                            {item.name}</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        {/* <Dropdown
                            style={[styles.dropdown, {}]}
                            placeholderStyle={styles.placeholderStyle}
                            selectedTextStyle={styles.selectedTextStyle}
                            itemTextStyle={styles.itemTextStyle}
                            iconStyle={styles.iconStyle}
                            data={sizes}
                            labelField="label"
                            valueField="value"
                            placeholder={item.size}// lấy thông tin
                            value={selectedSize}
                            onChange={item => {
                                selectSize(item.value);
                                //item.size= selectedSize;
                            }}
                        /> */}
                        <View style={styles.dropdown}>
                            <Text style={[styles.fontWeightLight, { fontSize: 15, color: 'dimgray' }]}>
                                Size: </Text>
                            <Text style={[styles.fontWeightLight, { fontSize: 15, color: 'dimgray' }]}>
                                {item.size}</Text>
                        </View>
                        {/* số lượng */}
                        <View style={[styles.quantityButton]} >
                            <TouchableOpacity
                                onPress={() => {decreaseCount(item.id, item.quantity - 1, (item.price-item.price/item.quantity));

                                    console.log((item.price-item.price/item.quantity));
                                }}
                            >
                                <Image source={require('../images/minus.png')}
                                    style={{ height: 13, width: 15 }} />

                            </TouchableOpacity>
                            {/* <Text style={[styles.fontWeightLight, { fontSize: 15, color: 'dimgray' }]}>
                                SL: </Text> */}
                            <Text style={[styles.fontWeightLight, { fontSize: 15, color: 'dimgray' }]}>
                                {item.quantity}</Text>

                            <TouchableOpacity
                                onPress={() => { increaseCount(item.id, item.quantity + 1, (item.price+item.price/item.quantity)) }}
                            >
                                <Image source={require('../images/plus1.png')}
                                    style={{ height: 13, width: 15 }} />

                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
            {/* tổng giá */}
            <Text style={{ fontSize: 14, color: 'black', marginBottom: 10 }}>
                {item.price.toFixed(1)}đ</Text>
        </View>
    );

    //hàm chính
    return (
        <View style={styles.background}>
            <View style={styles.header}>
                <Text style={[styles.fontWeightLight, { fontSize: 13, color: 'gray' }]}>
                    Xóa</Text>
                <Text style={[styles.fontWeight, { fontSize: 15, color: 'black', marginLeft: (screenWidth - 230) / 2 }]}>
                    Xác nhận đơn hàng</Text>
            </View>
            <GestureHandlerRootView style={{ flex: 8 }}>
                <ScrollView>
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
                    </View>
                    <View style={styles.titleComponent}>
                        <View style={styles.component}>
                            <Text style={[styles.fontWeight, { fontSize: 15, color: 'black' }]}>
                                Sản phẩm đã chọn</Text>
                            <TouchableOpacity style={[styles.button1]}>
                                <Text style={{ fontSize: 12, color: 'black' }}>
                                    + Thêm</Text>
                            </TouchableOpacity>
                        </View>

                        {/* chứa component */}
                        <FlatList
                            data={data}
                            renderItem={renderItem}
                            keyExtractor={item => item.id}
                        />

                    </View>
                </ScrollView>
            </GestureHandlerRootView>
            <View style={[styles.totalPay]}>
                <View style={[styles.component]}>
                    <Text style={[styles.fontWeight, { fontSize: 15, color: 'black' }]}>
                        Tổng tiền
                    </Text>
                    <Text style={[styles.fontWeight, { fontSize: 15, color: 'black' }]}>
                        300.000đ
                    </Text>
                </View>
                <TouchableOpacity style={[styles.button]}>
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