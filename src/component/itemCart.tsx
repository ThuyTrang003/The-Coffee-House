import { Dimensions, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, SPACING } from "../theme/theme";
import React, { useState } from "react";
import { Dropdown } from 'react-native-element-dropdown';

const screenWidth = Dimensions.get('window').width;

function ItemCart({item}): React.JSX.Element {
    return(
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
                    <View style={{ flexDirection: 'row'}}>
                        <View style={styles.dropdown}>
                            <Text style={[styles.fontWeightLight, { fontSize: 13, color: 'dimgray' }]}>
                            Size: {item.size}</Text>
                        </View>
                        {/* số lượng */}
                        <View style={[styles.quantityButton]} >
                            <Text style={[styles.fontWeightLight, { fontSize: 12, color: 'dimgray' }]}>
                               Số lượng: {item.quantity}</Text>
                        </View>
                    </View>
                </View>
            </View>
            {/* tổng giá */}
            <Text style={{ fontSize: 14, color: 'black', marginBottom: 10 }}>
                900đ</Text>
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

export default ItemCart;