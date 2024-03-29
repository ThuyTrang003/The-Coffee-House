import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import { OtpInput } from 'react-native-otp-entry'
const screenWidth = Dimensions.get('window').width;

function OTPVerify(): React.JSX.Element {
    const focusNext = () => { }
    return (
        <ImageBackground style={styles.background}
            source={require('../images/loginBackground.jpg')} >
            <View style={styles.mainView}>
                <TouchableOpacity style={{ position: 'absolute', top: 10, left: screenWidth - 30 }}>
                    <Image source={require('../images/reject_black.png')}
                        style={{ height: 20, width: 20 }} />
                </TouchableOpacity>
                <View style={styles.items}>
                    <Text style={[styles.fontWeight, { fontSize: 17, color: 'black', marginTop: 20 }]}>
                        Xác nhận mã OTP</Text>
                    <Text style={[styles.fontWeightLight, { fontSize: 13, color: 'black', marginTop: 8 }]}>
                        Mã xác thực đã được gửi đến địa chỉ email</Text>
                    <Text style={[styles.fontWeightLight, { fontSize: 13, color: 'black' }]}>
                        abc@gmail.com</Text>
                    <Text style={[styles.fontWeightLight, { fontSize: 13, color: 'black', marginTop: 40, marginBottom:20 }]}>
                        Nhập mã để tiếp tục</Text>
                    <OtpInput
                        numberOfDigits={6}
                        onTextChange= {(text)=>console.log(text)}
                        focusColor='#5F374B'
                        theme={{
                            pinCodeContainerStyle: {
                                height: 55,
                            }                         
                        }}
                    />                   
                    <View style={styles.component1}>
                        <Text style={[styles.fontWeightLight, { fontSize: 13, color: 'black' }]}>
                            Bạn không nhận được mã? </Text>
                        <TouchableOpacity style={{ alignSelf: 'flex-end' }}>
                            <Text style={[styles.fontWeight, { fontSize: 13, color: 'black' }]}>
                                Gửi lại</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ImageBackground >
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    mainView: {
        backgroundColor: 'white',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    items: {
        margin: 30,
        alignItems: 'center',
    },
    fontWeightLight: {
        fontFamily: 'Roboto-Light',
    },
    fontWeight: {
        fontWeight: 'bold',
    },
    otp: {
        marginTop: 10,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    component1: {
        flexDirection: 'row',
        marginTop: 25,
    }
});

export default OTPVerify;
