import React from "react";

const FilterInput = ({ className, mainClassName, inputClassName, placeholder, result }) => {

    const search = (className) => {
        const search = document.getElementsByClassName(className)[0].value;
        document.getElementsByClassName(className)[0].value = '';

        let background, text;
        switch (className) {
            case 'selectStack':
                background = 'rgb(168, 200, 249)';
                text = 'rgb(11, 82, 141)';
                result[0](search);
                result[1](background);
                result[2](text);
                break;
            case 'selectCompany':
                background = 'rgb(205, 237, 246)';
                text = 'rgb(111, 108, 217)';
                result[0](search);
                result[1](background);
                result[2](text);
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
