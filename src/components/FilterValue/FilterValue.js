import React, { useEffect, useState } from "react";

const FilterValue = ({ name, className, mainClassName, selectBase, option, result, open }) => {

    const [holder, setHolder] = useState(selectBase);

    useEffect(() => { }, [selectBase]);

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

    const optionSelect = (index, v) => {
        setHolder(v);

        switch (option.length) {
            case 2:
                result((index + 1) / 2 * 100);
                break;
            case 3:
                result((index + 1) / 3 * 100);
                break;
            case 4:
                result((index + 1) / 4 * 100);
                break;
            case 5:
                result((index + 1) / 5 * 100);
                break;
            case 6:
                result((index + 1) / 6 * 100);
                break;
            default:
                break;
        }
    };

    return (
        <div className="valueRow">
            <div className="valueQuestion">
                {name}
            </div>
            <div className={className} onClick={() => selectOpen(mainClassName)}>

                <div className="selectBase valueSelectBase">
                    {holder}
                    <img src={require('../../assets/images/select.png')} className="selectImg" alt="select" />
                </div>

                <ul className="select selectNone">
                    {option.map((v, index) => {
                        return (
                            <li key={v + index} className="option" onClick={() => optionSelect(index, v)} value={index}>{v}</li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export default FilterValue;
