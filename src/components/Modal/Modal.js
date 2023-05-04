import React, { useEffect } from "react";
import ReactDom from "react-dom";
import "../../styles/basic.css";

const Modal = ({ open, children, className }) => {

    useEffect(() => {
        open
            ? document.body.style.overflow = "hidden"
            : document.body.style.overflow = "visible";
    }, [open]);

    if (!open) return null;

    return ReactDom.createPortal(
        <div className={className}>
            {children}
        </div>,
        document.getElementById('modal')
    );
};

export default Modal;
