import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import CourseInfos from "../screens/CourseInfos";

const CoursesDetailsStackNavigator = createStackNavigator();

export const CoursesDetailsStackNav = ({navigation}) => {
    
    return (
        <CoursesDetailsStackNavigator.Navigator>
            <CoursesDetailsStackNavigator.Screen
                name="Details"
                component={CourseInfos}
                options={{title: "Article"}}
                
            />

            

        </CoursesDetailsStackNavigator.Navigator>
    )
}