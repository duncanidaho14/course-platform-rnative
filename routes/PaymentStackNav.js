import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import Payment from '../screens/Payment';


const PaymentStackNavigator = createStackNavigator();

export const PaymentStackNav = ({navigation}) => {
    return (
        <PaymentStackNavigator.Navigator>
            <PaymentStackNavigator.Screen
                name="Payments"
                component={Payment}
                options={{title: 'Panier'}}
            />
            
        </PaymentStackNavigator.Navigator>
    )
}