import React from 'react';
import {StyleSheet, Text, View,Image, ImageBackground,TextInput,TouchableOpacity,TouchableHighlight } from 'react-native';

function Login(): React.JSX.Element {
    return (
        <ImageBackground style= {styles.background}
        source= {require('../images/loginBackground.jpg')} >
            <View style= {styles.mainView}>
                <View style={styles.items}>
                    <Text style={[styles.fontWeight],{fontSize: 11, color: 'black', marginTop:5}}>
                        Chào mừng bạn đến với</Text>
                    <Text style={[styles.fontWeight],{fontSize: 17, color: 'black', marginTop:5,marginBottom:20}}>
                        THE COFFEE HOUSE</Text>
                    <View style={[styles.textBox]}>
                        <TextInput
                            keyboardType= 'email-address'
                            placeholder='Email'
                            style= {styles.textInput}
                        />
                    </View>
                    <View style={[styles.textBox]}>
                        <TextInput
                            secureTextEntry = {true}
                            placeholder='Password'
                            style= {styles.textInput}
                        />
                        <TouchableOpacity>
                            <Image source= {require('../images/visible.png')}
                                style={{height:20, width:20, marginRight: 10}}/>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={[styles.button]}>
                        <Text style={[styles.fontWeight],{fontSize: 14, color: 'white' }}>
                            Đăng nhập</Text>
                    </TouchableOpacity>
                    <View style={styles.component1}>
                        <Text style={[styles.fontWeight],{fontSize: 13, color: 'gray'}}>
                            Don't have an account? </Text>
                        <TouchableOpacity underlayColor="lightgray">
                            <Text style={[styles.fontWeight],{fontSize: 13, color: 'black'}}>
                                Sign up</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        </ImageBackground>


    );
}

const styles = StyleSheet.create({
    background: {
        flex:1,
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
        marginTop:15,
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor: '#FFAF45',
        borderRadius: 8,
        width: '100%',
        height: 40,
    },
    component1: {
        marginTop:20,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    textBox: {
        marginTop:15,
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

export default Login;
