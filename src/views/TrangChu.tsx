import { SetStateAction, useState } from "react";
import { Dimensions, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import ItemCard from "../component/ItemCard";

const window = Dimensions.get('window');
function TrangChu(): React.JSX.Element {
    const [value, setFindText] = useState("");
    const handleFind = (text: SetStateAction<string>) => {
        setFindText(text);
    }
    return (
        <View style={styles.container}>
            <ScrollView>
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
                </View>
                <View style={styles.footer}>
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={styles.CategoryScrollViewStyle}>
                        <ItemCard></ItemCard>
                        <ItemCard></ItemCard>
                        <ItemCard></ItemCard>
                        <ItemCard></ItemCard>
                        <ItemCard></ItemCard>
                        <ItemCard></ItemCard>
                    </ScrollView>
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={styles.CategoryScrollViewStyle}>
                        <ItemCard></ItemCard>
                        <ItemCard></ItemCard>
                        <ItemCard></ItemCard>
                        <ItemCard></ItemCard>
                        <ItemCard></ItemCard>
                        <ItemCard></ItemCard>
                    </ScrollView>
                </View>
            </ScrollView>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    header: {
        flex: 2,
        margin: 20,

    },
    footer: {
        flex: 3,
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
    CategoryScrollViewStyle: {

    }
});

export default TrangChu;
