import React from "react";

const Filter = ({ className, mainClassName, selectBase, option, result, open }) => {
    const selectOpen = (className) => {
        if (document.getElementsByClassName(className)[0].children[1].classList.item(1) === 'selectNone') {
            if (open[0] !== '') {
                document.getElementsByClassName(open[0])[0].children[1].classList.replace('selectBlock', 'selectNone');
            }
            document.getElementsByClassName(className)[0].children[1].classList.replace('selectNone', 'selectBlock');
            open[1](className);
        }
        else {
            document.getElementsByClassName(className)[0].children[1].classList.replace('selectBlock', 'selectNone');
            open[1]('');
        }
    };

    const optionSelect = (name, className) => {
        let background, text;
        switch (className) {
            case 'selectJob':
                background = 'rgb(205, 237, 246)';
                text = 'rgb(99, 86, 215)';
                result[0](name);
                result[1](background);
                result[2](text);
                break;
            case 'selectArea':
                background = 'rgb(255, 236, 214)';
                text = 'rgb(202, 131, 121)';
                result[0](name);
                result[1](background);
                result[2](text);
                break;
            case 'selectEmployee':
                background = 'rgb(205, 237, 246)';
                text = 'rgb(99, 86, 215)';
                result[0](name);
                result[1](background);
                result[2](text);
                break;
            case 'selectPay':
                background = 'rgb(255, 236, 214)';
                text = 'rgb(202, 131, 121)';
                result[0](name);
                result[1](background);
                result[2](text);
                break;
            case 'selectCareer':
                background = 'rgb(205, 237, 246)';
                text = 'rgb(99, 86, 215)';
                result[0](name);
                result[1](background);
                result[2](text);
                break;
            default:
                break;
        }
    };

    return (
        <div className={className} onClick={() => selectOpen(mainClassName)}>
            <div className="selectBase">
                {selectBase}
                <img src={require('../../assets/images/select.png')} className="selectImg" alt="select" />
            </div>
            <ul className="select selectNone">
                {option.map((v, index) => {
                    return (
                        <li key={v + index} className="option" onClick={() => optionSelect(v, mainClassName)} value={index} >{v}</li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Filter;
