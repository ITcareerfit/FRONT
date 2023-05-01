import React, { useEffect, useState } from "react";
import { useSelectOpen } from "../../hooks";

const FilterMany = ({ className, mainClassName, selectBase, option, result, viewResult, send, open }) => {
    const selectOpen = useSelectOpen;

    const [check, setCheck] = useState([]);

    useEffect(() => {
        // viewResult 기반으로 checkbox 반영
        let makeCheck = [];
        for (let i = 0; i < viewResult.length; i++) {
            for (let j = 0; j < option.length; j++) {
                if (viewResult[i].includes(option[j])) {
                    makeCheck = [...makeCheck, option[j]];
                    break;
                }
            }
        }
        setCheck(makeCheck);
        send(makeCheck.join('^')); // 배열을 넣으면 무한루프라 문자열로 변환
        // join을 사용해서 배열 인덱스 사이사이에 ^ 삽입
    }, [viewResult, option, send]);

    const optionSelect = (name, className) => {
        let background, text;
        switch (className) {
            case 'selectJob':
                background = 'rgb(222, 210, 249)';
                text = 'rgb(123, 97, 255)';
                result([name, background, text]);
                break;
            case 'selectJobType':
                background = 'rgb(234, 242, 215)';
                text = 'rgb(104, 134, 122)';
                result([name, background, text]);
                break;
            default:
                break;
        }

        // 창 닫고 배경색 변경
        document.getElementsByClassName(className)[0].children[1].classList.replace('selectBlock', 'selectNone');
        open[1]('');
        document.getElementsByClassName(className)[0].children[0].style.background = 'white';
    };

    return (
        <div className={className} onClick={() => selectOpen(mainClassName, open)}>
            <div className="selectBase">
                {selectBase}
                <img src={require('../../assets/images/select.png')} className="selectImg" alt="select" />
            </div>

            <div className="select selectNone">
                {option.map((v, index) => {
                    return (
                        <label key={v + index} className="option">
                            <input type="checkbox" className="optionBox" onChange={() => optionSelect(v, mainClassName)}
                                checked={check.includes(v)}
                                value={v} />
                            {v}
                        </label>
                    );
                })}
            </div>
        </div>
    );
};

export default FilterMany;
