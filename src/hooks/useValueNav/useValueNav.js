const useValueNav = (navigate) => {
    if (sessionStorage.getItem('profit') !== 'NaN' && sessionStorage.getItem('profit') !== null && sessionStorage.getItem('profit') !== 'null') navigate('/value');
    else navigate('/valueMain');
};

export default useValueNav;
