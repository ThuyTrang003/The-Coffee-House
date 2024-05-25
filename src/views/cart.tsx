import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const screenWidth = Dimensions.get('window').width;

function tickButton(tick: boolean): React.JSX.Element {
    if (tick == false)
        return (
            <Image source={require('../images/square.png')}
                style={{ height: 19, width: 19, marginRight: 7 }} />)
    else
        return (
            <Image source={require('../images/check-box.png')}
                style={{ height: 17, width: 17, marginRight: 7 }} />)
}

function PersonalInfor(): React.JSX.Element {

    return (
        <View style={styles.background}>
            <View style={styles.header}>
                <Image source={require('../images/left-arrow.png')}
                    style={{ height: 15, width: 15 }} />
                <Text style={[styles.fontWeight, { fontSize: 15, color: 'black', marginLeft: (screenWidth - 140) / 2 }]}>
                    Giỏ hàng</Text>
            </View>
            
        </View>


    );
}

const styles = StyleSheet.create({

    background: {
        flex: 1,
        margin: 20,
    },
    header: {
        backgroundColor: 'white',
        flexDirection: 'row',
        borderBottomColor: 'gainsboro',
        borderBottomWidth: 1,
        paddingBottom: 10,

    },
    cartItem: {
        
    },
    mainView: {
        marginTop: 15,
        alignItems: 'center',
    },
    fontWeightLight: {
        fontFamily: 'Roboto-Light',
    },
    fontWeight: {
        fontWeight: 'bold',
    },
    scrollView: {
        borderColor: 'gainsboro',
        borderBottomWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
    },
    birthOptions: {
        top: 45,
        position: 'absolute',
        zIndex: 2,
        width: (screenWidth - 60) / 2,
        height: 225,
        backgroundColor: 'white',
    },
    button: {
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#5F374B',
        borderRadius: 8,
        width: '100%',
        height: 40,
    },
    component1: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'center',
    },

    textInput: {
        fontSize: 13,
        marginLeft: 10,
        width: '80%'
    },
    dieuKhoan: {
        marginLeft: 15,
        marginRight: 15,
        marginTop: 25,
        flexDirection: 'row',
    },
    selectedOptionContainer: {
        backgroundColor: 'lightblue',
    },
});

export default PersonalInfor;
