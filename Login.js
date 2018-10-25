import React, { Component } from 'react';
import {
		View,
		Text,
		Image,
		KeyboardAvoidingView,
		StyleSheet
		} from 'react-native';
import LoginForm from './LoginForm';	
	
//Create Component

class Login extends Component {
	render() {
		return (
		<KeyboardAvoidingView behavior='padding' enabled style={styles.container}>
		<View style={styles.loginContainer}>
		</View>	
		
			<View style={styles.formContainer}>
				<LoginForm />;
			</View>
		
		</KeyboardAvoidingView>
		);
	}
}

const styles = StyleSheet.create({
		container:{
			flex: 1,
			backgroundColor:'#2c3e50'
		},
		loginContainer:{
			alignItems : 'center',
			flexGrow : 1,
			justifyContent: 'center'
		},
		title:{
        color: "#FFF",
        marginTop: 120,
        width: 180,
        textAlign: 'center',
        opacity: 0.9
         }

});

export default Login;
