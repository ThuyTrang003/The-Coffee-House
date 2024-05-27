import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

const Item = ({ data }) => {
    return (
        <View style={styles.item}>
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity>
                    <Image source={require('../images/bin.png')} style={{ height: 17, width: 17, marginRight: 10 }} />
                </TouchableOpacity>
                <View>
                    <View style={[styles.categoryInfor]}>
                        <Text style={[styles.fontWeight, { fontSize: 12, color: 'black' }]}>
                            {data.productName}
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={[styles.fontWeight, { marginRight: 10 }]}>{data.itemSize}</Text>
                        <View style={[styles.quantityButton]} >
                            {/* <TouchableOpacity onPress={data.decreaseCount}>
                                <Image source={require('../images/minus.png')} style={{ height: 13, width: 15 }} />
                            </TouchableOpacity> */}
                            <Text style={[styles.fontWeightLight, { fontSize: 15, color: 'dimgray' }]}>{data.itemQuantity}</Text>
                            {/* <TouchableOpacity onPress={data.increaseCount}>
                                <Image source={require('../images/plus1.png')} style={{ height: 13, width: 15 }} />
                            </TouchableOpacity> */}
                        </View>
                    </View>
                </View>
            </View>
            <Text style={{ fontSize: 12, color: 'black', marginBottom: 10 }}>{data.price}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomColor: 'lightgray',
        borderBottomWidth: 1,
        paddingBottom: 10,
        paddingTop: 10,
    },
    categoryInfor: {
        width: (screenWidth) / 5 * 3,
        marginBottom: 10,
    },
    fontWeightLight: {
        fontFamily: 'Roboto-Light',
    },
    fontWeight: {
        fontWeight: 'bold',
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
        alignItems: 'center'
    },
});

export default Item;
