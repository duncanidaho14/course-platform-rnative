import { ADD_PAYMENT } from "../constants";

export const addPayment = (cartCourse, total) => {
    return {
        type: ADD_PAYMENT,
        orderInfos: {
            courses: cartCourse,
            total: total
        }
    }
}