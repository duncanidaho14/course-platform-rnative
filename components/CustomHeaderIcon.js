import React from 'react'
import { HeaderButton } from 'react-navigation-header-buttons'
import { AntDesign } from '@expo/vector-icons';
import globalStyles from '../styles/globalStyles';

const CustomHeaderIcon = (props) => {
    console.log(props)
    return (
        <HeaderButton 
            {...props}
            IconComponent={AntDesign}
            size={35}
            color={globalStyles.white}
        />
    )
}

export default CustomHeaderIcon;