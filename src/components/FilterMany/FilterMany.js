import React, { useEffect, useState } from "react";

const FilterMany = ({ className, mainClassName, selectBase, option, result, viewResult, open }) => {

    const [check, setCheck] = useState([]);

    useEffect(() => {
        // viewResult 기반으로 checkbox 반영
        setCheck([]);
        let makeCheck = [];
        for (let i = 0; i < option.length; i++) {
            if (viewResult.includes(option[i])) {
                makeCheck = [...makeCheck, option[i]];
            }
        }
        setCheck(makeCheck);
    }, [viewResult, option]);

    const selectOpen = (className) => {
        if (document.getElementsByClassName(className)[0].children[1].classList.item(1) === 'selectNone') {
            if (open[0] !== '') {
                // 열려있는 다른 filter 창 닫기 & 배경색 변경
                document.getElementsByClassName(open[0])[0].children[1].classList.replace('selectBlock', 'selectNone');

                document.getElementsByClassName(open[0])[0].children[0].style.background = 'white';
            }

            // filter 보이게하기
            document.getElementsByClassName(className)[0].children[1].classList.replace('selectNone', 'selectBlock');
            open[1](className);

            // filter 배경색 변경
            document.getElementsByClassName(className)[0].children[0].style.background = 'rgb(232, 238, 243)';
        }
        else {
            document.getElementsByClassName(className)[0].children[1].classList.replace('selectBlock', 'selectNone');
            open[1]('');

            document.getElementsByClassName(className)[0].children[0].style.background = 'white';
        }
    };

    const optionSelect = (name, className) => {
        let background, text;
        switch (className) {
            case 'selectJob':
                background = 'rgb(222, 210, 249)';
                text = 'rgb(123, 97, 255)';
                result[0](name);
                result[1](background);
                result[2](text);
                break;
            case 'selectJobType':
                background = 'rgb(234, 242, 215)';
                text = 'rgb(104, 134, 122)';
                result[0](name);
                result[1](background);
                result[2](text);
                break;
            case 'selectEmployee':
                background = 'rgb(250, 244, 211)';
                text = 'rgb(202, 131, 121)';
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
                background = 'rgb(255, 204, 204)';
                text = 'rgb(255, 124, 140)';
                result[0](name);
                result[1](background);
                result[2](text);
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
        <div className={className} onClick={() => selectOpen(mainClassName)}>
            <div className="selectBase">
                {selectBase}
                <img src={require('../../assets/images/select.png')} className="selectImg" alt="select" />
            </div>

            <div className="select selectNone">
                {option.map((v, index) => {
                    return (
                        <label key={v + index} className="option">
                            {/* label 태그로 텍스트 클릭해도 클릭 적용되도록 */}
                            <input type="checkbox" className="optionBox" onChange={() => optionSelect(v, mainClassName)}
                                checked={check.includes(v)}
                                value={v} /> {/* checked 속성은 v가 check에 있다면 채워지도록 */}
                            {v}
                        </label>
                    );
                })}
            </div>
        </div>
    );
};

export default FilterMany;
