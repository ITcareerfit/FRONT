import React from "react";

const Pagination = ({ maxPage, page }) => {
    const makeBtn = () => {
        const btn = [];
        for (let i = 0; i < maxPage; i++) {
            btn.push(<button key={i + 1} className="footerBtn" onClick={() => page[1](i + 1)}>{i + 1}</button>);
        }
        return btn;
    };

    return (
        <footer className="pagination">
            <div>
                <button className="footerBtn" onClick={() => page[1](1)} disabled={page[0] === 1}>{'<<'}</button>
                <button className="footerBtn" onClick={() => page[1](page[0] - 1)} disabled={page[0] === 1}>{'<'}</button>
                {makeBtn()}
                <button className="footerBtn" onClick={() => page[1](page[0] + 1)} disabled={page[0] === maxPage}>{'>'}</button>
                <button className="footerBtn" onClick={() => page[1](maxPage)} disabled={page[0] === maxPage}>{'>>'}</button>
            </div>
        </footer>
    );
};

export default Pagination;
