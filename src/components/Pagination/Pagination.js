import React, { useEffect, useState } from "react";

const Pagination = ({ maxPage, page }) => {
    const [pageBtn, setPageBtn] = useState([]);

    useEffect(() => {
        const btn = [];
        let now = 0;
        if (page[0] % 10 === 0) now = Math.floor(page[0] / 10) - 1;
        else now = Math.floor(page[0] / 10);

        // 10개씩 페이지 자르기
        for (let i = 1; i <= 10; i++) {
            if (now * 10 + i > maxPage) break;
            if (now * 10 + i === page[0]) btn.push(<button key={now * 10 + i} className="footerBtn activeFooterBtn" onClick={() => page[1](now * 10 + i)}>{now * 10 + i}</button>);
            else btn.push(<button key={now * 10 + i} className="footerBtn" onClick={() => page[1](now * 10 + i)}>{now * 10 + i}</button>);
        }
        setPageBtn(btn);
    }, [page, maxPage]);

    return (
        <footer className="pagination">
            <div>
                <button className="footerBtn" onClick={() => page[1](1)} disabled={page[0] === 1}>{'<<'}</button>
                <button className="footerBtn" onClick={() => page[1](page[0] - 1)} disabled={page[0] === 1}>{'<'}</button>
                {pageBtn}
                <button className="footerBtn" onClick={() => page[1](page[0] + 1)} disabled={page[0] === maxPage}>{'>'}</button>
                <button className="footerBtn" onClick={() => page[1](maxPage)} disabled={page[0] === maxPage}>{'>>'}</button>
            </div>
        </footer>
    );
};

export default Pagination;
