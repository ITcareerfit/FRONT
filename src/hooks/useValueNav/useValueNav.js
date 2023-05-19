const useValueNav = (navigate) => {
    if (sessionStorage.getItem('profit') !== 'NaN') navigate('/value');
    else navigate('/valueMain');
};

export default useValueNav;
