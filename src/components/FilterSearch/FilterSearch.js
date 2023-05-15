import React, { useEffect, useRef, useState } from "react";

const FilterSearch = ({ className, mainClassName, inputClassName, placeholder, option, result, viewResult, send, open }) => {
    const [check, setCheck] = useState([]);
    const [optionList, setOptionList] = useState(option);
    const input = useRef(null);

    useEffect(() => {
        document.getElementsByClassName(mainClassName)[0].children[0].children[0].style.background = document.getElementsByClassName(mainClassName)[0].children[0].style.background;
    }, [open, mainClassName]);

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

    const optionOpen = () => {
        if (document.getElementsByClassName(mainClassName)[0].children[1].classList.item(1) === 'selectNone') {
            if (open[0] !== '') {
                // 열려있는 다른 filter 창 닫기 & 배경색 변경
                document.getElementsByClassName(open[0])[0].children[1].classList.replace('selectBlock', 'selectNone');

                document.getElementsByClassName(open[0])[0].children[0].style.background = 'white';
            }

            // filter 보이게하기
            document.getElementsByClassName(mainClassName)[0].children[1].classList.replace('selectNone', 'selectBlock');
            open[1](className);
            input.current.disabled = false;
            input.current.focus();

            // filter 배경색 변경
            document.getElementsByClassName(mainClassName)[0].children[0].style.background = 'rgb(232, 238, 243)';
        }
        else {
            document.getElementsByClassName(mainClassName)[0].children[1].classList.replace('selectBlock', 'selectNone');
            open[1]('');
            input.current.disabled = true;

            document.getElementsByClassName(mainClassName)[0].children[0].style.background = 'white';
        }
    };

    const change = (event) => {
        if (event.target.value === '') setOptionList(option);
        else {
            const value = event.target.value.toUpperCase(); // 대문자로 변환
            const newOptionList = [];
            optionList.map((v) => v.toUpperCase().includes(value) ? newOptionList.push(v) : null);
            setOptionList(newOptionList);
        }
    };

    const optionSelect = (name, className) => {
        const background = 'rgb(168, 200, 249)';
        const text = 'rgb(11, 82, 141)';
        result([name, background, text]);

        // 창 닫고 배경색 변경
        document.getElementsByClassName(className)[0].children[1].classList.replace('selectBlock', 'selectNone');
        open[1]('');
        document.getElementsByClassName(className)[0].children[0].style.background = 'white';
        document.getElementsByClassName(mainClassName)[0].children[0].children[0].style.background = 'white';

        input.current.disabled = true;
        input.current.placeholder = placeholder;
        input.current.value = '';
        setOptionList(option);
    };

    return (
        <div className={className} onClick={optionOpen}>
            <div className="inputGroup">
                <input type="text" className={inputClassName} ref={input} placeholder={placeholder} onChange={change} />
                <img src={require('../../assets/images/search.png')} className="selectImg" alt="select" />
            </div>

            <div className="select selectNone">
                {optionList.map((v, index) => {
                    return (
                        <label key={v + index} className="option">
                            <div className="optionTool">
                                <input type="checkbox" className="optionBox" onChange={() => optionSelect(v, mainClassName)}
                                    checked={check.includes(v)}
                                    value={v} />
                                <div>{v}</div>
                            </div>
                        </label>
                    );
                })}
            </div>
        </div>
    );
};

export default FilterSearch;
