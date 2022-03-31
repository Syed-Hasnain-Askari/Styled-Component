import {createGlobalStyle} from 'styled-components'
export default createGlobalStyle`
    *{
        margin:0;
        padding:0;
        outline:0;
        box-sizing:border-box
        fontFamily: "roc-grotesk, sans-serif",
    }
    #root{
        margin:0 auto;
    }
    .nav__scroll {
        background-color: #F0E8D9;
        position: fixed;
        z-index: 1000;
    }
    .nav__scroll .menu {
        filter: invert(1);
    }
    .nav__scroll .logo {
        filter: invert(1);
    }
     
`;