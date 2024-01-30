import React, { useState } from 'react'

import { Image, SafeAreaView, StyleSheet, View } from 'react-native'
import AppTextInput from '../../../components/AppTextInput'
import AppButton from '../../../components/AppButton'

const LoginScreen = () => {
        
    const [email, setEmail] = [] = useState();

    const [password, setPassword] = [] = useState();



  return (
            <SafeAreaView>
                <Image 
                style={styles.logo} 
                source={require('../logo.png')}
                />
                <AppTextInput
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon='email'
                    keyboardType="email-address"
                    placeholder="Email"
                />
                <AppTextInput
                  autoCapitalize="none"
                  autoCorrect={false}
                  icon='lock'
                  keyboardType="email-address"
                  placeholder="Password"
                  secureTextEntry
                  textContentType="password"
                />
                <AppButton title="Login" onPress={() => console.log()} />
            </SafeAreaView>
   
  )
}

const styles = StyleSheet.create({
    logo:{
        width:100,
        height: 100,
        alignSelf:'center',
        marginTop:50,
        marginBottom: 20
    }
})
export default LoginScreen
