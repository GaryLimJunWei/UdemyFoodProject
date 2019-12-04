import React from 'react';
import {View,Text,StyleSheet,Image} from 'react-native';

const ResultDetails = ({results}) => {
    return (
        <View style={styles.container}>
            <Image 
            style={styles.image}
            source={{uri : results.image_url}}/>
            <Text style={styles.name}>{results.name}</Text>
            <Text>{results.rating} Stars, {results.review_count} Reviews</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginLeft:15,
        
    },
    image:{
        width: 250,
        borderRadius: 4,
        height: 120,
        marginBottom: 5
    },
    name:{
        fontWeight: 'bold'
    }
});

export default ResultDetails;