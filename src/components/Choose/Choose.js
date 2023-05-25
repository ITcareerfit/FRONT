import React, { useEffect, useRef, useState } from "react";
import { useSelectOpen } from "../../hooks";

const Choose = ({ className, mainClassName, option, open, value }) => {
    const selectOpen = useSelectOpen;

    const [divClassName, setDivClassName] = useState('');
    const height = useRef(null);

    useEffect(() => {
        if (mainClassName === 'jobType') {
            setDivClassName('selectBase mypageBorder mypageEditInput mypagePosTool');
            if (value[0].length === 0) height.current.style.height = '32px';
            else height.current.style.height = 'auto';
        }
        else setDivClassName('selectBase selectSignUp');
    }, [mainClassName, value]);

    const optionSelect = (name, className) => {
        value[1](name);

        // 창 닫고 배경색 변경
        document.getElementsByClassName(className)[0].children[1].classList.replace('selectBlock', 'selectNone');
        open[1]('');
        document.getElementsByClassName(className)[0].children[0].style.background = 'white';
    };

    return (
        <div className={className} onClick={() => selectOpen(mainClassName, open)}>
            <div className={divClassName} ref={height}>
                {mainClassName === 'jobType'
                    ? value[0] === ''
                        ? 'IT 직무 선택'
                        : value[0]
                    : value[0]}
                <img src={require('../../assets/images/select.png')} className="selectImg" alt="select" />
            </div>

            <div className="select selectNone">
                {option.map((v, index) => {
                    return (
                        <label key={v + index} className="option">
                            {/* label 태그로 텍스트 클릭해도 클릭 적용되도록 */}
                            <input type="radio" className="optionBox" onChange={() => optionSelect(v, mainClassName)} checked={v === value[0]} value={v} />
                            {/* checked 속성은 v가 value[0]과 같다면 채워지도록 */}
                            {v}
                        </label>
                    );
                })}
            </div>
        </div>
    );
};

export default Choose;
