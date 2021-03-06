import React, {Fragment} from 'react';
import classes from './Modal.css';
import Backdrop from "../Backdrop/Backdrop";

const areEqual = (prevProps, nextProps) => {
    return nextProps.show === prevProps.show ||
        prevProps.children === nextProps.children;
};

const Modal = (props) => (
    <Fragment>
        <div
            className={classes.Modal}
            style={{
                transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.show ? '1' : '0'
            }}>
            {props.children}
        </div>
        <Backdrop
            clicked={props.modalClosed}
            show={props.show}/>
    </Fragment>
);

export default React.memo(Modal, areEqual);
