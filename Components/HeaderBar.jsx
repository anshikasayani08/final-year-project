import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';

const Headerbar = () => {
    return (
        <View style={styles.container}>
            
           
        </View >
    )
}

export default Headerbar

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 35,
        borderBottomWidth: 1,
        borderColor: 'grey',
        justifyContent: "space-between",
        height: 60,
        backgroundColor: 'white',
        paddingHorizontal: 20,
        paddingVertical: 10
    }
})