import styled from "styled-components";
export const Countdown = styled.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: ${(props) => props.theme['base-button']};
        /* width: 65px; */
        border-radius:8px;    
        margin-left:10px;
        margin-right:10px;

        button:first-child {
        
        border: 0;
        background: transparent;
        cursor: pointer;
        color:${(props) => props.theme['purple']};
        /* padding:7px; */
        font-size: 36px;
    }

    button {
        border: 0;
        background: transparent;
        cursor: pointer;
        color:${(props) => props.theme['purple']};
        /* padding:7px; */
        font-size: 24px;
        
    }
    p {
            font-family: "Roboto", serif;
            font-size: 18px;
            color :${(props) => props.theme['base-text']};
    }
    input {
        border:0;
        font-family: "Roboto", serif;
        font-weight: bold;
        font-size: 16px;
        text-align: center;
        /* background: ${(props) => props.theme['base-button']}; */
        background: transparent;
    }
`