import React, { useState, useEffect, useContext } from "react";
import { Button, Dimensions, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { RadioButton } from "react-native-paper";
import { firebase } from "../firebase/FirebaseConfig";
import { AuthContext } from "../context/AuthContext";

const window = Dimensions.get('window');

function ChiTietSanPham({ navigation, route }) {
    const { data, user } = route.params;

    if (data === undefined) {
        navigation.navigate('TrangChu');
    }

    const [quantity, setQuantity] = useState(1);
    const [selectedSize, setSelectedSize] = useState('SizeSmall');

    useEffect(() => {
        setQuantity(1);
    }, [selectedSize]);

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    };

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const handlePress = () => {
        navigation.goBack();
    };

    const getPriceBySize = (size) => {
        switch (size) {
            case 'SizeSmall':
                return data.Price.SizeSmall;
            case 'SizeMedium':
                return data.Price.SizeMedium;
            case 'SizeLarge':
                return data.Price.SizeLarge;
            default:
                return 0;
        }
    };

    const getTotalPrice = () => {
        const selectedPrice = getPriceBySize(selectedSize);
        return selectedPrice ? selectedPrice * quantity : 0;
    };

    const mapSizeToDisplayValue = (size) => {
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

    const AddtoCartHandler = async () => {
        const date = new Date().getTime().toString();

        const docref = firebase.firestore().collection('UserCart').doc(user.uid);
        const itemData = {
            itemId: data.id,
            itemSize: selectedSize,
            itemQuantity: quantity,
            userId: user.uid,
            cartItemId: date + user.uid
        };

        try {
            const doc = await docref.get();
            if (doc.exists) {
                const cartItems = doc.data().cartItems || [];

                const existingItemIndex = cartItems.findIndex((item) => item.itemId === data.id && item.itemSize === selectedSize);

                if (existingItemIndex !== -1) {
                    const existingItem = cartItems[existingItemIndex];
                    const updatedItem = {
                        ...existingItem,
                        itemQuantity: existingItem.itemQuantity + quantity
                    };

                    cartItems[existingItemIndex] = updatedItem;
                    docref.update({
                        cartItems: cartItems,
                    });
                    console.log('Updated');
                } else {
                    docref.update({
                        cartItems: firebase.firestore.FieldValue.arrayUnion(itemData)
                    });
                    console.log('Added');
                }
            } else {
                docref.set({
                    cartItems: [itemData],
                });
                console.log('Added');
            }
            alert('Đã thêm vào giỏ hàng');
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.ScrollViewFlex}>
                <Image source={{ uri: data.ImageSource }} style={styles.image} />
                <TouchableOpacity style={{ position: 'absolute', top: 30, left: 30 }} onPress={handlePress}>
                    <Image source={require('../images/back.png')} style={{ height: 30, width: 30 }} />
                </TouchableOpacity>
                <TouchableOpacity style={{ position: 'absolute', top: 30, right: 30 }}>
                    <Image source={require('../images/favorite.png')} style={{ height: 30, width: 30 }} />
                </TouchableOpacity>
                <View style={styles.detailsContainer}>
                    <Text style={styles.productName}>{data.Name}</Text>
                    <Text style={styles.price}>{getPriceBySize(selectedSize).toLocaleString()}đ</Text>
                    <Text style={styles.description}>{data.LongDescription}</Text>

                    <Text style={styles.sectionTitle}>Size</Text>
                    <RadioButton.Group onValueChange={newValue => setSelectedSize(newValue)} value={selectedSize}>
                        {['SizeSmall', 'SizeMedium', 'SizeLarge'].map((size, index) => (
                            <View key={index} style={styles.sizeOption}>
                                <RadioButton value={size} />
                                <View style={styles.sizeLabelContainer}>
                                    <Text style={styles.sizeText}>{mapSizeToDisplayValue(size)}</Text>
                                    <Text style={styles.sizePrice}>{getPriceBySize(size).toLocaleString()}đ</Text>
                                </View>
                            </View>
                        ))}
                    </RadioButton.Group>
                </View>
            </ScrollView>
            <View style={styles.payment}>
                <View style={styles.quantityContainer}>
                    <TouchableOpacity onPress={decreaseQuantity} style={styles.quantityButton}>
                        <Text style={styles.quantityButtonText}>-</Text>
                    </TouchableOpacity>
                    <Text style={styles.quantityText}>{quantity}</Text>
                    <TouchableOpacity onPress={increaseQuantity} style={styles.quantityButton}>
                        <Text style={styles.quantityButtonText}>+</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.orderButton} onPress={() => AddtoCartHandler()}>
                    <Text style={styles.orderButtonText}>Chọn • {(getTotalPrice()).toLocaleString()}đ</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    ScrollViewFlex: {
        flexGrow: 1,
        justifyContent: 'space-between',
    },
    image: {
        width: window.width,
        height: 400,
        borderRadius: 2,
        resizeMode: "stretch",
    },
    detailsContainer: {
        padding: 16,
    },
    productName: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    price: {
        fontSize: 20,
        color: 'black',
        marginVertical: 8,
        fontWeight: '700'
    },
    description: {
        fontSize: 16,
        color: '#555',
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 16,
    },
    sizeOption: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    sizeLabelContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1,
        marginLeft: 8,
    },
    sizeText: {
        fontSize: 16,
    },
    sizePrice: {
        fontSize: 14,
        color: '#888',
    },
    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        margin: 10
    },
    quantityButton: {
        padding: 8,
        backgroundColor: '#fef7e6',
        width: 40,
        height: 40,
        borderRadius: 30,
        alignItems: 'center'
    },
    quantityButtonText: {
        fontSize: 20,
        color: '#e47907',
    },
    quantityText: {
        fontSize: 20,
        marginHorizontal: 16,
    },
    orderButton: {
        backgroundColor: 'orange',
        padding: 16,
        borderRadius: 4,
        alignItems: 'center',
        width: '60%',
    },
    orderButtonText: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
    },
    payment: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
});

export default ChiTietSanPham;
