import React from "react";

const FilterValue = ({ name, className, mainClassName, selectBase, option, open }) => {
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
        console.log(name, className);
    };

    return (
        <div className="valueRow">
            <div className="valueQuestion">
                {name}
            </div>
            <div className={className} onClick={() => selectOpen(mainClassName)}>
                <div className="selectBase valueSelectBase">
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
        </div>
    );
};

export default FilterValue;
