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
                {/* {this._handleData(this.state.memberInfo)} */}
                <Text style={styles.text} >{this.props.memberInfo}</Text>
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
        backgroundColor: 'yellow'
    },
    text: {
        justifyContent: 'center',
        alignItems: 'center',
    }
});