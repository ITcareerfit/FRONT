import React, { useEffect } from "react";
import ReactDom from "react-dom";
import "../../styles/basic.css";

const Modal = ({ open, children, className, setOpen }) => {

    useEffect(() => {
        open
            ? document.body.style.overflow = "hidden"
            : document.body.style.overflow = "visible";
    }, [open]);

    if (!open) return null;

    const modalOut = () => { setOpen(false); };

    return ReactDom.createPortal(
        <div className={className}>
            <div className="modalOut" onClick={modalOut}>X</div>
            <div className="modalBox">
                <div className="modalPadding">
                    {children}
                </div>
            </div>
        </div>,
        document.getElementById('modal')
    );
};

export default Modal;
