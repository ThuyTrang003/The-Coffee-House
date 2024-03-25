import { Image, StyleSheet, Text, View } from "react-native";

function CuaHang(): React.JSX.Element {

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View>
                    <Text style={styles.textTitle}>Cửa hàng</Text>
                </View>
                <View style={styles.spaceIcon}>
                    <View style={styles.button1}>
                        <Image source={require('../images/voucher.png')} style={styles.icon1} resizeMode="stretch"></Image>
                    </View>
                    <View style={styles.button2}>
                        <Image source={require('../images/notification.png')} style={styles.icon1} resizeMode="stretch"></Image>
                    </View>
                </View>
            </View>
            <View style={styles.footer}>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    icon1: {
        width: 30,
        height: 30
    },
    textTitle: {
        fontSize: 30,
        color: 'black',
        fontWeight: '500',
        margin: 10
    },
    header: {
        flex: 1,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    footer: {
        flex: 7,
        backgroundColor: 'lightgray'
    },
    spaceIcon: {
        flexDirection: 'row',
        marginLeft: 10
    },
    button1: {
        width: 60,
        height: 40,
        borderRadius: 15,
        backgroundColor: 'white',
        justifyContent: 'center',
        margin: 10,
        elevation: 5
    },
    button2: {
        width: 40,
        height: 40,
        borderRadius: 30,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        elevation: 5
    },
});

export default CuaHang;
