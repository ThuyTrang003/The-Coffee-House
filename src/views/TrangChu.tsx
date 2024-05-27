import { SetStateAction, useEffect, useState } from "react";
import { Dimensions, Image, StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView } from "react-native";
import ItemCard from "../component/ItemCard";
import { FlatList } from "react-native-gesture-handler";
import { firebase } from '../firebase/FirebaseConfig'
const window = Dimensions.get('window');
function TrangChu({ navigation, route }) {
    // const {user} = route.params;
    const [value, setFindText] = useState("");
    const [selectedDrink, setSelectedDrink] = useState('Cappucchino');
    const handleFind = (text) => {
        setFindText(text);
    }
    const handleBackLogin = () => {
        //goBack();
    };
    const drink = ['Coffee', 'Tea', 'Juice'];

    const [CoffeeData, setCoffeData] = useState([])
    const coffeeDataQry = firebase.firestore().collection('CoffeeData')

    const [TeaData, setTeaData] = useState([])
    const teaDataQry = firebase.firestore().collection('TeaData')
    useEffect(() => {
        coffeeDataQry.onSnapshot(snapshot => {
            setCoffeData(snapshot.docs.map(doc => doc.data()))
        })
        teaDataQry.onSnapshot(snapshot => {
            setTeaData(snapshot.docs.map(doc => doc.data()))
        })
    }, [])
    console.log(CoffeeData)
    console.log(TeaData)
    const handleSelectedDrink = (value) => {
        if (value != selectedDrink) {
            setSelectedDrink(value);
        }
    }

    const handlePress = (selectedItem) => {
        navigation.navigate('ChiTietSanPham', { data: selectedItem });
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.spaceIconHeader}>
                    <TouchableOpacity>
                        <Image source={require('../images/category.png')} style={styles.icon}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleBackLogin()}>
                        <Image source={require('../images/user.png')} style={styles.icon}></Image>
                    </TouchableOpacity>
                </View>
                <View style={{ marginTop: 10 }}>
                    <Text style={styles.textTitle}>Chào bạn, hãy tìm kiếm{'\n'}lựa chọn tốt nhất cho mình nhé</Text>
                </View>
                <View style={styles.boxFind}>
                    <TouchableOpacity>
                        <Image source={require('../images/find.png')} style={styles.icon}></Image>
                    </TouchableOpacity>
                    <TextInput
                        style={styles.input}
                        placeholder="Tìm kiếm"
                        clearButtonMode="always"
                        value={value}
                        placeholderTextColor={'gray'}
                        onChangeText={text => handleFind(text)}
                        autoCapitalize="none"
                    />
                </View>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <View style={styles.drinkContainer}>
                        {drink.map((item, index) => (
                            <TouchableOpacity
                                key={index}
                                onPress={() => handleSelectedDrink(item)}>
                                <Text style={[styles.drinkText, selectedDrink === item && styles.selectedDrinkText]}>{item}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </ScrollView>
            </View>
            <View style={styles.footer}>
                <ScrollView>
                    <FlatList
                        data={CoffeeData}
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={() => handlePress(item)}>
                                <ItemCard item={item} />
                            </TouchableOpacity>

                        )}
                        keyExtractor={(item, index) => index.toString()} // Sử dụng index nếu không có ID
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    />
                    <FlatList
                        data={TeaData}
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={() => handlePress(item)}>
                                <ItemCard item={item} />
                            </TouchableOpacity>

                        )}
                        keyExtractor={(item, index) => index.toString()} // Sử dụng index nếu không có ID
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    />
                </ScrollView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    header: {
        margin: 20,
    },
    footer: {
        flex: 1,
    },
    icon: {
        width: 30,
        height: 30,
        resizeMode: 'stretch'
    },
    spaceIconHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    textTitle: {
        fontSize: 28,
        color: 'black',
        fontWeight: 'bold'
    },
    boxFind: {
        width: window.width - 40,
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 20,
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 10,
        elevation: 5,
        marginTop: 20
    },
    sectionFind: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    input: {
        height: 40,
        fontSize: 18
    },
    drinkContainer: {
        flexDirection: 'row',
        marginTop: 10
    },
    drinkText: {
        fontSize: 16,
        color: 'gray',
        fontWeight: 'bold',
        marginRight: 20,
        marginTop: 10
    },
    selectedDrinkText: {
        color: 'orange',
    }
});

export default TrangChu;
