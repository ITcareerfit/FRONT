import React, { useEffect, useState } from "react";
import { useSelectOpen } from "../../hooks";

const Filter = ({ className, mainClassName, selectBase, option, result, viewResult, remove, send, open }) => {
    const selectOpen = useSelectOpen;

    const [check, setCheck] = useState(null);

    useEffect(() => {
        // viewResult 기반으로 radio 반영
        setCheck(null);
        let flag = 0;
        let background, text;
        switch (mainClassName) {
            case 'selectType':
                background = 'rgb(234, 242, 215)';
                text = 'rgb(104, 134, 122)';
                break;
            case 'selectEmployee':
                background = 'rgb(250, 244, 211)';
                text = 'rgb(202, 131, 121)';
                break;
            case 'selectPay':
                background = 'rgb(255, 236, 214)';
                text = 'rgb(202, 131, 121)';
                break;
            case 'selectCareer':
                background = 'rgb(255, 204, 204)';
                text = 'rgb(255, 124, 140)';
                break;
            default:
                break;
        }

        for (let i = 0; i < viewResult.length; i++) {
            for (let j = 0; j < option.length; j++) {
                if (viewResult[i].includes(option[j], background, text)) {
                    flag = 1;
                    setCheck([option[j], background, text]);
                    send(option[j]);
                    break;
                }
            }
            if (flag === 1) break;
        }
        if (flag === 0) send('');

    }, [mainClassName, viewResult, option, send]);

    const optionSelect = (name, className) => {
        if (check !== null) remove(check);
        let background, text;
        switch (className) {
            case 'selectType':
                background = 'rgb(234, 242, 215)';
                text = 'rgb(104, 134, 122)';
                result([name, background, text]);
                setCheck([name, background, text]);
                break;
            case 'selectEmployee':
                background = 'rgb(250, 244, 211)';
                text = 'rgb(202, 131, 121)';
                result([name, background, text]);
                setCheck([name, background, text]);
                break;
            case 'selectPay':
                background = 'rgb(255, 236, 214)';
                text = 'rgb(202, 131, 121)';
                result([name, background, text]);
                setCheck([name, background, text]);
                break;
            case 'selectCareer':
                background = 'rgb(255, 204, 204)';
                text = 'rgb(255, 124, 140)';
                result([name, background, text]);
                setCheck([name, background, text]);
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
                            {/* label 태그로 텍스트 클릭해도 클릭 적용되도록 */}

                            <div className="optionTool">
                                <input type="radio" className="optionBox" onChange={() => optionSelect(v, mainClassName)} checked={check ? v === check[0] : 0} value={v} /> {/* checked 속성은 v가 check과 같다면 채워지도록 */}
                                <div>{v}</div>
                            </div>
                        </label>
                    );
                })}
            </div>
        </div>
    );
};

export default Filter;
