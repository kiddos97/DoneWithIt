import React from 'react'
import { SafeAreaView,View, StyleSheet, Text } from 'react-native'
import AppTextInput from '../../../components/App/AppTextInput'
import AppButton from '../../../components/App/AppButton'
import colors from '../../../config/colors';

import { Formik } from 'formik'
import * as Yup from 'yup';



const validationSchema = Yup.object().shape({ // Yup form validation

    name: Yup.string().required().label("Name"),
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password")
})

const RegisterScreen = () => {
  return (
    <SafeAreaView>
        <Formik
           initialValues={{email:'',password:''}}
           onSubmit={(values) => console.log(values)}
           validationSchema={validationSchema}
        
        >
            {({ handleChange, handleSubmit, errors, setFieldTouched, touched}) => (
                <>
                     <View style={styles.nameContainer}>
                 <AppTextInput
                 icon="account"
                 placeholder="Name"
                 onBlur={() => setFieldTouched("Name")}
                 onChangedText={handleChange('Name')}
                 />
                 {touched.name && <Text style={styles.errormessage}>{errors.name}</Text>}
                  <AppTextInput
                    icon="email"
                    placeholder="Email"
                    onBlur={() => setFieldTouched("email")}
                    onChangedText={handleChange('Email')}
                 />
                   {touched.email && <Text style={styles.errormessage}>{errors.email}</Text>}
                 <AppTextInput
                 icon="lock"
                 placeholder="Password"
                 secureTextEntry
                 textContentType="password"
                 onBlur={() => setFieldTouched("password")}
                 onChangedText={handleChange('password')}
                 />
                   { touched.password && <Text style={styles.errormessage}>{errors.password}</Text>}
                 </View>
                 <AppButton title="Register" onPress={handleSubmit}/>
                </>
            

            )}
       
        </Formik>
    
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    nameContainer:{
        padding: 10,
        marginVertical:40
    },
    errormessage:{
        color: colors.danger,
        textAlign:'center'
    }
})

export default RegisterScreen
