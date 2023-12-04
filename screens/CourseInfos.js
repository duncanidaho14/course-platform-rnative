import React from 'react'
import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { useSelector, useDispatch } from 'react-redux';
import { AntDesign } from '@expo/vector-icons';
import globalStyles from '../styles/globalStyles';
import { addToCart } from '../redux/actions/actionAddToCart';

const CourseInfos = ({ navigation, route }) => {
    
    const dispatch = useDispatch();
    const id = route.params.id;
    const selectedCourse = useSelector(state => state.courses.existingCourses.find(course => course.id === id ));
    
    const handleAddToCart = () => {
        dispatch(addToCart(selectedCourse));
        navigation.goBack();
        alert('Le produit a été ajouté au panier')
    }
//    useEffect(() => {
//      navigation.setOptions({
//         title: selectedCourse.title
//      })
//    }, [navigation])
   

    return (
        <View>
            <ScrollView style={styles.scroll}>
                <Image 
                    source={{uri: selectedCourse.image}}
                    style={styles.sourceImage}
                />
                <View style={styles.courseDetails}>
                    <Text style={styles.courseDescription}>{selectedCourse.description}</Text>
                </View>
            </ScrollView>
            
            <View style={styles.footerContainer}>
                <View style={styles.footerTop}>
                    <View style={styles.coursePriceWrapper}>
                        <Text style={styles.coursePrice}>{selectedCourse.price.toFixed(2)} €</Text>
                    </View>
                </View>
                <View style={styles.footerBottom}>
                    <AntDesign
                        name='back'
                        size={24}
                        color={globalStyles.white}
                        onPress={() => navigation.goBack()}
                    />

                    <TouchableOpacity
                        onPress={handleAddToCart}
                    >
                        <View style={styles.btnAddToCart}>
                            <Text style={styles.btnText}>Ajouter au panier</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>      
    )
}


const styles = StyleSheet.create({
    scroll: {
        backgroundColor: globalStyles.white,
        height: '80%'
    },
    sourceImage: {
        width: '100%',
        height: 250
    },
    courseDetails: {
        padding: 20,
        alignItems: 'center'
    },
    courseDescription: {
        color: globalStyles.dimGrey,
        fontSize: 17,
        marginHorizontal: 20,
        marginVertical: 10
    },
    coursePriceWrapper: {
        paddingRight: 40
    },
    coursePrice: {
        fontSize: 24
    },
    footerContainer: {
        height: '20%'
    },
    footerTop: {
        height: '40%',
        alignItems: 'flex-end',
        justifyContent: 'center'
    },
    footerBottom: {
        backgroundColor: globalStyles.green,
        height: '60%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 30
    },
    btnAddToCart: {
        borderRadius: 6,
        paddingVertical: 9,
        paddingHorizontal: 25,
        backgroundColor: globalStyles.lightOrange
    },
    btnText: {
        fontSize: 19
    }


})

export default CourseInfos;