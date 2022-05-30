import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function Sandbox() {
    return (
        <View style={styles.container}>
            <Text style={styles.one}>One</Text>
            <Text style={styles.two}>Two</Text>
            <Text style={styles.three}>Three</Text>
            <Text style={styles.four}>Four</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        //flex: 1,
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        alignItems: 'flex-end',
        paddingTop: 40,
        backgroundColor: '#ddd'
    },
    one: {
        padding: 10,
        flex: 1,
        backgroundColor: 'lightblue'
    },
    two: {
        padding: 20,
        flex: 1,
        backgroundColor: 'coral'
    },
    three: {
        padding: 30,
        flex: 1,
        backgroundColor: 'violet'
    },
    four: {
        padding: 40,
        flex: 1,
        backgroundColor: 'gold'
    }
});