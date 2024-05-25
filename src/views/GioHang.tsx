import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Dimensions, Modal } from 'react-native';
// import Modal from 'react-native-modal';
import { ScrollView } from 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const screenWidth = Dimensions.get('window').width;



function GioHang(): React.JSX.Element {
    function renderModal() {
        return (
            <Modal
                visible={openModal}

                style={styles.modal}
            >
                <View style={styles.categoryItem}>
                    <View style={{ flexDirection: 'row' }}>
                        <Image source={require('../images/edit.png')}
                            style={{ height: 17, width: 17, marginRight: 10 }} />
                        <View style={[styles.categoryInfor]}>
                            <Text style={[styles.fontWeight, { fontSize: 12, color: 'black' }]}>
                                x1 Olong Tứ Quý Vải</Text>
                            <Text style={[styles.fontWeightLight, { fontSize: 12, color: 'gray' }]}>
                                Nhỏ</Text>
                            <Text style={[styles.fontWeightLight, { fontSize: 12, color: 'gray' }]}>
                                Kem Phô Mai Macchiato</Text>
                            <Text style={[styles.fontWeightLight, { fontSize: 12, color: 'gray' }]}>
                                Kem Phô</Text>
                        </View>
                    </View>
                    <TouchableOpacity
                        onPress={toggleModal}
                        style={[styles.button1]}>
                        <Text style={{ fontSize: 12, color: 'black' }}>
                            Sửa</Text>
                    </TouchableOpacity>
                </View>

            </Modal>
        )
    }
    const [openModal, setOpenModal] = React.useState(false);
    const toggleModal = () => {
        setOpenModal(!openModal);
    };
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
                    <View style={styles.categoryComponent}>
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
                    <View style={styles.categoryComponent}>
                        <View style={styles.component}>
                            <Text style={[styles.fontWeight, { fontSize: 15, color: 'black' }]}>
                                Sản phẩm đã chọn</Text>
                            <TouchableOpacity style={[styles.button1]}>
                                <Text style={{ fontSize: 12, color: 'black' }}>
                                    + Thêm</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={[styles.categoryItem]}>
                            <View style={{ flexDirection: 'row' }}>
                                <Image source={require('../images/edit.png')}
                                    style={{ height: 17, width: 17, marginRight: 10 }} />
                                <View style={[styles.categoryInfor]}>
                                    <Text style={[styles.fontWeight, { fontSize: 12, color: 'black' }]}>
                                        x1 Olong Tứ Quý Vải</Text>
                                    <Text style={[styles.fontWeightLight, { fontSize: 12, color: 'gray' }]}>
                                        Nhỏ</Text>
                                    <Text style={[styles.fontWeightLight, { fontSize: 12, color: 'gray' }]}>
                                        Kem Phô Mai Macchiato</Text>
                                </View>
                            </View>
                            <Text style={{ fontSize: 12, color: 'black' }}>
                                85.000đ</Text>
                        </View>

                        <View style={[styles.categoryItem]}>
                            <View style={{ flexDirection: 'row' }}>
                                <Image source={require('../images/edit.png')}
                                    style={{ height: 17, width: 17, marginRight: 10 }} />
                                <View style={[styles.categoryInfor]}>
                                    <Text style={[styles.fontWeight, { fontSize: 12, color: 'black' }]}>
                                        x1 Olong Tứ Quý Vải</Text>
                                    <Text style={[styles.fontWeightLight, { fontSize: 12, color: 'gray' }]}>
                                        Nhỏ</Text>
                                    <Text style={[styles.fontWeightLight, { fontSize: 12, color: 'gray' }]}>
                                        Kem Phô Mai Macchiato</Text>
                                    <Text style={[styles.fontWeightLight, { fontSize: 12, color: 'gray' }]}>
                                        Kem Phô</Text>
                                </View>
                            </View>
                            <Text style={{ fontSize: 12, color: 'black' }}>
                                85.000đ</Text>
                        </View>

                        <View style={[styles.categoryItem]}>
                            <View style={{ flexDirection: 'row' }}>
                                <Image source={require('../images/edit.png')}
                                    style={{ height: 17, width: 17, marginRight: 10 }} />
                                <View style={[styles.categoryInfor]}>
                                    <Text style={[styles.fontWeight, { fontSize: 12, color: 'black' }]}>
                                        x1 Olong Tứ Quý Vải</Text>
                                    <Text style={[styles.fontWeightLight, { fontSize: 12, color: 'gray' }]}>
                                        Nhỏ</Text>
                                    <Text style={[styles.fontWeightLight, { fontSize: 12, color: 'gray' }]}>
                                        Kem Phô Mai Macchiato</Text>
                                    <Text style={[styles.fontWeightLight, { fontSize: 12, color: 'gray' }]}>
                                        Kem Phô</Text>
                                </View>
                            </View>
                            <Text style={{ fontSize: 12, color: 'black' }}>
                                85.000đ</Text>
                        </View>

                        <View style={[styles.categoryItem]}>
                            <View style={{ flexDirection: 'row' }}>
                                <Image source={require('../images/edit.png')}
                                    style={{ height: 17, width: 17, marginRight: 10 }} />
                                <View style={[styles.categoryInfor]}>
                                    <Text style={[styles.fontWeight, { fontSize: 12, color: 'black' }]}>
                                        x1 Olong Tứ Quý Vải</Text>
                                    <Text style={[styles.fontWeightLight, { fontSize: 12, color: 'gray' }]}>
                                        Nhỏ</Text>
                                    <Text style={[styles.fontWeightLight, { fontSize: 12, color: 'gray' }]}>
                                        Kem Phô Mai Macchiato</Text>
                                    <Text style={[styles.fontWeightLight, { fontSize: 12, color: 'gray' }]}>
                                        Kem Phô</Text>
                                </View>
                            </View>
                            <Text style={{ fontSize: 12, color: 'black' }}>
                                85.000đ</Text>
                        </View>
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
            {/* {renderModal()} */}
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
    categoryComponent: {

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
        padding: 5,
    },
    categoryItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomColor: 'lightgray',
        borderBottomWidth: 1,
        paddingBottom: 10,
        paddingTop: 10,
    },
    categoryInfor: {
        width: (screenWidth) / 5 * 3,
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
        backgroundColor: 'white',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },


});

export default GioHang;
