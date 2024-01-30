import React,{ useState}  from 'react'
import { SafeAreaView, View, StyleSheet,Text } from 'react-native'
import AppTextInput from '../../../components/App/AppTextInput'
import AppPicker from '../../../components/App/AppPicker'
import AppButton from '../../../components/App/AppButton'
import { categories } from '../../../components/Menu/CategoriesList'

import { Formik } from 'formik'
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({ // Yup form validation

    title: Yup.string().required().min(1).label("Title"),
    price: Yup.number().required().min(1).max(10000).label("Price"),
    category: Yup.object().required().nullable().label('Category'),
    description: Yup.string().label("Description")
})

const NewListingScreen = () => {
    const [category, setCategory] = useState('');
  return (
    
    <SafeAreaView>
        <Formik
          initialValues={{title:'',price:'',category:null,description:''}}
          onSubmit={(values) => console.log(values)}
          validationSchema={validationSchema}
        >
             {({ handleChange, handleSubmit, errors, setFieldTouched, touched,}) => (
                <>
                <View style={styles.container} >
                <AppTextInput 

                onBlur={() => setFieldTouched('title')}
                onChangeText={handleChange("title")}
                placeholder="Title"/>
                { touched.title && <Text style={{color:'red'}}>{errors.title}</Text>}
                <AppTextInput 
                keyboardType="numeric"
                placeholder="Price"/>
                { touched.price && <Text style={{color:'red'}}>{errors.price}</Text>}
                <AppPicker 
                selectedItem={category}
                onSelectItem={(item) => setCategory(item)}
                items={categories}
                placeholder="Category"
                />
                { touched.category && <Text style={{color:'red'}}>{errors.category}</Text>}
                <AppTextInput placeholder="Description"/>
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
    }
})
export default NewListingScreen
3