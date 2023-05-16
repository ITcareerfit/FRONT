import React, { useState } from "react";
import { useSelectOpen } from "../../hooks";

const FilterValue = ({ name, className, mainClassName, selectBase, option, result, open }) => {
    const selectOpen = useSelectOpen;

    const [holder, setHolder] = useState(selectBase);

    const optionSelect = (v, index) => {
        setHolder(v);

        switch (index) {
            case 0:
                result(96);
                break;
            case 1:
                result(89);
                break;
            case 2:
                result(77);
                break;
            case 3:
                result(60);
                break;
            case 4:
                result(40);
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
            <div className={className} onClick={() => selectOpen(mainClassName, open)}>

                <div className="selectBase valueSelectBase">
                    {holder}
                    <img src={require('../../assets/images/select.png')} className="selectImg" alt="select" />
                </div>

                <ul className="select selectNone valueSelect">
                    {option.map((v, index) => {
                        let text = '';
                        switch (index) {
                            case 0:
                                text = '상위 4%';
                                break;
                            case 1:
                                text = '상위 11%';
                                break;
                            case 2:
                                text = '상위 23%';
                                break;
                            case 3:
                                text = '상위 40%';
                                break;
                            case 4:
                                text = '상위 60%';
                                break;
                            default:
                                break;
                        }
                        return (
                            <li key={v + index} className="option valueOption" onClick={() => optionSelect(text, index)} value={index}>
                                {text}
                                <div className="valueOptionList">
                                    {option[index].map((v) =>
                                        <span key={v}>
                                            {v}< br />
                                        </span>)}
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export default FilterValue;
