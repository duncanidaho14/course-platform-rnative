import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { CoursesDetailsStackNav } from "./CoursesDetailsStackNav";
import { CoursesStackNav } from "./CoursesStackNav";
import { CartStackNav } from "./CartStackNav";
import { PaymentStackNav } from "./PaymentStackNav";
import { AntDesign } from '@expo/vector-icons'
import { HeaderButtons } from "react-navigation-header-buttons";
import CustomHeaderIcon from "../components/CustomHeaderIcon";
import globalStyles from "../styles/globalStyles";

const Drawer = createDrawerNavigator();

const DrawerNav = () => {
    return (
       
            <Drawer.Navigator
                screenOptions={({ navigation }) => (
                    {
                        // presentation: 'modal',
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
                <Drawer.Screen
                    name="Home"
                    component={CoursesStackNav}
                    options={{
                        title: 'Catalogue',
                        drawerIcon: () => <AntDesign name="menu-fold" size={35} color={globalStyles.green} />
                    }}
                />

               
                
                <Drawer.Screen
                    name="Details"
                    component={CoursesDetailsStackNav}
                    options={{
                        title: "Article",
                        drawerIcon: () => <AntDesign name="menu-fold" size={35} color={globalStyles.green} />
                    }}
                />

                <Drawer.Screen
                    name="Cart"
                    component={CartStackNav}
                    options={{
                        title: 'Panier',
                        drawerIcon: () => <AntDesign name="shoppingcart" size={35} color={globalStyles.green} />
                    }}
                />

                <Drawer.Screen
                    name="Payments"
                    component={PaymentStackNav}
                    options={{
                        title: 'Achats',
                        drawerIcon: () => <AntDesign name="creditcard" size={35} color={globalStyles.green} />
                    }}
                />

            </Drawer.Navigator>
    )
}

export default DrawerNav;