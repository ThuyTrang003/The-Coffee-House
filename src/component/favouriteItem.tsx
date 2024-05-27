import { Dimensions, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, SPACING } from "../theme/theme";
import React, { useState } from "react";
const screenWidth = Dimensions.get('window').width;

function heartButton(tick: boolean): React.JSX.Element {
    if (tick == false)
        return (
            <Image source={require('../images/heart.png')}
                style={{ height: 25, width: 25, marginRight: 10, marginLeft: 10 }} />
        )
    else
        return (
            <Image source={require('../images/heartRed.png')}
                style={{ height: 25, width: 25, marginRight: 10, marginLeft: 10 }} />
        )
}

const favouriteItem = (item: any) => {
    const [tick, setTick] = useState(true);

    return (
        <View style={styles.titleComponent}>
            <View style={[styles.item]}>
                <Image source={require('../images/coffee.png')} //chỗ này để ảnh sp
                    style={{ height: 60, width: 60, marginRight: 10 }} />
                <View>
                    <View style={[styles.categoryInfor]}>
                        <Text style={[styles.fontWeight, { fontSize: 16, color: 'black' }]}>
                            Olong Tứ Quý Vải Vảiiiiii Vải</Text>
                    </View>
                    <Text style={[styles.fontWeightLight, { fontSize: 15, color: 'black', marginBottom: 10 }]}>
                        85.000đ</Text>

                </View>
                <TouchableOpacity
                    onPress={() => { setTick(!tick) }}>
                    {heartButton(tick)}
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    titleComponent: {
        paddingTop: 10,
        backgroundColor: 'white',
    },
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomColor: 'lightgray',
        borderBottomWidth: 1,
        paddingBottom: 10,
        paddingTop: 10,
    },
    fontWeightLight: {
        fontFamily: 'Roboto-Light',
    },
    fontWeight: {
        fontWeight: 'bold',
    },
    categoryInfor: {
        width: (screenWidth) / 7 * 4,
        marginBottom: 10,
        //backgroundColor: 'gray',
    },
});

export default favouriteItem;
