const useValueNav = (navigate) => {
    if (sessionStorage.getItem('profit')) navigate('/value');
    else navigate('/valueMain');
};

export default useValueNav;
