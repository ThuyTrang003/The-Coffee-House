import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const window = Dimensions.get('window');
const StoreCard = ({ item }) => {

    return (
        <View style={styles.boxInfo}>
            <Image source={{ uri: item.ImageSource }} style={styles.imageLocation}></Image>
            <View style={styles.directionBoxLocation}>
                <Text style={styles.textName}>{item.Name}</Text>
                <Text style={styles.textStreet}>{item.Street}</Text>
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
        fontSize: 20,
        fontWeight: '600',
        color: 'black'
    },
    textStreet: {
        fontSize: 15,
        color: 'black'
    },
    textDistance: {
        fontSize: 12,
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

export default StoreCard;
