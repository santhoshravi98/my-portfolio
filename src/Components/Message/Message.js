import Auxillary from '../../HOC/Auxillary/Auxillary'
import css from '../Message/Message.module.css'
import classLister from "css-module-class-lister";
const classes = classLister(css);
const Message = (props) => {
    let dynamicDiv = null;
    if (props.isSuccesMessage) {
        dynamicDiv = (
            <div className={css.successbox}>
                <div className={css.dot}></div>
                <div className={classes(css.dot, css.two)}></div>
                <div className={css.face}>
                    <div className={css.eye}></div>
                    <div className={classes(css.eye, css.right)}></div>
                    <div className={classes(css.mouth, css.happy)}></div>
                </div>
                <div className={classes(css.shadow, css.scale)}></div>
                <div className={css.message}><h1 className={css.alert}>Success!</h1><p className={css.para}>yay THANKS! Your Feedback is Submitted Successfully.</p></div>
                <button className={css.buttonbox}><h1 className={css.green} onClick={props.refToCloseModal}>Close</h1></button>
            </div>
        )
    }
    else
        (
            dynamicDiv = (
                <div className={css.errorbox}>
                    <div className={css.dot}></div>
                    <div className={classes(css.dot, css.two)}></div>
                    <div className={css.face2}>
                        <div className={css.eye}></div>
                        <div className={classes(css.eye, css.right)}></div>
                        <div className={classes(css.mouth, css.sad)}></div>
                    </div>
                    <div className={classes(css.shadow, css.move)}></div>
                    <div className={css.message}><h3 className={css.alert}>Sorry!</h3><p>oh no, something went wrong.</p></div>
                    <button className={css.buttonbox}><h3 className={css.red} onClick={props.refToCloseModal}>Close</h3></button>

                </div>
            )
        )
    return (
        <Auxillary>
            <div className={css.container}>
                {dynamicDiv}
            </div>

        </Auxillary>
    )
}
export default Message;