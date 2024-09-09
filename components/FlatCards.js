import React from "react";
import { View, StyleSheet, Text } from "react-native";

const FlatCards = () => {
    return (
        <View>
            <Text style={styles.title}>FlatCards</Text>
            <View style={styles.container}>
                <View style={[styles.card, styles.cardOne]}>
                    <Text>Red</Text>
                </View>
                <View style={[styles.card, styles.cardTwo]}>
                    <Text>Green</Text>
                </View>
                <View style={[styles.card, styles.cardThree]}>
                    <Text>Blue</Text>
                </View>
            </View>
        </View>
    );
}

export default FlatCards;

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8,
        marginBottom: 16,
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between', 
        paddingHorizontal: 8,
    },
    card: {
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center',
        height: 150,
        marginHorizontal: 4, 
        borderRadius: 8,
    },
    cardOne: {
        backgroundColor: '#EF5354',
    },
    cardTwo: {
        backgroundColor: '#50DBB4',
    },
    cardThree: {
        backgroundColor: '#5DA3FA',
    },
});
