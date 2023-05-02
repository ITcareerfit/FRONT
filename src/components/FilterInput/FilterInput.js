import React, { useEffect } from "react";

const FilterInput = ({ className, mainClassName, inputClassName, placeholder, result, viewResult, remove, send }) => {

    useEffect(() => {
        let background;
        if (mainClassName === 'selectStack') background = 'rgb(168, 200, 249)';
        else background = 'rgb(205, 237, 246)';
        let makeCheck = [];
        for (let i = 0; i < viewResult.length; i++) {
            if (viewResult[i].includes(background)) {
                makeCheck = [...makeCheck, viewResult[i][0]];
            }
        }
        send[1](makeCheck.join('^'));
    }, [mainClassName, viewResult, send]);

    const search = (className) => {
        const search = document.getElementsByClassName(className)[0].value;
        document.getElementsByClassName(className)[0].value = '';

        let background, text;
        switch (className) {
            case 'selectStack':
                background = 'rgb(168, 200, 249)';
                text = 'rgb(11, 82, 141)';
                result([search, background, text]);
                break;
            case 'selectCompany':
                background = 'rgb(205, 237, 246)';
                text = 'rgb(111, 108, 217)';
                if (send[0] !== '') remove([send[0], background, text]);
                result([search, background, text]);
                break;
            default:
                break;
        }
    };

    return (
        <div className={className}>
            <div className="inputGroup">
                <input type="text" className={inputClassName} placeholder={placeholder} />
                <img src={require('../../assets/images/search.png')} className="selectImg" alt="select" onClick={() => search(mainClassName)} />
            </div>
        </div>
    );
};

export default FilterInput;
