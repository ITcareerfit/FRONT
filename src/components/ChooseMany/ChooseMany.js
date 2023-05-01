import React from "react";
import { useSelectOpen } from "../../hooks";

const ChooseMany = ({ className, mainClassName, option, open, value }) => {
    const selectOpen = useSelectOpen;

    const optionSelect = (name, className) => {
        if (value[0].includes(name)) {
            const newCheck = value[0].filter(elem => elem !== name);
            // elem이 name이면 빼고 새 배열 생성
            value[1](newCheck);
        }
        else value[1]([...value[0], name]);

        // 창 닫고 배경색 변경
        document.getElementsByClassName(className)[0].children[1].classList.replace('selectBlock', 'selectNone');
        open[1]('');
        document.getElementsByClassName(className)[0].children[0].style.background = 'white';
    };

    return (
        <div className={className} onClick={() => selectOpen(mainClassName, open)}>
            <div className="selectBase selectSignUp">
                {value[0].map((v, index) => {
                    if (index !== value[0].length - 1) return v + ', ';
                    else return v;
                })}
                <img src={require('../../assets/images/select.png')} className="selectImg" alt="select" />
            </div>

            <div className="select selectNone">
                {option.map((v, index) => {
                    return (
                        <label key={v + index} className="option">
                            {/* label 태그로 텍스트 클릭해도 클릭 적용되도록 */}
                            <input type="checkbox" className="optionBox" onChange={() => optionSelect(v, mainClassName)}
                                checked={value[0].includes(v)}
                                value={v} /> {/* checked 속성은 v가 value[0]에 있다면 채워지도록 */}
                            {v}
                        </label>
                    );
                })}
            </div>
        </div>
    );
};

export default ChooseMany;
