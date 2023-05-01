const useSelectOpen = (className, open) => {
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

export default useSelectOpen;
