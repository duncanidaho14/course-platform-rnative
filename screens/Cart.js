import React from 'react'
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import EmptyMsg from '../components/EmptyMsg'
import CoursesInCart from '../components/CoursesInCart'
import globalStyles from '../styles/globalStyles'
import { removeCourseCart } from '../redux/actions/actionRomoveCourseCart'

const Cart = () => {
  
  const dispatch = useDispatch();

  const cartCourse = useSelector(state => state.cart.cartCourse);
  const total = useSelector(state => state.cart.total);
  
  return (
    <View style={styles.cartContainer}>
      {
        cartCourse.length > 0 ? (
          <View>
            <FlatList
              data={cartCourse}
              renderItem={({item}) => (
                <CoursesInCart
                  title={item.title}
                  price={item.price}
                  onDelete={() => dispatch(removeCourseCart(item.id))}
                />
              )}
              keyExtractor={item => item.id}
            />

            <View style={styles.totalContainer}>
              <Text style={styles.totalText}>
                Total:
                <Text style={styles.totalPrice}>{total.toFixed(2)} €</Text>
              </Text>

              <TouchableOpacity
                onPress={() => alert('Payer')}
              >
                <View style={styles.btnAddPayment}>
                  <Text style={styles.btnAddPaymentText}>Payer</Text>
                </View>
              </TouchableOpacity>
            </View>
           
          </View>
        )
        :
        (
          <EmptyMsg text="Panier vide" />
        )
      }
    </View>
  )
}

const styles = StyleSheet.create({
  cartContainer: {
    margin: 50
  },
  totalContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 25
  },
  totalText: {
    fontWeight: 'bold',
    fontSize: 19
  },
  totalPrice: {
    color: globalStyles.green
  },
  btnAddPayment: {
    borderRadius: 6,
    paddingVertical: 9,
    paddingHorizontal: 25,
    backgroundColor: globalStyles.orange
  },
  btnAddPaymentText: {
    fontSize: 19
  }
})

export default Cart;