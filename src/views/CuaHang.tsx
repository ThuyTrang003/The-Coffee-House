import { useState } from "react";
import { Image, StyleSheet, Text, View, TextInput, KeyboardAvoidingView, Platform, ScrollView } from "react-native";

function CuaHang(): React.JSX.Element {
    const defaultValue = 'Tìm kiếm';
    const [value, onChangeText] = useState(defaultValue);
    const handleFocus = () => {
        if (value === defaultValue) {
            onChangeText('');
        }
    };

    const handleBlur = () => {
        if (!value.trim()) {
            onChangeText(defaultValue);
        }
    };
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.innerHeader}>
                    <View>
                        <Text style={styles.textTitleHeader}>Cửa hàng</Text>
                    </View>
                    <View style={styles.spaceIcon}>
                        <View style={styles.boxVoucher}>
                            <Image source={require('../images/voucher.png')} style={styles.imageStyle}></Image>
                            <Text style={styles.textInBoxVoucher}>14</Text>
                        </View>
                        <View style={styles.boxNotify}>
                            <Image source={require('../images/notification.png')} style={styles.imageStyle}></Image>
                        </View>
                    </View>
                </View>
                <View style={styles.sectionFind}>
                    <View style={styles.boxFind}>
                        <Image source={require('../images/find.png')} style={styles.imageStyle}></Image>
                        <TextInput
                            style={styles.input}
                            onChangeText={text => onChangeText(text)}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                            value={value}
                        />
                    </View>
                    <View style={styles.boxMap}>
                        <Image source={require('../images/place.png')} style={styles.imageStyle}></Image>
                        <Text style={styles.textInBoxVoucher}>Bản đồ</Text>
                    </View>
                </View>
            </View >
        <View style={styles.footer}>
            <ScrollView>
                <Text style={styles.textTitleFooter}>Các cửa hàng khác</Text>
                <View style={styles.boxInfo}>
                    <Image source={require('../images/location1.jpg')} style={styles.imageLocation}></Image>
                    <View style={styles.directionBoxLocation}>
                        <Text style={styles.textName}>THE COFFEE HOUSE</Text>
                        <Text style={styles.textAddress}>HCM Đường D1</Text>
                        <Text style={styles.textDistance}>Cách đây 0.7km</Text>
                    </View>
                </View>
                <View style={styles.boxInfo}>
                    <Image source={require('../images/location2.jpg')} style={styles.imageLocation}></Image>
                    <View style={styles.directionBoxLocation}>
                        <Text style={styles.textName}>THE COFFEE HOUSE</Text>
                        <Text style={styles.textAddress}>HCM Đường D1</Text>
                        <Text style={styles.textDistance}>Cách đây 0.7km</Text>
                    </View>
                </View>
                <View style={styles.boxInfo}>
                    <Image source={require('../images/location3.jpg')} style={styles.imageLocation}></Image>
                    <View style={styles.directionBoxLocation}>
                        <Text style={styles.textName}>THE COFFEE HOUSE</Text>
                        <Text style={styles.textAddress}>HCM Đường D1</Text>
                        <Text style={styles.textDistance}>Cách đây 0.7km</Text>
                    </View>
                </View>
                <View style={styles.boxInfo}>
                    <Image source={require('../images/location4.jpg')} style={styles.imageLocation}></Image>
                    <View style={styles.directionBoxLocation}>
                        <Text style={styles.textName}>THE COFFEE HOUSE</Text>
                        <Text style={styles.textAddress}>HCM Đường D1</Text>
                        <Text style={styles.textDistance}>Cách đây 0.7km</Text>
                    </View>
                </View>
                <View style={styles.boxInfo}>
                    <Image source={require('../images/location5.jpg')} style={styles.imageLocation}></Image>
                    <View style={styles.directionBoxLocation}>
                        <Text style={styles.textName}>THE COFFEE HOUSE</Text>
                        <Text style={styles.textAddress}>HCM Đường D1</Text>
                        <Text style={styles.textDistance}>Cách đây 0.7km</Text>
                    </View>
                </View>
                <View style={styles.boxInfo}>
                    <Image source={require('../images/location6.jpg')} style={styles.imageLocation}></Image>
                    <View style={styles.directionBoxLocation}>
                        <Text style={styles.textName}>THE COFFEE HOUSE</Text>
                        <Text style={styles.textAddress}>HCM Đường D1</Text>
                        <Text style={styles.textDistance}>Cách đây 0.7km</Text>
                    </View>
                </View>
                <View style={styles.boxInfo}>
                    <Image source={require('../images/location7.png')} style={styles.imageLocation}></Image>
                    <View style={styles.directionBoxLocation}>
                        <Text style={styles.textName}>THE COFFEE HOUSE</Text>
                        <Text style={styles.textAddress}>HCM Đường D1</Text>
                        <Text style={styles.textDistance}>Cách đây 0.7km</Text>
                    </View>
                </View>
                <View style={styles.boxInfo}>
                    <Image source={require('../images/location8.jpg')} style={styles.imageLocation}></Image>
                    <View style={styles.directionBoxLocation}>
                        <Text style={styles.textName}>THE COFFEE HOUSE</Text>
                        <Text style={styles.textAddress}>HCM Đường D1</Text>
                        <Text style={styles.textDistance}>Cách đây 0.7km</Text>
                    </View>
                </View>
                <View style={styles.boxInfo}>
                    <Image source={require('../images/location8.jpg')} style={styles.imageLocation}></Image>
                    <View style={styles.directionBoxLocation}>
                        <Text style={styles.textName}>THE COFFEE HOUSE</Text>
                        <Text style={styles.textAddress}>HCM Đường D1</Text>
                        <Text style={styles.textDistance}>Cách đây 0.7km</Text>
                    </View>
                </View>
                <View style={styles.boxInfo}>
                    <Image source={require('../images/location8.jpg')} style={styles.imageLocation}></Image>
                    <View style={styles.directionBoxLocation}>
                        <Text style={styles.textName}>THE COFFEE HOUSE</Text>
                        <Text style={styles.textAddress}>HCM Đường D1</Text>
                        <Text style={styles.textDistance}>Cách đây 0.7km</Text>
                    </View>
                </View>
                <View style={styles.boxInfo}>
                    <Image source={require('../images/location8.jpg')} style={styles.imageLocation}></Image>
                    <View style={styles.directionBoxLocation}>
                        <Text style={styles.textName}>THE COFFEE HOUSE</Text>
                        <Text style={styles.textAddress}>HCM Đường D1</Text>
                        <Text style={styles.textDistance}>Cách đây 0.7km</Text>
                    </View>
                </View>
                <View style={styles.boxInfo}>
                    <Image source={require('../images/location8.jpg')} style={styles.imageLocation}></Image>
                    <View style={styles.directionBoxLocation}>
                        <Text style={styles.textName}>THE COFFEE HOUSE</Text>
                        <Text style={styles.textAddress}>HCM Đường D1</Text>
                        <Text style={styles.textDistance}>Cách đây 0.7km</Text>
                    </View>
                </View>
                <View style={styles.boxInfo}>
                    <Image source={require('../images/location8.jpg')} style={styles.imageLocation}></Image>
                    <View style={styles.directionBoxLocation}>
                        <Text style={styles.textName}>THE COFFEE HOUSE</Text>
                        <Text style={styles.textAddress}>HCM Đường D1</Text>
                        <Text style={styles.textDistance}>Cách đây 0.7km</Text>
                    </View>
                </View>
                <View style={styles.boxInfo}>
                    <Image source={require('../images/location8.jpg')} style={styles.imageLocation}></Image>
                    <View style={styles.directionBoxLocation}>
                        <Text style={styles.textName}>THE COFFEE HOUSE</Text>
                        <Text style={styles.textAddress}>HCM Đường D1</Text>
                        <Text style={styles.textDistance}>Cách đây 0.7km</Text>
                    </View>
                </View>
                <View style={styles.boxInfo}>
                    <Image source={require('../images/location8.jpg')} style={styles.imageLocation}></Image>
                    <View style={styles.directionBoxLocation}>
                        <Text style={styles.textName}>THE COFFEE HOUSE</Text>
                        <Text style={styles.textAddress}>HCM Đường D1</Text>
                        <Text style={styles.textDistance}>Cách đây 0.7km</Text>
                    </View>
                </View>
            </ScrollView >
        </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollView: {
        justifyContent: "space-between"
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
        padding: 10
    },
    innerHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    footer: {
        flex: 8,
        backgroundColor: '#F7F3F3',
        padding: 10
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
        borderWidth: 1.5,
        margin: 10,
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 10
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
    boxInfo: {
        width: '100%',
        height: 120,
        backgroundColor: '#FCFCFC',
        borderRadius: 10,
        padding: 15,
        margin: 5,
        justifyContent: 'flex-start',
        flexDirection: 'row',
        alignItems: 'center'
    },
    imageLocation: {
        width: 100,
        height: 100,
        borderRadius: 5,
        resizeMode: "stretch"
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
    textName: {
        fontSize: 10,
        fontWeight: '600',
    },
    textAddress: {
        fontSize: 20,
        color: 'black'
    },
    textDistance: {
        fontSize: 15,
        color: '#C0BDBD',
    },
    directionBoxLocation: {
        margin: 10
    },
});

export default CuaHang;
