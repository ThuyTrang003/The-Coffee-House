import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Image, StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import StoreCard from "../component/StoreCard";
function DSCuaHang(): React.JSX.Element {
    const [value, setFindText] = useState("");
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView stickyHeaderIndices={[0]}>
                <View style={styles.header}>
                    <View style={styles.innerHeader}>
                        <View>
                            <Text style={styles.textTitleHeader}>Cửa hàng</Text>
                        </View>
                        <View style={styles.spaceIcon}>
                            <TouchableOpacity style={styles.boxVoucher}>
                                <Image source={require('../images/voucher.png')} style={styles.imageStyle}></Image>
                                <Text style={styles.textInBoxVoucher}>14</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.boxNotify}>
                                <Image source={require('../images/notification.png')} style={styles.imageStyle}></Image>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.sectionFind}>
                        <View style={styles.boxFind}>
                            <Image source={require('../images/find.png')} style={styles.imageStyle}></Image>
                            <TextInput
                                style={styles.input}
                                placeholder="Tìm kiếm"
                                placeholderTextColor={"black"}
                                value={value}
                                onChangeText={(text) => setFindText(text)}
                                clearButtonMode="always"
                                autoCapitalize="none"
                            />
                        </View>
                        <TouchableOpacity style={styles.boxMap}>
                            <Image source={require('../images/place.png')} style={styles.imageStyle}></Image>
                            <Text style={styles.textInBoxVoucher}>Bản đồ</Text>
                        </TouchableOpacity>
                    </View>
                </View >
                <View style={styles.footer}>
                    <Text style={styles.textTitleFooter}>Các cửa hàng khác</Text>
                    <TouchableOpacity>
                        <StoreCard></StoreCard>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <StoreCard></StoreCard>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <StoreCard></StoreCard>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <StoreCard></StoreCard>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <StoreCard></StoreCard>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <StoreCard></StoreCard>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <StoreCard></StoreCard>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollView: {
        position: 'relative'
    },
    textTitleHeader: {
        fontSize: 30,
        color: 'black',
        fontWeight: '500',
        margin: 10
    },
    textTitleFooter: {
        fontSize: 25,
        color: 'black',
        fontWeight: '500',
    },
    header: {
        flex: 2,
        backgroundColor: 'white',
        justifyContent: 'space-between',
        padding: 10,
        position: 'absolute'
    },
    innerHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    footer: {
        flex: 8,
        backgroundColor: '#F7F3F3',
        padding: 10,
    },
    spaceIcon: {
        flexDirection: 'row',
        marginLeft: 10
    },
    boxVoucher: {
        width: 70,
        height: 40,
        borderRadius: 15,
        backgroundColor: 'white',
        justifyContent: 'space-around',
        margin: 10,
        elevation: 5,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5
    },
    textInBoxVoucher: {
        fontSize: 15,
        fontWeight: '500',
        color: 'black'
    },
    boxNotify: {
        width: 40,
        height: 40,
        borderRadius: 30,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        elevation: 5
    },
    boxFind: {
        width: '70%',
        height: 60,
        backgroundColor: '#fff',
        borderRadius: 20,
        margin: 10,
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 10,
        elevation: 5
    },
    input: {
        height: 40,
        fontSize: 18
    },
    imageStyle: {
        width: 30,
        height: 30,
        resizeMode: "stretch",
    },
    boxMap: {
        width: 100,
        height: 60,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 10
    },
    sectionFind: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
});

export default DSCuaHang;
