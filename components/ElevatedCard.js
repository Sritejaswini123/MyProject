import React from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";

const ElevatedCard = () => {
    return (
        <View>
            <Text style = {styles.title} > ElevatedCards</Text>
<ScrollView  horizontal = {true} style={styles.container} >
    <View style = {[styles.card, styles.cardElevated]}>
        <Text>Tap</Text>
    </View>
    <View style = {[styles.card, styles.cardElevated]}>
        <Text>Tap</Text>
    </View>
    <View style = {[styles.card, styles.cardElevated]}>
        <Text>Me</Text>
    </View>
    <View style = {[styles.card, styles.cardElevated]}>
        <Text>To</Text>
    </View>
    <View style = {[styles.card, styles.cardElevated]}>
        <Text>See</Text>
    </View>
    <View style = {[styles.card, styles.cardElevated]}>
        <Text>More</Text>
    </View>
</ScrollView>
        </View>
    )
}
export default ElevatedCard
const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8,
        marginBottom: 16,
    },
    container: {
        padding: 8,

    },
    card: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        height:  100,
       borderRadius: 4,
       margin: 8,



    },
    cardElevated: {
      backgroundColor: '#CAD5E2',
      elevation: 4,

      
    }
})