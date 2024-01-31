import React from 'react'
import ImageInputList from '../ImageInput/ImageInputList'
import { Formik } from 'formik'
import { Text } from 'react-native';


const FormImagePicker = ({ name, values, setFieldValue, touched, errors }) => {
    const handleAdd = (uri) => {
      setFieldValue(name, [...values[name], uri]);
    };
  
    const handleRemove = (uri) => {
      setFieldValue(name, values[name].filter((imageUri) => imageUri !== uri));
    };
  
    return (
      <>
        <ImageInputList
          imageUris={values[name]}
          onAddImage={handleAdd}
          onRemoveImage={handleRemove}
        />
        {touched[name] && <Text style={{ color: 'red' }}>{errors[name]}</Text>}
      </>
    );
  };
  

export default FormImagePicker
