import React, {Component} from 'react';
import {
		View,
		StyleSheet,
		Text,
		TouchableOpacity,
		TextInput,
		Button,
		StatusBar,
		Alert
		} from 'react-native';
		
const _onButtonPress =() => {
	Alert.alert =('Button has been pressed!');	
};


class LoginForm extends Component {
	render(){
		return(
			<View style={styles.container}>
			 <StatusBar> barStyle="light-content"/>
             <TextInput style= {styles.input}
                        autoCapitalize="none"
                        onSubmitEditting={() => this.passwordInput.focus()}
                        autoCorrect={false}
                        keyboardType='email-address'
                        returnKeytype="next"
                        placeholder='Email or Mobile Num'
                        placeholderTextColor='rgba(225,225,225,0.7)'/>
             <TextInput style = {styles.input}
                        returnKeyType="go" ref={(input) => this.passwordInput = Input}
                        placeholder = 'Password'
                        placeholderTextColor='rgba(225,225,225,0.7)'securityTextEntry/>
             {/*   <Button onPress={onButtonPress} title = 'Login' style={styles.loginButton} /> */}
              <TouchableOpacity style={styles.buttonContainer} onPress={onButtonPress}>
                    <Text  style={styles.buttonText}>LOGIN</Text>
                </TouchableOpacity> 
			</View>		
		);
    }
}

const styles = StyleSheet.create({
        container: {
          padding: 20  
        },
        input: {
            height: 40,
            backgroundColor: 'rgba(225,225,225,0.2)',
            marginBottom: 10,
            padding: 10,
            color: '#fff'
        }
        buttonContainer:{
            backgroundColor: '#2980b6'
            paddingVertical: 15
        }
        buttonText:{
            color: '#fff'
            textAlign: 'center'
            fontWeight: '700'                     
        }               
        loginButton:{
            backgroundColor: '#2980b6'
            color: '#fff'
        }
});

export default LoginForm