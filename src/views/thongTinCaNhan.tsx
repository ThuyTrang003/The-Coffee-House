import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Dimensions, Button, Pressable } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Dropdown } from 'react-native-element-dropdown';

const screenWidth = Dimensions.get('window').width;

const isValideSdt = (value: string) => {
    const re = /^(?:\+84|0)(?:[3|5|7|8|9])[0-9]{8,9}$/;
    return re.test(value);
}
function validateSdtComponent(value: string): React.JSX.Element | null {
    const re = /^(?:\+84|0)(?:[3|5|7|8|9])[0-9]{8,9}$/;
    if (re.test(value) == false) {
        return (
            <Text style={styles.ErrorMessage}>
                Số điện thoại không hợp lệ!</Text>
        );
    }
    else return null;
}

function PersonalInfor(): React.JSX.Element {

    const [ten, setTen] = useState('');
    const [sdt, setSdt] = useState('');
    const [isValid, setIsValid] = useState(false);
    const genders = [
        { value: 'Nam' },
        { value: 'Nữ' }
    ];

    const [gender, setGender] = useState('');
    const [openGenderDrop, setOpenGenderDrop] = useState(false);
    const selectGender = (option: any) => {
        setGender(option);
        setOpenGenderDrop(false);
    }
    useEffect(() => {
        if (ten && isValideSdt(sdt) == true && gender)
            setIsValid(true);
        else
            setIsValid(false);
    }, [ten, gender, sdt]);

    return (
        <View style={styles.background}>
            <View style={styles.header}>
                <Image source={require('../images/left-arrow.png')}
                    style={{ height: 15, width: 15 }} />
                <Text style={[styles.fontWeight, { fontSize: 15, color: 'black' }]}>
                    Chỉnh sửa thông tin</Text>
                <TouchableOpacity>
                    <Text style={[styles.fontWeight, { fontSize: 15, color: '#BB8493' }]}>
                        Lưu</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.mainView}>
                <View style={[styles.textBox]}>
                    <TextInput
                        placeholder='Nhập họ và tên của bạn'
                        style={styles.textInput}
                        value={ten}
                        onChangeText={(text) => setTen(text)}
                    />
                </View>
                <View style={[styles.textBox]}>
                    <TextInput
                        keyboardType='phone-pad'
                        placeholder='Số điện thoại của bạn'
                        style={styles.textInput}
                        value={sdt}
                        onChangeText={(text) => setSdt(text)}
                    />
                </View>
                {validateSdtComponent(sdt)}

                <Dropdown
                    style={[styles.dropdown]}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    itemTextStyle={styles.itemTextStyle}
                    iconStyle={styles.iconStyle}
                    data={genders}
                    labelField="value"
                    valueField="value"
                    placeholder="Chưa chọn giới tính"
                    value={gender}
                    onChange={item => {
                        selectGender(item.value);
                    }}
                />
                <TouchableOpacity
                    style={[isValid ? styles.buttonValid : styles.buttonInvalid]}
                    disabled={!isValid}
                >
                    <Text style={[styles.fontWeight, { fontSize: 14, color: 'white' }]}>
                        Tạo tài khoản</Text>
                </TouchableOpacity>

            </View >
        </View >
    );
}

const styles = StyleSheet.create({

    background: {
        flex: 1,
        margin: 20,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        paddingBottom: 10,
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
    textBox: {
        marginTop: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderColor: 'gainsboro',
        borderRadius: 8,
        borderWidth: 1,
        height: 45,
        width: '100%',
    },
    scrollView: {
        borderColor: 'gainsboro',
        borderBottomWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
    },
    genderOptions: {
        top: 60,
        position: 'absolute',
        zIndex: 2,
        height: 90,
        width: '100%',
        backgroundColor: 'white',
    },
    option: {
        width: '100%',
        height: 45,
        borderColor: 'gainsboro',
        borderBottomWidth: 0.5,
    },
    optionText: {
        marginTop: 12,
        marginLeft: 10,
        fontSize: 13,
        color: 'black',
    },
    buttonValid: {
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#5F374B',
        borderRadius: 8,
        width: '100%',
        height: 40,
    },
    buttonInvalid: {
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'gray',
        borderRadius: 8,
        width: '100%',
        height: 40,
    },
    textInput: {
        fontSize: 13,
        marginLeft: 10,
        width: '80%'
    },
    dropdown: {
        borderWidth: 0.5,
        paddingHorizontal: 8,
        marginTop: 15,
        borderColor: 'black',
        borderRadius: 8,
        height: 45,
        width: '100%',
    },
    placeholderStyle: {
        fontSize: 13,
        color: 'black',
    },
    selectedTextStyle: {
        fontSize: 13,
        color: 'black',
    },
    iconStyle: {
        width: 25,
        height: 25,
    },
    itemTextStyle: {
        fontSize: 13,
        color: 'black',
    },
    ErrorMessage: {
        fontSize: 10,
        alignSelf: 'flex-end',
        color: 'red',

    },
});

export default PersonalInfor;
