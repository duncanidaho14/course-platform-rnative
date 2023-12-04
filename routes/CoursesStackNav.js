import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { CoursesDetailsStackNav } from "./CoursesDetailsStackNav";
import Landing from "../screens/Landing";;

const CoursesStackNavigator = createStackNavigator();

export const CoursesStackNav = ({navigation}) => {
    return (
        <CoursesStackNavigator.Navigator>
            <CoursesStackNavigator.Screen
                name="Home"
                component={Landing}
                options={{title: 'Catalogue'}}
                
            />
        </CoursesStackNavigator.Navigator>
    )
}