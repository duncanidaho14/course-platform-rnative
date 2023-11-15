import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { CoursesStackNav } from "./CoursesStackNav";

const AppNav = () => {
    return (
        <NavigationContainer>
            <CoursesStackNav />
        </NavigationContainer>
    )
}

export default AppNav;