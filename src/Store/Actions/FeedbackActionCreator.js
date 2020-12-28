import * as ActionTypes from '../Actions/ActionTypes'
import Axios from '../../../src/Axios'

export const postFeedbackSuccess = (data) => {
    return {
        type: ActionTypes.ADD_FEEDBACK_SUCCESS,
        value: data
    }
}

export const postFeedbackFailure = (data) => {
    return {
        type: ActionTypes.ADD_FEEDBACK_FAILURE,
        value: data
    }
}

export const postFeedback = (data) => {
    return (dispatch) => {
        Axios.post("/feedback.json", data).then((response) => {
            const feedBackData = data;
            dispatch(postFeedbackSuccess(feedBackData));
            window.location.href = "/feedback?success=true";
        }).catch((response) => {
            dispatch(postFeedbackFailure(response.data));
            window.location.href="/feedback?failure=true&errormessage=" + response.data;
        })
    }
}
