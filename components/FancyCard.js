import { StyleSheet, View, Text, Image } from "react-native";
import React from "react";

const FancyCard = () => {
    return (
        <View>
            <Text style={styles.heading}>Trending Places</Text>
            <View style={[styles.card, styles.cardElevated]}>
                <Image 
                    source={{
                        uri: 'https://images.pexels.com/photos/3581369/pexels-photo-3581369.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                    }} 
                    style={styles.cardImage} 
                />
                <View style={styles.cardBody}>
                    <Text style={styles.cardTitle}>Hawa Mahal</Text>
                    <Text style={styles.cardLabel}>Pink City, Jaipur</Text>
                    <Text style={styles.cardDescription}>
                        The Hawa Mahal is a palace in the city of Jaipur, Rajasthan, India. 
                        Built from red and pink sandstone, it is on the edge of the City Palace, 
                        Jaipur, and extends to the Zenana, or women's chambers.
                    </Text>
                    <Text style={styles.cardFooter}>15 min away</Text>
                </View>
            </View>
        </View>
    );
};

export default FancyCard;

const styles = StyleSheet.create({
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 12,
        paddingHorizontal: 8,
    },
    card: {
        backgroundColor: '#FBD28B',
        borderRadius: 8,
        marginHorizontal: 8,
        marginBottom: 16,
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 5, 
    },
    cardElevated: {
        elevation: 10, 
    },
    cardImage: {
        width: '100%',
        height: 200,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
    },
    cardBody: {
        padding: 16,
    },
    cardTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 8,
        fontStyle: "italic",
        color: '#000000'
    },
    cardLabel: {
        fontSize: 16,
        color: '#888',
        marginBottom: 8,
    },
    cardDescription: {
        fontSize: 14,
        color: '#444',
        marginBottom: 12,
        lineHeight: 20,
    },
    cardFooter: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#555',
        fontStyle: "italic"
    },
});
