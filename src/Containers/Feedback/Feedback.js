import React, { Component } from 'react'
import css from '../Feedback/Feedback.module.css'
import * as FeedbackActionCreator from '../../Store/Actions/FeedbackActionCreator'
import Auxillary from '../../HOC/Auxillary/Auxillary'
import LoadingModal from '../../Components/UI/Spinner/Spinner'
import { connect } from 'react-redux'
import Message from '../../Components/Message/Message'
import Modal from 'react-modal';
const customStyles = {
    overlay: {
        backdropFilter: 'blur(10px)'
    },
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        backdropFilter: 'blur(8px)'
    }
};
Modal.setAppElement('#root');
class Feedback extends Component {
    componentDidMount() {
        var Footer = document.getElementById("Master_Footer");
        Footer.style.display = "block";
    }
    state = {
        FeedbackForm: {
            name: {
                elementConfig: {
                    type: "text",
                    placeholder: "Enter Name",
                    height: "50px"
                },
                value: ""
            },
            email: {
                elementConfig: {
                    type: "email",
                    placeholder: "Enter Email",
                    height: "50px"
                },
                value: ""
            },
            comments: {
                elementConfig: {
                    type: "text",
                    placeholder: "Comment",
                    height: "80px"
                },
                value: ""
            }
        },
        showLoadingModal: false,
        showModal: true
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
            info[i] = this.state.FeedbackForm[i].value;
        }
        let userInfo = info;
        userInfo.date = new Date();
        this.setState({
            showLoadingModal: true
        });
        this.props.postFeedback(userInfo);
    }

    closeModal = () => {
        window.location.href = "/";
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
        if (this.state.showLoadingModal) {
            dynamicDiv = (
                <div id="#main"><LoadingModal />
                </div>);
        }
        else {
            dynamicDiv = (
                <div id="#main">
                    <div className={css.bg}>
                        <div className={css.businesscard} ontouchstart="this.classList.toggle('hover');">
                            <div className={css.flipper}>
                                <div className={css.front}>
                                    <div className={css.name}>
                                        <span className={css.first}>FEEDBACK</span>
                                        <span className={css.last}></span>
                                        <span className={css.title}>Please....</span>
                                    </div>
                                </div>
                                <div className={css.back}>
                                    <div className={css.containersm}>
                                        <figure className={css.logowhite}></figure>
                                    </div>
                                    <div className={css.containerlg}>
                                        <div className={css.social}>
                                            <p>
                                                “I think it’s very important to have a feedback loop,
                                                where you’re constantly thinking about what you’ve done
                                                and how you could be doing it better.”
                                            <p>
                                                    - ELON MUSK
                                            </p>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={css.loginpage}>
                            <div className={css.form}>
                                <form className="login-form" onSubmit={this.formSubmitHandler}>
                                    {elementsArray.map((iterator) => {
                                        return (
                                            <input key={iterator.id}
                                                class={iterator.id}
                                                type={iterator.configuration.elementConfig.type}
                                                placeholder={iterator.configuration.elementConfig.placeholder}
                                                onChange={(event) => { this.onChangeHandler(event, iterator.id) }}
                                                value={iterator.value}
                                                style={{ height: iterator.configuration.elementConfig.height }}
                                                required />
                                        )
                                    })}
                                    <button>Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        if (this.props.location.search.indexOf("success=true") > 0) {
            dynamicDiv = (<Modal
                isOpen={this.state.showModal}
                style={customStyles}
                contentLabel="Success or Failure Modal"
            >
                <Message refToCloseModal={this.closeModal} isSuccesMessage={true} />
            </Modal>)
        }
        else if (this.props.location.search.indexOf("failure=true") > 0) {
            dynamicDiv = (<Modal
                isOpen={this.state.showModal}
                style={customStyles}
                contentLabel="Success or Failure Modal"
            >
                <Message refToCloseModal={this.closeModal} isSuccesMessage={false} />
            </Modal>)
        }
        return (
            <Auxillary>
                {dynamicDiv}
            </Auxillary>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        feedBackInfo: state.FeedbackReducer.feedBackData,
        errorMessage: state.FeedbackReducer.errorMessage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        postFeedback: (data) => {
            dispatch(FeedbackActionCreator.postFeedback(data));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Feedback);  