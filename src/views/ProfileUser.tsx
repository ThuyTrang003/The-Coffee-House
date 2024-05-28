import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import { COLORS, FONTFAMILY } from '../theme/theme';
import { firebase } from "../firebase/FirebaseConfig";

const ProfileUser = ({ navigation, route }) => {
    const { user } = route.params;
    const [fullName, setFullName] = useState('');
    const [gender, setGender] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [loading, setLoading] = useState(true);
    const [userData, setUserData] = useState(null);
    const [phoneNumberError, setPhoneNumberError] = useState(false);

    const handleGetUserInfo = async () => {
        try {
            console.log('Fetching data for user:', user.uid);
            const userProfileRef = firebase.firestore().collection('UserProfile');
            const querySnapshot = await userProfileRef.where('UserID', '==', user.uid).get();
            if (!querySnapshot.empty) {
                const doc = querySnapshot.docs[0];
                const data = doc.data();
                console.log('User data:', data);
                setUserData(data);
                setFullName(data.Name || '');
                setGender(data.Gender || '');
                setPhoneNumber(data.Phone || '');
            } else {
                console.log('No such document!');
            }
        } catch (error) {
            console.error('Error fetching user data:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        handleGetUserInfo();
    }, []);

    function validatePhoneNumber(value: string): boolean {
        const re = /^(?:\+84|0)(?:[3|5|7|8|9])[0-9]{8,9}$/;
        return re.test(value);
    }

    const handleBackHome = () => {
        navigation.goBack();
    }

    const handleUpdate = async () => {
        try {
            if (!validatePhoneNumber(phoneNumber)) {
                setPhoneNumberError(true);
                return;
            }
            setPhoneNumberError(false);

            const userProfileRef = firebase.firestore().collection('UserProfile');
            const querySnapshot = await userProfileRef.where('UserID', '==', user.uid).get();

            if (!querySnapshot.empty) {
                const docRef = querySnapshot.docs[0].ref;
                const updatedData = {
                    Name: fullName,
                    Gender: gender,
                    Phone: phoneNumber
                };

                await docRef.update(updatedData);

                alert('Dữ liệu đã được cập nhật thành công.');
            } else {
                await userProfileRef.add({
                    UserID: user.uid,
                    Name: fullName,
                    Gender: gender,
                    Phone: phoneNumber
                });

                alert('Đã tạo mới ProfileUser thành công.');
            }
        } catch (error) {
            console.error('Lỗi khi cập nhật dữ liệu:', error);
        }
    };

    if (loading) {
        return (
            <SafeAreaView style={styles.container}>
                <ActivityIndicator size="large" color={COLORS.primaryDarkGreyHex} />
            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity style={{ position: 'absolute', top: 20, left: 25 }} onPress={handleBackHome}>
                <Image source={require('../images/back.png')} style={{ height: 30, width: 30 }} />
            </TouchableOpacity>
            <Text style={styles.headerText}>Thông tin cá nhân</Text>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Họ tên</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Nhập họ tên"
                    value={fullName}
                    onChangeText={setFullName}
                />
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.label}>Giới tính</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Nhập giới tính"
                    value={gender}
                    onChangeText={setGender}
                />
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.label}>Số điện thoại</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Nhập số điện thoại"
                    value={phoneNumber}
                    onChangeText={setPhoneNumber}
                    keyboardType="phone-pad"
                />
            </View>
            {phoneNumberError && (
                <Text style={styles.ErrorMessage}>Số điện thoại không hợp lệ!</Text>
            )}

            <TouchableOpacity style={styles.button} onPress={handleUpdate}>
                <Text style={styles.buttonText}>Cập nhật thông tin</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 20,
    },
    headerText: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 10,
        color: COLORS.primaryDarkGreyHex,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    inputContainer: {
        marginBottom: 15,
    },
    ErrorMessage: {
        fontSize: 10,
        alignSelf: 'flex-end',
        color: 'red',
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
        color: COLORS.primaryDarkGreyHex,
        marginTop: 10
    },
    input: {
        height: 40,
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        backgroundColor: '#f9f9f9'
    },
    button: {
        backgroundColor: COLORS.primaryDarkGreyHex,
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 20,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default ProfileUser;
