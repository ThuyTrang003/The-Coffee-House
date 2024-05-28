import { Dimensions, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, SPACING } from "../theme/theme";
import React, { useState } from "react";
import { Dropdown } from 'react-native-element-dropdown';

const screenWidth = Dimensions.get('window').width;

function itemCart(item: any): React.JSX.Element {
    //chứa dữ liệu của 1 item
    // biến cho size
    const sizes = [
        { label: 'S', value: 'S' },
        { label: 'M', value: 'M' },
        { label: 'L', value: 'L' },
    ];
    const [openSize, setOpenSize] = useState(false);
    const [selectedSize, setSelectedSize] = useState(item.Size); //biến 

    const selectSize = (newSize: any) => {
        setSelectedSize(newSize);
        setOpenSize(false);
        //cập nhật số lượng lại vào trong item
        //item.Size = newSize;
    };

    //biến cho số lượng 
    const [count, setCount] = useState(item.Quantity);

    const increaseCount = () => {
        setCount(count + 1);
        //cập nhật số lượng
        //item.Quantity = count;
    };
    const decreaseCount = () => {
        if (count > 1)
            setCount(count - 1);
        //cập nhật số lượng
        //item.Quantity = count;
    };
    //biến cho giá
    const [price, setPrice] = useState(item.Price);

    return (
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
                            Olong Tứ Quý Vải</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Dropdown
                            style={[styles.dropdown, {}]}
                            placeholderStyle={styles.placeholderStyle}
                            selectedTextStyle={styles.selectedTextStyle}
                            itemTextStyle={styles.itemTextStyle}
                            iconStyle={styles.iconStyle}
                            data={sizes}
                            labelField="label"
                            valueField="value"
                            placeholder="S" // lấy thông tin
                            value={selectedSize}
                            onChange={item => {
                                selectSize(item.value);
                            }}
                        />
                        {/* số lượng */}
                        <View style={[styles.quantityButton]} >
                            <TouchableOpacity
                                onPress={decreaseCount}>
                                <Image source={require('../images/minus.png')}
                                    style={{ height: 13, width: 15 }} />

                            </TouchableOpacity>

                            <Text style={[styles.fontWeightLight, { fontSize: 15, color: 'dimgray' }]}>
                                {count}</Text>

                            <TouchableOpacity
                                onPress={increaseCount}>
                                <Image source={require('../images/plus1.png')}
                                    style={{ height: 13, width: 15 }} />

                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
            {/* tổng giá */}
            <Text style={{ fontSize: 12, color: 'black', marginBottom: 10 }}>
                {price}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    //dropdown
    dropdown: {
        height: 30,
        width: 60,
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
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomColor: 'lightgray',
        borderBottomWidth: 1,
        paddingBottom: 10,
        paddingTop: 10,
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
    fontWeightLight: {
        fontFamily: 'Roboto-Light',
    },
    fontWeight: {
        fontWeight: 'bold',
    },
    button1: {
        backgroundColor: '#DBAFA0',
        borderRadius: 15,
        paddingVertical: 5,
        paddingHorizontal: 10,
    },
    categoryInfor: {
        width: (screenWidth) / 5 * 3,
        marginBottom: 10,
    },
});

export default itemCart;

