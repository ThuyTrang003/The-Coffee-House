import { SetStateAction, useState } from "react";
import { Dimensions, Image, StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView } from "react-native";
import ItemCard from "../component/ItemCard";
import { FlatList } from "react-native-gesture-handler";

const window = Dimensions.get('window');
function TrangChu({ navigation }) {
    const [value, setFindText] = useState("");
    const [selectedDrink, setSelectedDrink] = useState('Cappucchino');
    const handleFind = (text) => {
        setFindText(text);
    }

    const drink = ['Cappucchino', 'Bạc xỉu', 'Cafe Đen', 'Cafe Sữa', 'Nước cam', 'Matcha đá xay', 'Socola đá xay'];

    const DATA = [
        {
            id: '1',
            name: 'Ô long nhiệt đới',
            description: 'Kem 1 chut machiato',
            rating: 4.7,
            prices: {
                small: '20.000',
                medium: '24.000',
                large: '28.000'
            }
        },
        {
            id: '2',
            name: 'Latte',
            description: 'Latte thơm ngon, đậm đà hương vị',
            rating: 4.5,
            prices: {
                small: '22.000',
                medium: '26.000',
                large: '30.000'
            }
        },
        {
            id: '3',
            name: 'Espresso',
            description: 'Espresso đậm đặc, đánh thức gq',
            rating: 4.8,
            prices: {
                small: '18.000',
                medium: '22.000',
                large: '26.000'
            }
        }
        ,
        {
            id: '4',
            name: 'Espresso',
            description: 'Espresso đậm đặc, đánh thức gq',
            rating: 4.8,
            prices: {
                small: '18.000',
                medium: '22.000',
                large: '26.000'
            }
        }
        ,
        {
            id: '5',
            name: 'Espresso',
            description: 'Espresso đậm đặc, đánh thức gq',
            rating: 4.8,
            prices: {
                small: '18.000',
                medium: '22.000',
                large: '26.000'
            }
        }
    ];
    const DATA1 = [
        {
            id: '1',
            name: 'Ô long nhiệt đới',
            description: 'Kem 1 chut machiato',
            rating: 4.7,
            prices: {
                small: '20.000',
                medium: '24.000',
                large: '28.000'
            }
        },
        {
            id: '2',
            name: 'Latte',
            description: 'Latte thơm ngon, đậm đà hương vị',
            rating: 4.5,
            prices: {
                small: '22.000',
                medium: '26.000',
                large: '30.000'
            }
        },
        {
            id: '3',
            name: 'Espresso',
            description: 'Espresso đậm đặc, đánh thức gq',
            rating: 4.8,
            prices: {
                small: '18.000',
                medium: '22.000',
                large: '26.000'
            }
        }
        ,
        {
            id: '4',
            name: 'Espresso',
            description: 'Espresso đậm đặc, đánh thức gq',
            rating: 4.8,
            prices: {
                small: '18.000',
                medium: '22.000',
                large: '26.000'
            }
        }
        ,
        {
            id: '5',
            name: 'Espresso',
            description: 'Espresso đậm đặc, đánh thức gq',
            rating: 4.8,
            prices: {
                small: '18.000',
                medium: '22.000',
                large: '26.000'
            }
        }
    ];
    const handleSelectedDrink = (value) => {
        if (value != selectedDrink) {
            setSelectedDrink(value);
        }
    }

    const handlePress = () => {
        navigation.navigate('ChiTietSanPham', { data: DATA });
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.spaceIconHeader}>
                    <TouchableOpacity>
                        <Image source={require('../images/category.png')} style={styles.icon}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity>
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
                        data={DATA}
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={handlePress}>
                                <ItemCard item={item} />
                            </TouchableOpacity>
                        )}
                        keyExtractor={item => item.id}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    />
                    <FlatList
                        data={DATA1}
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={handlePress}>
                                <ItemCard item={item} />
                            </TouchableOpacity>
                        )}
                        keyExtractor={item => item.id}
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
