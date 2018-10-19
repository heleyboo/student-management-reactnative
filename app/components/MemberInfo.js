import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class MemberInfo extends Component {

    _handleData(info) {
        if (!info) {
            return (
                <Text style={styles.text} >{info.name}</Text>
            );
        }
        return <Text style={styles.text} >No data</Text>;
    }

    render() {
        return (
            <View style={[styles.container, this.props.style]} >
                <Text style={styles.title} >Member's Info</Text>
                <Text style={styles.text} >- {this.props.memberInfo}</Text>
            </View>
        );
    }
}

export default MemberInfo;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 80,
        width: '100%',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 5,
        flexDirection: 'column',
        paddingLeft: 8,
    },
    text: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        marginTop: 5,
        fontWeight: 'bold',
        fontSize: 16,
    }
});