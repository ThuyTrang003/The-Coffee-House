import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, TextInput, TouchableOpacity, Dimensions } from 'react-native';

function OTPVerify(): React.JSX.Element {
    const screenWidth = Dimensions.get('window').width;

    return (
        <ImageBackground style={styles.background}
            source={require('../images/loginBackground.jpg')} >
            <View style={styles.mainView}>
                <TouchableOpacity style={{ position: 'absolute', top: 10, left: screenWidth - 30 }}>
                    <Image source={require('../images/reject_black.png')}
                        style={{ height: 20, width: 20 }} />
                </TouchableOpacity>
                <View style={styles.items}>
                    <Text style={[styles.fontWeight, { fontSize: 15, color: 'black', marginTop: 20 }]}>
                        Xác nhận mã OTP</Text>
                    <Text style={[styles.fontWeight, { fontSize: 13, color: 'black', marginTop: 5 }]}>
                        Mã xác thực đã được gửi đến địa chỉ email</Text>

                </View>
            </View>
        </ImageBackground>


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
    fontWeight: {
        fontWeight: 'bold',
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
    textBox: {
        marginTop: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderColor: 'gainsboro',
        borderRadius: 8,
        borderWidth: 1,
        height: 40,
        width: '100%',
    },
    textInput: {
        fontSize: 13,
        marginLeft: 10,
    },
});

export default OTPVerify;
