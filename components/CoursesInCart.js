import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import globalStyles from '../styles/globalStyles'
import { AntDesign } from '@expo/vector-icons'; 

const CoursesInCart = ({ route, props }) => {
  console.log(route.prarams.id)
  return (
    <View style={styles.coursesContainer}>
      <Text numberOfLines={1} style={styles.title}>{props.title}</Text>
      <Text style={styles.price}>{props.price.toFixed(2)} €</Text>
      <TouchableOpacity
        onPress={props.onDelete}
      >
        <AntDesign name="delete" size={24} color="black" />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    coursesContainer: {
        backgroundColor: globalStyles.green,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        marginBottom: 9,
        width: 'auto'
    },
    title: {
        width: '60%'
    },
    price: {
        textAlign: 'right',
        paddingRight: 9,
        width: '30%'
    }
})

export default CoursesInCart