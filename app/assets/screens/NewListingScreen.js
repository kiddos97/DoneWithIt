import React,{ useState}  from 'react'
import { SafeAreaView, View, StyleSheet,Text } from 'react-native'
import AppTextInput from '../../../components/App/AppTextInput'
import AppPicker from '../../../components/App/AppPicker'
import AppButton from '../../../components/App/AppButton'
import { categories } from '../../../components/Menu/CategoriesList'

import { Formik } from 'formik'
import * as Yup from 'yup';
import CategoryPickerItem from '../../../components/Menu/CategoryPickerItem'
import FormImagePicker from '../../../components/Form/FormImagePicker'

const validationSchema = Yup.object().shape({ // Yup form validation

    title: Yup.string().required().min(1).label("Title"),
    price: Yup.number().required().min(1).max(10000).label("Price"),
    category: Yup.object().required().nullable().label('Category'),
    description: Yup.string().label("Description"),
    images: Yup.array().min(1,"Please select at least 1 image")
})

const NewListingScreen = ({ name,placeholder, PickerItemComponent,numOfColumns }) => {

  return (
    
    <SafeAreaView>
        <Formik
          initialValues={{title:'',price:'',description:'',category:null, image:[]}}
          onSubmit={(values) => console.log(values)}
          validationSchema={validationSchema}
        >
             {({ handleChange, handleSubmit, errors, setFieldTouched, touched, setFieldValue,values}) => (
                <>
                <View style={styles.container} >
                  <FormImagePicker
                  name="images"
                  values={values}
                  setFieldValue={setFieldValue}
                  touched={touched}
                  errors={errors}/>
                <AppTextInput 
                onBlur={() => setFieldTouched('title')}
                onChangeText={handleChange("title")}
                placeholder="Title"/>
                { touched.title && <Text style={{color:'red'}}>{errors.title}</Text>}
                <AppTextInput 
                width={120}
                keyboardType="numeric"
                onBlur={() => setFieldTouched('price')}
                onChangeText={handleChange('price')}
                placeholder="Price"/>
                { touched.price && <Text style={{color:'red'}}>{errors.price}</Text>}
                <AppPicker
                width="50%"
                items={categories}
                numOfColumns={numOfColumns}
                PickerItemComponent={PickerItemComponent}
                placeholder={placeholder}
                selectedItem={values[name]}
                onSelectItem={(item) => {
                    setFieldValue(name,item);
                  }}
                />
                { touched[name] && <Text style={{color:'red'}}>{errors[name]}</Text>}
                <AppTextInput 
                 onBlur={() => setFieldTouched('description')}
                 onChangeText={handleChange('description')}
                placeholder="Description"/>
                { touched.description && <Text style={{color:'red'}}>{errors.description}</Text>}
                <AppButton title="POST" onPress={handleSubmit}/>
            </View>
                </>
             )}

        </Formik>
       
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
    container:{
        padding:10,
        paddingTop:30
    },

})
export default NewListingScreen
