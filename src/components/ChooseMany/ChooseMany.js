import React from "react";

const ChooseMany = ({ className, mainClassName, option, open, value }) => {

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

            // select창이 길이 차지하도록
            if (mainClassName === 'selectJob') document.getElementsByClassName(mainClassName)[0].children[1].style.position = 'relative';

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
        <div className={className} onClick={() => selectOpen(mainClassName)}>
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
