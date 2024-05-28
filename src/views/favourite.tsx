import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import Modal from 'react-native-modal';
import { ScrollView } from 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Dropdown } from 'react-native-element-dropdown';
import { FlatList } from "react-native-gesture-handler";

const screenWidth = Dimensions.get('window').width;

function heartButton(tick: boolean): React.JSX.Element {
    if (tick == false)
        return (
            <Image source={require('../images/heart.png')}
                style={{ height: 25, width: 25, marginRight: 10, marginLeft: 10 }} />
        )
    else
        return (
            <Image source={require('../images/heartRed.png')}
                style={{ height: 25, width: 25, marginRight: 10, marginLeft: 10 }} />
        )
}

function GioHang(): React.JSX.Element {
    //dữ liệu
    const [data, setData] = useState([
        { id: '1', name: 'Olong Tứ Quý Vải1', price: '30000', status: true }, //status là trạng thái 
        { id: '2', name: 'Olong Tứ Quý Vải2', price: '35000', status: true },
        { id: '3', name: 'Olong Tứ Quý Vải3', price: '40000', status: true },
        { id: '4', name: 'Olong Tứ Quý Vải4', price: '40000', status: true },
        { id: '5', name: 'Olong Tứ Quý Vải5', price: '40000', status: true },
        { id: '6', name: 'Olong Tứ Quý Vải6', price: '40000', status: true },
        { id: '7', name: 'Olong Tứ Quý Vải7', price: '40000', status: true },
    ]);
    const setStatus = (id: string, newStatus: boolean) => {
        setData(prevData =>
            prevData.map(item =>
                item.id === id ? { ...item, status: newStatus } : item
            )
        );
    }
    const renderItem = ({ item }) => (
        <View style={styles.titleComponent}>
            <View style={[styles.item]}>
                <Image source={require('../images/coffee.png')} //ảnh sp
                    style={{ height: 60, width: 60, marginRight: 10 }} />
                <View>
                    <View style={[styles.categoryInfor]}>
                        <Text style={[styles.fontWeight, { fontSize: 16, color: 'black' }]}>
                            {item.name}</Text>
                    </View>
                    <Text style={[styles.fontWeightLight, { fontSize: 15, color: 'black', marginBottom: 10 }]}>
                        {item.price} đ</Text>

                </View>
                <TouchableOpacity
                    onPress={() => { setStatus(item.id, !item.status) }} >
                    {heartButton(item.status)}
                </TouchableOpacity>
            </View>
        </View>
    );
    //hàm chính
    return (
        <View style={styles.background}>
            <View style={styles.header}>
                <Image source={require('../images/left-arrow.png')}
                    style={{ height: 15, width: 15 }} />
                <Text style={[styles.fontWeight, { fontSize: 15, color: 'black', marginLeft: (screenWidth - 230) / 2 }]}>
                    Sản phẩm yêu thích</Text>
            </View>
            <GestureHandlerRootView>
                <ScrollView>
                    
                    {/* chứa component */}
                    <FlatList
                        data={data}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                    />

                </ScrollView>
            </GestureHandlerRootView>
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
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomColor: 'lightgray',
        borderBottomWidth: 1,
        paddingBottom: 10,
        paddingTop: 10,
    },
    categoryInfor: {
        width: (screenWidth) / 7 * 4,
        marginBottom: 10,
        //backgroundColor: 'gray',
    },








});

export default GioHang;
