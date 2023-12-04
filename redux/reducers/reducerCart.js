import PaidCourseModel from '../../data/PaidCourseModel'
import { ADD_TO_CART, REMOVE_COURSE_CART, ADD_PAYMENT } from '../constants';

const initialState = {
    cartCourse: [],
    total: 0
}

const reducerCart = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const course = action.course;
            const id = course.id;
            const price = course.price;
            const title = course.title;
        
            const newCourse = (new PaidCourseModel(id, price, title))

            return {
                ...state,
                cartCourse: state.cartCourse.concat(newCourse),
                total: state.total + price
            }

        case REMOVE_COURSE_CART:
            const indexResult = state.cartCourse.findIndex(course => course.id === action.prodId);
            const newCartCoursesArray = [...state.cartCourse];
            newCartCoursesArray.splice(indexResult, 1);

            const coursePrice = state.cartCourse[indexResult].price;

            return {
                ...state,
                cartCourse: newCartCoursesArray,
                total: state.total - coursePrice
            }
        
        case ADD_PAYMENT:
            return initialState;
            
        default:
            return state;
    }
}

export default reducerCart;