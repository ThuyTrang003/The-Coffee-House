import { useState } from "react";
import { Dimensions, Image, StyleSheet, TextInput, View } from "react-native";

const window = Dimensions.get('window');
const BarSearch = (value: string | undefined, setFindText: (arg0: string) => void) => {
    return (
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
    );
};

const styles = StyleSheet.create({
    boxFind: {
        width: window.width - 40,
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
});

export default BarSearch;