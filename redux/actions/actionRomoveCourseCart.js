import { REMOVE_COURSE_CART } from '../constants'

export const removeCourseCart = (id) => {
    return {
        type: REMOVE_COURSE_CART,
        prodId: id
    }
}