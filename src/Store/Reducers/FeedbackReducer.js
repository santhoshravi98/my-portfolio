import * as ActionTypes from "../Actions/ActionTypes";
let initialState = {
    feedBackData: [],
    errorMessage : ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.ADD_FEEDBACK_SUCCESS:
            {
                const arrayOfFeedbackObjects = state.feedBackData.concat(action.value);
                return {
                    ...state,
                    feedBackData: arrayOfFeedbackObjects,
                    errorMessage : '',
                }
            }
        case ActionTypes.ADD_FEEDBACK_FAILURE:
            {
                return {
                    ...state,
                    errorMessage : action.value
                }
            }
        default:
            return state;
    }
}
export default reducer;