import React, { useState, useEffect } from 'react';
import { View, Image, Text, StyleSheet, SafeAreaView, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import { COLORS, FONTFAMILY } from '../theme/theme';

const DonHang = () => {
    const [selectedStatus, setSelectedStatus] = useState('Đang thực hiện');
    const [isLoading, setIsLoading] = useState(true);

    const orders = [
        {
            id: '1',
            status: 'Đang thực hiện',
            items: [
                { id: '1', name: 'Oolong Tứ Quý Vải' },
                { id: '2', name: 'Oolong Tứ Quý Vải' },
                { id: '3', name: '1 sản phẩm khác' },
            ],
            totalCost: '305.000đ',
            orderTime: '16:20 - 25/05/2024',
        },
        // {
        //     id: '2',
        //     status: 'Đã hoàn tất',
        //     items: [
        //         { id: '1', name: 'Oolong Tứ Quý Vải' },
        //         { id: '2', name: 'Oolong Tứ Quý Vải' },
        //         { id: '3', name: '1 sản phẩm khác' },
        //     ],
        //     totalCost: '200.000đ',
        //     orderTime: '14:10 - 22/05/2024',
        // },
        {
            id: '3',
            status: 'Đã hủy',
            items: [
                { id: '1', name: 'Oolong Tứ Quý Vải' },
                { id: '2', name: 'Oolong Tứ Quý Vải' },
                { id: '3', name: '1 sản phẩm khác' },
            ],
            totalCost: '150.000đ',
            orderTime: '12:00 - 20/05/2024',
        },
        {
            id: '4',
            status: 'Đã hủy',
            items: [
                { id: '1', name: 'Oolong Tứ Quý Vải' },
                { id: '2', name: 'Oolong Tứ Quý Vải' },
                { id: '3', name: '1 sản phẩm khác' },
            ],
            totalCost: '150.000đ',
            orderTime: '12:00 - 20/05/2024',
        }
    ];

    const filteredOrders = orders.filter(order => order.status === selectedStatus);
    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsLoading(false);
        }, 1000);

        return () => clearTimeout(timeout);
    }, [selectedStatus]);
    const handleStatusChange = (status) => {
        if (status !== selectedStatus) {
            setIsLoading(true);
            setSelectedStatus(status);
        }
    };

    const renderOrderItem = ({ item }) => (
        <View style={styles.itemContainer}>
            <Text style={styles.itemText}>{item.name}</Text>
        </View>
    );

    const renderOrder = ({ item }) => (
        <View style={styles.orderContainer}>
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <Image source={require('../images/cup.png')} style={styles.icon}></Image>
                <View>
                    <FlatList
                        data={item.items}
                        renderItem={renderOrderItem}
                        keyExtractor={item => item.id}
                        style={styles.itemList}
                    />
                    <Text style={styles.orderTimeText}>{item.orderTime}</Text>
                </View>
            </View>
            <View>
                <Text style={styles.totalCostText}>{item.totalCost}</Text>
            </View>
        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.headerText}>Lịch sử đơn hàng</Text>
            <View style={styles.statusContainer}>
                <TouchableOpacity onPress={() => handleStatusChange('Đang thực hiện')} style={[styles.statusButton, selectedStatus === 'Đang thực hiện' && styles.selectedStatusButton]}>
                    <Text style={[styles.statusText, selectedStatus === 'Đang thực hiện' && styles.selectedStatusText]}>Đang thực hiện</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleStatusChange('Đã hoàn tất')} style={[styles.statusButton, selectedStatus === 'Đã hoàn tất' && styles.selectedStatusButton]}>
                    <Text style={[styles.statusText, selectedStatus === 'Đã hoàn tất' && styles.selectedStatusText]}>Đã hoàn tất</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleStatusChange('Đã hủy')} style={[styles.statusButton, selectedStatus === 'Đã hủy' && styles.selectedStatusButton]}>
                    <Text style={[styles.statusText, selectedStatus === 'Đã hủy' && styles.selectedStatusText]}>Đã hủy</Text>
                </TouchableOpacity>
            </View>
            {isLoading ? (
                <View style={styles.loadingContainer}>
                    <ActivityIndicator size="large" color={COLORS.primaryGreyHex} />
                </View>
            ) : filteredOrders.length === 0 ? (
                <View style={styles.emptyContainer}>
                    <Image source={require('../images/coffeeempty.png')} style={{ height: 100, width: 100 }}></Image>
                    <Text style={styles.emptyText}>Chưa có đơn hàng nào {selectedStatus}</Text>
                </View>
            ) : (
                <FlatList
                    data={filteredOrders}
                    renderItem={renderOrder}
                    keyExtractor={item => item.id}
                />
            )}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 10,
        color: COLORS.primaryDarkGreyHex,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    },
    statusContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 10,
    },
    statusButton: {
        padding: 10,
        borderRadius: 30,
    },
    selectedStatusButton: {
        backgroundColor: '#fef7e5',
    },
    selectedStatusText: {
        color: 'orange',
    },
    statusText: {
        fontSize: 16,
    },
    orderContainer: {
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    itemList: {
        marginVertical: 10,
    },
    itemContainer: {
        paddingVertical: 5,
    },
    itemText: {
        fontSize: 18,
        color: 'black',
        fontWeight: 'bold'
    },
    totalCostText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    orderTimeText: {
        fontSize: 14,
        color: 'gray',
    },
    icon: {
        height: 50,
        width: 50,
        marginRight: 20,
    },
    emptyText: {
        fontSize: 18,
        color: 'gray',
    },
    emptyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default DonHang;
