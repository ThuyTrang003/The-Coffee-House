import { Image, StyleSheet, Text, View } from "react-native";

function TrangChu(): React.JSX.Element {

    return (
        <View>
            <View style={styles.header}>
                <Text>Cửa hàng Trang mới sửa ở nhánh ThuyTrang</Text>
                <Image source={require('../images/voucher.png')} style={styles.icon1} resizeMode="stretch"></Image>
                <Image source={require('../images/notification.png')} style={styles.icon1} resizeMode="stretch"></Image>
            </View>
            <View style={styles.footer}>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    icon1: {
        width: 10,
        height: 10
    },
    header: {
        flex: 1,
        backgroundColor: 'white'
    },
    footer: {
        flex: 6,
        backgroundColor: 'lightgray'
    }
});

export default TrangChu;
