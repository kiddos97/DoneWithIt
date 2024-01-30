import React from 'react'
import { SafeAreaView, View, StyleSheet } from 'react-native'
import AppTextInput from '../../../components/App/AppTextInput'
import AppPicker from '../../../components/App/AppPicker'
import AppButton from '../../../components/App/AppButton'

const NewListingScreen = () => {
  return (
    
    <SafeAreaView>
        <View style={styles.container} >
            <AppTextInput placeholder="Title"/>
            <AppTextInput placeholder="Price"/>
            <AppPicker 
            placeholder="Category"
            />
            <AppTextInput placeholder="Description"/>
            <AppButton title="POST"/>
        </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
    container:{
        padding:10
    }
})
export default NewListingScreen
3