import * as ActionTypes from "../Actions/ActionTypes";
let initialState = {
    feedBackData: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.ADD_FEEDBACK_SUCCESS:
            {
                const arrayOfFeedbackObjects = state.feedBackData.concat(action.value);
                return {
                    ...state,
                    feedBackData: arrayOfFeedbackObjects
                }
            }
        case ActionTypes.ADD_FEEDBACK_FAILURE:
            {
                return {
                    ...state
                }
            }
        default:
            return state;
    }
}
export default reducer;