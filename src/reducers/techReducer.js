import {
    ADD_TECH,
    DELETE_TECH,
    GET_TECHS,
    TECHS_ERROR,
    SET_LOADING
} from "../actions/types";
const initialState = {
    techs: null,
    current: null,
    loading: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_TECHS:
            return {
                ...state,
                techs: action.payload,
                loading: false
            };
        case SET_LOADING: {
            return {
                ...state,
                loading: true
            };
        }
        default:
            return state;
    }
};
