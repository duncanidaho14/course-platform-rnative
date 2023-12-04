import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import CourseItem from '../components/CourseItem';
import EmptyMsg from '../components/EmptyMsg'
import { addToCart } from '../redux/actions/actionAddToCart';


const Landing = ({ navigation }) => {
    
    const dispatch = useDispatch();

    const handleAddToCart = (course) => {
        console.log(course)
        dispatch(addToCart(course));
        alert('article ajouter au panier');
    }

    const existingCourses = useSelector(state => state.courses.existingCourses);
    const coursesToDisplay = existingCourses.filter(course => course.selected === false);

    if (coursesToDisplay.length) {
        return (
            <FlatList
                data={coursesToDisplay}
                renderItem={({item}) => (

                    <CourseItem
                        image={item.image}
                        title={item.title}
                        price={item.price}
                        viewDetails={() => navigation.navigate('Details', {
                            id: item.id,
                            title: item.title,
                            price: item.price
                        })}
                        onAddToCart={() => handleAddToCart(item)}
                    />
                )}
                keyExtractor={ item => item.id}
            />
        );
    } 
    return <EmptyMsg text="Pas de cours à afficher" />
    
}

const styles = StyleSheet.create({})

export default Landing;