import { Button, Dimensions, Image, ImageBackground, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, SPACING } from "../theme/theme";
import React from "react";

const window = Dimensions.get('window');

function ChiTietSanPham({ navigation, route }): React.JSX.Element {
    const {data}  = route.params;
    const handlePress = () => {
        navigation.goBack()
    }
    return (
        <View style={styles.container}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.ScrollViewFlex}>
                <ImageBackground style={styles.background}
                    source={require('../images/location1.jpg')} >
                    <TouchableOpacity style={{ position: 'absolute', top: 30, left: 30 }}>
                        <Image source={require('../images/back.png')}
                            style={{ height: 30, width: 30 }} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ position: 'absolute', top: 30, right: 30 }}>
                        <Image source={require('../images/favorite.png')}
                            style={{ height: 30, width: 30 }} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={handlePress}>
                        <Image source={require('../images/reject.png')} style={{ height: 20, width: 20 }} />
                    </TouchableOpacity>
                </ImageBackground>
                <View style={styles.footer}>
                    <Text style={styles.infoTitle}>Mô tả</Text>
                    <Text style={styles.textDescription}>{data[0].des}</Text>
                    <Text style={styles.infoTitle}>Size</Text>
                    <View style={styles.SizeOuterContainer}>
                        <TouchableOpacity style={styles.SizeBox}>
                            <Text style={styles.SizeText}>S</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.SizeBox}>
                            <Text style={styles.SizeText}>M</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.SizeBox}>
                            <Text style={styles.SizeText}>L</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <Button
                    title="Thêm vào giỏ hàng"
                    color={COLORS.primaryOrangeHex}
                />
            </ScrollView>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    ScrollViewFlex: {
        flexGrow: 1,
        justifyContent: 'space-between',
    },
    background: {
        flex: 5,
        justifyContent: 'flex-start',
    },
    boxInfo: {
        paddingVertical: SPACING.space_24,
        paddingHorizontal: SPACING.space_30,
        backgroundColor: COLORS.primaryBlackRGBA,
        borderTopLeftRadius: BORDERRADIUS.radius_20 * 2,
        borderTopRightRadius: BORDERRADIUS.radius_20 * 2,
        height: 100,
    },
    footer: {
        flex: 1,
        backgroundColor: COLORS.primaryBlackHex,
        padding: 10
    },
    infoTitle: {
        fontFamily: FONTFAMILY.poppins_semibold,
        fontSize: FONTSIZE.size_16,
        color: COLORS.primaryWhiteHex,
        marginBottom: SPACING.space_10,
    },
    textDescription: {
        letterSpacing: 0.5,
        fontFamily: FONTFAMILY.poppins_regular,
        fontSize: FONTSIZE.size_14,
        color: COLORS.primaryWhiteHex,
        marginBottom: SPACING.space_30,
    },
    SizeOuterContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: SPACING.space_20,
    },
    SizeBox: {
        flex: 1,
        backgroundColor: COLORS.primaryDarkGreyHex,
        alignItems: 'center',
        justifyContent: 'center',
        height: SPACING.space_24 * 2,
        borderRadius: BORDERRADIUS.radius_10,
        borderWidth: 2,
    },
    SizeText: {
        fontFamily: FONTFAMILY.poppins_medium,
        color: 'white'
    },
    button: {
        position: 'absolute',
        width: 20,
        height: 20,
        backgroundColor: 'gray',
        left: window.width - 30,
        top: 10
    }
});

export default ChiTietSanPham;


