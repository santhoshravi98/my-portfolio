import React, { Component } from 'react'
import css from '../Feedback/Feedback.module.css'
import Quote from '../../Components/Quote/Quote'
import Auxillary from '../../HOC/Auxillary/Auxillary'
class Feedback extends Component {
    state = {
        FeedbackForm: {
            name: {
                elementType: "input",
                elementConfig: {
                    type: "text",
                    placeholder: "Enter Name"
                },
                value: "",
                validationRules: {
                    required: true,
                },
                validationPassed: false,
                hasTouched: false
            },
            email: {
                elementType: "input",
                elementConfig: {
                    type: "email",
                    placeholder: "Enter Email"
                },
                value: "",
                validationRules: {
                    required: true
                },
                validationPassed: false,
                hasTouched: false,
            },
            comments: {
                elementType: "input",
                elementConfig: {
                    type: "text",
                    placeholder: "I am still learning...........Please provide your feedback"
                },
                value: "",
                validationRules: {
                    required: true
                },
                validationPassed: false,
                hasTouched: false
            }
        },
        overallFormValid: false
    };
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
                    <form className="login-form">
                        {elementsArray.map((iterator) => {
                            return (
                                <input key={iterator.id}
                                        className={iterator.id}
                                    type={iterator.configuration.elementConfig.type}
                                    placeholder={iterator.configuration.elementConfig.placeholder} />
                            )
                        })}
                        <button>login</button>
                        <p className={css.message}>Not registered? <a href="#">Create an account</a></p>
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
export default Feedback;