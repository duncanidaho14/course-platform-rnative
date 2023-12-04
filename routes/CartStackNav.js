import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import Cart from '../screens/Cart';

const CartStackNavigator = createStackNavigator();

export const CartStackNav = ({navigation}) => {
    return (
        <CartStackNavigator.Navigator>
            <CartStackNavigator.Screen
                name="Cart"
                component={Cart}
                options={{title: 'Panier'}}
            />
            
        </CartStackNavigator.Navigator>
    )
}