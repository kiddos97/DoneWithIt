import { StyleSheet, View, TouchableOpacity, Text } from 'react-native'

const AppButton = ( { title, onPress  }) => {
  return (
    <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={onPress} style={styles.registerButton}>
              <Text style={styles.buttonText}>{title}</Text>
            </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    buttonContainer:{
        width:'100%',
        padding:20,
        marginVertical:20,
      },
      buttonText:{
        fontSize:20,
        textAlign:"center",
        color:'white'
      },
      registerButton:{
        backgroundColor:'#4ecdc4',
        marginTop: 10,
        borderRadius:30,
        padding: 10,
      },
})

export default AppButton
