
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const window = Dimensions.get('window');
const ItemCard = () => {
    return (
        <View style={styles.boxInfo}>
            <Image source={require('../images/location1.jpg')} style={styles.imageLocation}></Image>
            <View style={styles.directionBoxLocation}>
                <Text style={styles.textName}>THE COFFEE HOUSE</Text>
                <Text style={styles.textAddress}>HCM Đường D1</Text>
                <Text style={styles.textDistance}>Cách đây 0.7km</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    imageLocation: {
        width: 100,
        height: 100,
        borderRadius: 5,
        resizeMode: "stretch"
    },
    textName: {
        fontSize: 10,
        fontWeight: '600',
    },
    textAddress: {
        fontSize: 20,
        color: 'black'
    },
    textDistance: {
        fontSize: 15,
        color: '#C0BDBD',
    },
    directionBoxLocation: {
        margin: 10
    },
    boxInfo: {
        width: window.width - 30,
        height: 120,
        backgroundColor: '#FCFCFC',
        borderRadius: 10,
        padding: 15,
        margin: 5,
        justifyContent: 'flex-start',
        flexDirection: 'row',
        alignItems: 'center'
    },
});

export default ItemCard;




