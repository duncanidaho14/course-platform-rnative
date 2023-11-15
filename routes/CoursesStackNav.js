import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { AntDesign } from '@expo/vector-icons'
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderIcon from "../components/CustomHeaderIcon";
import Landing from "../screens/Landing";
import CourseInfos from "../screens/CourseInfos";
import Cart from "../screens/Cart";
import globalStyles from "../styles/globalStyles";

const CoursesStackNavigator = createStackNavigator()

export const CoursesStackNav = () => {
    return (
        <CoursesStackNavigator.Navigator
            screenOptions={({ navigation }) => (
                {
                    headerStyle: { backgroundColor: globalStyles.green },
                    headerTitleStyle: { fontWeight: 'bold'},
                    headerTintColor: globalStyles.white,
                    headerRight: () => (
                        <HeaderButtons 
                            HeaderButtonComponent={CustomHeaderIcon}
                        >
                            <AntDesign 
                                title="Panier"
                                name="shoppingcart"
                                size={25}
                                color={globalStyles.white}
                                onPress={() => navigation.navigate('Cart')}
                            />
                        </HeaderButtons>
                    )  
                }
                
            )}
        >
            <CoursesStackNavigator.Screen
                name="Landing"
                component={Landing}
            />
            <CoursesStackNavigator.Screen
                name="Details"
                component={CourseInfos}
                options={({ route }) => (
                    {
                        title: route.params.title
                    }
                )}
            />
            <CoursesStackNavigator.Screen
                name="Cart"
                component={Cart}
            />
        </CoursesStackNavigator.Navigator>
    )
}