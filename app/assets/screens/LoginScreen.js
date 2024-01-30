import React, { startTransition, useState } from 'react'

import { Image, SafeAreaView, StyleSheet, View, Text } from 'react-native'
import AppTextInput from '../../../components/App/AppTextInput'
import AppButton from '../../../components/App/AppButton'

import { Formik } from 'formik'
import * as Yup from 'yup';



const validationSchema = Yup.object().shape({ // Yup form validation

    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password")
})


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
                validationSchema={validationSchema}
                >
                    {({ handleChange, handleSubmit, errors, setFieldTouched, touched}) => (
                        <>
                           <View style={styles.screen}>
                        <AppTextInput
                            autoCapitalize="none"
                            autoCorrect={false}
                            icon='email'
                            keyboardType="email-address"
                            onBlur={() => setFieldTouched("email")}
                            onChangeText={handleChange("email")}
                            placeholder="Email"
                        />
                        { touched.email && <Text style={{color:'red'}}>{errors.email}</Text>}
                        <AppTextInput
                          autoCapitalize="none"
                          autoCorrect={false}
                          icon='lock'
                          keyboardType="email-address"
                          onBlur={() => setFieldTouched("password")}
                          onChangeText ={ handleChange('password') }
                          placeholder="Password"
                          secureTextEntry
                          textContentType="password"
                        />
                        {touched.password && <Text style={{color:'red'}}>{errors.password}</Text>}
                    </View>
                <View style={styles.buttonContainer}>
                    <AppButton title="Login" onPress={handleSubmit} />
                </View>
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
        marginVertical:-20
      },
      buttonContainer:{
        marginVertical:40
      }
})
export default LoginScreen
