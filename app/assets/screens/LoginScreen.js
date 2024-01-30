import React, { useState } from 'react'

import { Image, SafeAreaView, StyleSheet, View } from 'react-native'
import AppTextInput from '../../../components/AppTextInput'
import AppButton from '../../../components/AppButton'

import { Formik } from 'formik'

const LoginScreen = () => {
        
  

  return (
            <SafeAreaView >
                <Image 
                style={styles.logo} 
                source={require('../logo.png')}
                />
                <Formik
                initialValues={{email:'',password:''}}
                onSubmit={(values) => console.log(values)}
                >
                    {({ handleChange, handleSubmit}) => (
                        <>
                           <View style={styles.screen}>
                        <AppTextInput
                            autoCapitalize="none"
                            autoCorrect={false}
                            icon='email'
                            keyboardType="email-address"
                            onChangeText={handleChange("email")}
                            placeholder="Email"
                        />
                        <AppTextInput
                          autoCapitalize="none"
                          autoCorrect={false}
                          icon='lock'
                          keyboardType="email-address"
                          onChangeText ={ handleChange('password') }
                          placeholder="Password"
                          secureTextEntry
                          textContentType="password"
                        />
                    </View>
                <AppButton title="Login" onPress={handleSubmit} />
                        </>

                    )}
                </Formik>
                 
            </SafeAreaView>
   
  )
}

const styles = StyleSheet.create({
    logo:{
        width:100,
        height: 150,
        alignSelf:'center',
        marginTop:50,
        marginBottom: 20
    },
    screen:{
        padding:10,
      },
})
export default LoginScreen
