import React, { useEffect, useState } from 'react';
import { View, Image, Text, StyleSheet, SafeAreaView, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import { firebase } from '../firebase/FirebaseConfig';
import { COLORS } from '../theme/theme';

const DonHang = () => {
    const [selectedStatus, setSelectedStatus] = useState('Đang thực hiện');
    const [isLoading, setIsLoading] = useState(true);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetchOrders();
    }, [selectedStatus]);

    const fetchOrders = async () => {
        try {
            setIsLoading(true);
            const ordersRef = firebase.firestore().collection('OrderData');
            const snapshot = await ordersRef.get();
            const fetchedOrders = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setOrders(fetchedOrders);
            setIsLoading(false);
        } catch (error) {
            console.error('Error fetching orders:', error);
            setIsLoading(false);
        }
    };

    const handleStatusChange = (status) => {
        if (status !== selectedStatus) {
            setSelectedStatus(status);
        }
    };

    const updateOrderStatus = async (orderId, newStatus) => {
        try {
            const orderRef = firebase.firestore().collection('OrderData').doc(orderId);
            await orderRef.update({ statusOrder: newStatus });
            fetchOrders();
        } catch (error) {
            console.error('Error updating order status:', error);
        }
    };

    const renderOrderItem = ({ item }) => (
        <View style={styles.itemContainer}>
            <Text style={styles.itemText}>{item.productName}</Text>
            <Text style={styles.itemDetail}>Số lượng: {item.quantity}</Text>
            <Text style={styles.itemDetail}>Giá: {item.totalPrice.toLocaleString()}đ</Text>
        </View>
    );

    const renderOrder = ({ item }) => {
        const ordersWithSelectedStatus = orders.filter(order => order.statusOrder === selectedStatus);

        return (
            <View style={styles.orderContainer}>
                {ordersWithSelectedStatus.length > 0 ? (
                    <View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Image source={require('../images/cup.png')} style={styles.icon} />
                                <View>
                                    <FlatList
                                        data={item.items}
                                        renderItem={renderOrderItem}
                                        keyExtractor={(item, index) => index.toString()}
                                        style={styles.itemList}
                                    />
                                </View>
                            </View>
                            <View style={{ marginLeft: 60 }}>
                                <Text style={styles.totalCostText}>Tổng {item.totalOrderPrice.toLocaleString()}đ</Text>
                                {selectedStatus === 'Đang thực hiện' && (
                                    <View style={styles.actionButtons}>
                                        <TouchableOpacity
                                            style={[styles.actionButton, { backgroundColor: '#5F374B' }]}
                                            onPress={() => updateOrderStatus(item.id, 'Đã hoàn tất')}
                                        >
                                            <Text style={styles.actionButtonText}>Đã nhận hàng</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity
                                            style={[styles.actionButton, { backgroundColor: 'orange' }]}
                                            onPress={() => updateOrderStatus(item.id, 'Đã hủy')}
                                        >
                                            <Text style={styles.actionButtonText}>Hủy</Text>
                                        </TouchableOpacity>
                                    </View>
                                )}
                            </View>
                        </View>
                        <Text style={styles.totalCostText}>Địa chỉ: {item.addressShip}</Text>
                    </View>
                ) : (
                    <View style={{ alignItems: 'center' }}>
                        <Image source={require('../images/coffeeempty.png')} style={{ height: 100, width: 100 }} />
                        <Text style={styles.emptyText}>Chưa có sản phẩm trong đơn hàng</Text>
                    </View>
                )}
            </View>
        );
    };




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
            ) : orders.length === 0 ? (
                <View style={styles.emptyContainer}>
                    <Image source={require('../images/coffeeempty.png')} style={{ height: 100, width: 100 }} />
                    <Text style={styles.emptyText}>Chưa có đơn hàng nào {selectedStatus}</Text>
                </View>
            ) : (
                <FlatList
                    data={orders.filter(order => order.statusOrder === selectedStatus)}
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
        borderBottomColor: 'black'
    },
    actionButton: {
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 10,
    },
    actionButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    actionButtons: {
        flexDirection: 'row',
        marginTop: 10,
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
    itemDetail: {
        fontSize: 16,
        color: 'black',
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
