import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, TouchableHighlight } from 'react-native'
import globalStyles from '../styles/globalStyles'
import { AntDesign } from '@expo/vector-icons'; 

const CourseItem = ({ image, title, price, viewDetails, onAddToCart }) => {
  return (
    <TouchableHighlight 
      onPress={viewDetails}
      underlayColor={globalStyles.green}
    >
      <View style={styles.courseContainer}>
        <View style={styles.imageContainer}>
          <Image 
              source={{uri: image}}
              style={styles.image} 
          />
        </View>
        <View style={styles.courseContainerDetails}>
          <Text style={styles.courseTitle}>{title}</Text>
          <Text style={styles.coursePrice}>{price.toFixed(2)} €</Text>
        </View>
        <View style={styles.iconContainer}>
          <TouchableOpacity
            onPress={viewDetails}
          >
            <AntDesign name="eye" size={35} color={globalStyles.green} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={onAddToCart}
          >
            <AntDesign name="shoppingcart" size={35} color={globalStyles.green} />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableHighlight>
  )
}


const styles = StyleSheet.create({
    courseContainer: {
        backgroundColor: globalStyles.white,
        borderRadius: 10,
        height: 300,
        margin: 25,
        borderColor: globalStyles.lightGrey,
        borderWidth: 1
    },
    imageContainer: {
        width: '100%',
        height: '60%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: '100%'
    },
    courseContainerDetails: {
        alignItems: 'center',
        height: '20%',
        padding: 10
    },
    courseTitle: {
        fontSize: 18,
        marginVertical: 4,
        color: globalStyles.green,
        fontWeight: 'bold',
        textTransform: 'uppercase'
    },
    coursePrice: {
        color: globalStyles.darkGrey,
        fontSize: 16
    },
    iconContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: '20%',
      paddingHorizontal: 30
    }
})

export default CourseItem;