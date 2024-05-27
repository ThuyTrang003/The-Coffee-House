import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Dimensions, Button, Pressable } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Dropdown } from 'react-native-element-dropdown';
//import DateTimePicker from '@react-native-community/datetimepicker';
//1 component hoạt động, các component khác bị vô hiệu hóa
//trạng thái của button tạo tài khoản khi chưa thực hiện xong
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

    const [tick, setTick] = useState(false);
    const [ho, setHo] = useState('');
    const [ten, setTen] = useState('');
    const [sdt, setSdt] = useState('');

    const days = Array.from({ length: 31 }, (_, index) => index + 1);
    const months = Array.from({ length: 12 }, (_, index) => index + 1);
    const genders = [
        { value: 'Nam' },
        { value: 'Nữ' }
    ];

    const [day, setDay] = useState(null);
    const [month, setMonth] = useState('Tháng sinh');
    const [gender, setGender] = useState('Chưa chọn giới tính');

    const [openGenderDrop, setOpenGenderDrop] = useState(false);
    const selectGender = (option: any) => {
        setGender(option);
        setOpenGenderDrop(false);
    }
    //datetime
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [date, setDate] = useState(new Date());
    const [showPicker, setShowPicker] = useState(false);
    const toggleDatePicker = () => {
        setShowPicker(!showPicker);
    }
    const onChange = (event: any, selectedDate?: Date) => {
        const currentDate = selectedDate || date;
        setShowPicker(false);
        setDate(currentDate);
    };


    return (
        <View style={styles.background}>
            <View style={styles.header}>
                <Image source={require('../images/left-arrow.png')}
                    style={{ height: 15, width: 15 }} />
                <Text style={[styles.fontWeight, { fontSize: 15, color: 'black', marginLeft: (screenWidth - 180) / 2 }]}>
                    Tạo tài khoản</Text>
            </View>

            <View style={styles.mainView}>
                <View style={[styles.textBox]}>
                    <TextInput
                        placeholder='Nhập tên của bạn *'
                        style={styles.textInput}
                        value={ten}
                        onChangeText={(text) => setTen(text)}
                    />
                </View>
                <View style={[styles.textBox]}>
                    <TextInput
                        placeholder='Nhập họ của bạn'
                        style={styles.textInput}
                        value={ho}
                        onChangeText={(text) => setHo(text)}
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

                <View style={[styles.birthday]}>
                    {/* <View>
                        <TouchableOpacity
                            onPress={() => setShowOptionsMonth(!showOptionsMonth)}
                            style={[styles.birthdayButton, { marginRight: 18 }]}>
                            <Text style={[styles.fontWeightLight, { fontSize: 13, color: 'black', marginLeft: 10 }]}>
                                {month}</Text>
                            <Image source={require('../images/down-arrow.png')}
                                style={{ height: 20, width: 20, marginRight: 10 }} />
                        </TouchableOpacity>
                        {showOptionsMonth && (
                            <GestureHandlerRootView style={styles.birthOptions}>
                                <ScrollView style={styles.scrollView}>
                                    {months.map((option) => (
                                        <TouchableOpacity
                                            key={option}
                                            style={[styles.option]}
                                            onPress={() => {
                                                setMonth('Tháng ' + option.toString());
                                                setShowOptionsMonth(!showOptionsMonth);
                                            }}

                                        >

                                            <Text style={[styles.optionText]}>{option}</Text>
                                        </TouchableOpacity>
                                    ))}
                                </ScrollView>
                            </GestureHandlerRootView>
                        )}
                    </View> */}

                    {/* <View>
                        <TouchableOpacity
                            onPress={() => setShowOptionsDay(!showOptionsDay)}
                            style={styles.birthdayButton}>
                            <Text style={[styles.fontWeightLight, { fontSize: 13, color: 'black', marginLeft: 10 }]}>
                                {day}</Text>
                            <Image source={require('../images/down-arrow.png')}
                                style={{ height: 20, width: 20, marginRight: 10 }} />
                        </TouchableOpacity>
                        {showOptionsDay && (
                            <GestureHandlerRootView style={[styles.birthOptions]}
                                >
                                <ScrollView style={styles.scrollView}>
                                    {days.map((option) => (
                                        <TouchableOpacity
                                            key={option}
                                            style={[styles.option]}
                                            onPress={() => { setDay('Ngày ' + option.toString()); setShowOptionsDay(!showOptionsDay); }}
                                        >
                                            <Text style={[styles.optionText]}>{option}</Text>
                                        </TouchableOpacity>
                                    ))}
                                </ScrollView>
                            </GestureHandlerRootView>
                        )}
                    </View> */}

                </View>
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

                <View style={[styles.dieuKhoan]}>
                    <TouchableOpacity onPress={() => setTick(!tick)}>
                        {tickButton(tick)}
                    </TouchableOpacity>
                    <Text style={[styles.fontWeightLight, { fontSize: 13, color: '#5F374B', marginLeft: 10 }]}>
                        Tôi đồng ý với các Điều khoản và điều kiện của The Coffee House </Text>
                </View>
                <TouchableOpacity style={[styles.button]}>
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
        zIndex: 1,
    },
    header: {
        flexDirection: 'row',
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
    birthday: {
        marginTop: 15,
        flexDirection: 'row',
    },
    birthdayButton: {
        borderColor: 'gainsboro',
        borderRadius: 8,
        borderWidth: 1,
        height: 45,
        width: (screenWidth - 60) / 2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'relative',
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
});

export default PersonalInfor;
