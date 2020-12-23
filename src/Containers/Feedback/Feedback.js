import React, { Component } from 'react'
import css from '../Feedback/Feedback.module.css'
import Quote from '../../Components/Quote/Quote'
import * as FeedbackActionCreator from '../../Store/Actions/FeedbackActionCreator'
import Auxillary from '../../HOC/Auxillary/Auxillary'
import { connect } from 'react-redux'
class Feedback extends Component {
    state = {
        FeedbackForm: {
            name: {
                elementConfig: {
                    type: "text",
                    placeholder: "Enter Name"
                },
                value: ""
            },
            email: {
                elementConfig: {
                    type: "email",
                    placeholder: "Enter Email"
                },
                value: ""
            },
            comments: {
                elementConfig: {
                    type: "text",
                    placeholder: "I am still learning...........Please provide your feedback"
                },
                value: ""
            }
        },
        overallFormValid: false
    };

    onChangeHandler = (event, id) => {
        const formData = {
            ...this.state.FeedbackForm
        }
        const singleFormData = {
            ...this.state.FeedbackForm[id]
        }
        singleFormData.value = event.target.value;
        singleFormData.hasTouched = true;
        formData[id] = singleFormData;
        this.setState({
            FeedbackForm: formData
        });
    }

    formSubmitHandler = (event) => {
        event.preventDefault();
        let info = {};
        for (let i in this.state.FeedbackForm) {
            info[i] = this.state.FeedbackForm[i];
        }
        let userInfo = info;

    }

    render() {
        let dynamicDiv = null;
        let elementsArray = [];
        for (let i in this.state.FeedbackForm) {
            elementsArray.push({
                id: i,
                configuration: this.state.FeedbackForm[i]
            })
        }
        dynamicDiv = (
            <div className={css.loginpage}>
                <div className={css.form}>
                    <form className="login-form" onSubmit={this.formSubmitHandler}>
                        {elementsArray.map((iterator) => {
                            return (
                                <input key={iterator.id}
                                    className={iterator.id}
                                    type={iterator.configuration.elementConfig.type}
                                    placeholder={iterator.configuration.elementConfig.placeholder}
                                    onChange={(event) => { this.onChangeHandler(event, iterator.id) }}
                                    value={iterator.value}
                                    required />
                            )
                        })}
                        <button>Submit</button>
                    </form>
                </div>
            </div>
        )
        return (
            <Auxillary>
                {dynamicDiv}
            </Auxillary>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        feedBackInfo: state.FeedbackReducer.feedBackData
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        postFeedback: (data) => {
            dispatch(FeedbackActionCreator.postFeedback(data));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Feedback);