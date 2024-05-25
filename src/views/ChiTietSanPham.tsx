import { Button, Dimensions, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, SPACING } from "../theme/theme";
import React, { useState } from "react";
import { RadioButton } from "react-native-paper";

const window = Dimensions.get('window');

function ChiTietSanPham({ navigation, route }) {
    const { data } = route.params;
    const [quantity, setQuantity] = useState(1);
    const [selectedSize, setSelectedSize] = useState('Lớn');
    const prices: { [key: string]: number } = {
        'Lớn': 65000,
        'Vừa': 59000,
        'Nhỏ': 49000,
    };


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

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.ScrollViewFlex}>
                <Image source={require('../images/coffee.png')} style={styles.image} />
                <TouchableOpacity style={{ position: 'absolute', top: 30, left: 30 }} onPress={handlePress}>
                    <Image source={require('../images/back.png')} style={{ height: 30, width: 30 }} />
                </TouchableOpacity>
                <TouchableOpacity style={{ position: 'absolute', top: 30, right: 30 }}>
                    <Image source={require('../images/favorite.png')} style={{ height: 30, width: 30 }} />
                </TouchableOpacity>
                <View style={styles.detailsContainer}>
                    <Text style={styles.productName}>{data[0].name}</Text>
                    <Text style={styles.price}>{prices[selectedSize].toLocaleString()}đ</Text>
                    <Text style={styles.description}>
                        {data[0].des} <Text style={styles.moreText}>Xem thêm</Text>
                    </Text>

                    <Text style={styles.sectionTitle}>Size</Text>
                    <RadioButton.Group onValueChange={newValue => setSelectedSize(newValue)} value={selectedSize}>
                        {['Lớn', 'Vừa', 'Nhỏ'].map((size) => (
                            <View key={size} style={styles.sizeOption}>
                                <RadioButton value={size} />
                                <View style={styles.sizeLabelContainer}>
                                    <Text style={styles.sizeText}>{size}</Text>
                                    <Text style={styles.sizePrice}>{prices[size].toLocaleString()}đ</Text>
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
                <TouchableOpacity style={styles.orderButton}>
                    <Text style={styles.orderButtonText}>Chọn • {(prices[selectedSize] * quantity).toLocaleString()}đ</Text>
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
    moreText: {
        color: 'orange',
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
