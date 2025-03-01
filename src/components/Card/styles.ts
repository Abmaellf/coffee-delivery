import styled from "styled-components";

export const ItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    background:${(props) => props.theme['base-card']};
    border-radius: 0 32px 0 0;
    padding: 10px;
/*    
    width:256px; 
    height: 335px; */
    gap: 2rem;

    header {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1.5rem;

        img {
            margin-top: calc(0px - 1.5rem - 8px);
        }
        span {
            background :${(props) => props.theme['yellow-light']};
            color :${(props) => props.theme['yellow-dark']};
            border-radius: 10px;
            font-size: 10px;
            /* padding: 5px; */
        }

        h1 {
            font-family: "Baloo 2", serif;
            font-size: 20px;
            font-weight: bold;
            color :${(props) => props.theme['base-subtitle']};
        }
        p {
            text-align: center;
            font-family: "Roboto", serif;
            font-size: 14px;
            color :${(props) => props.theme['base-label']};
            width: 240px;
        }
    }


`

export const PriceContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;

    form {
        display: flex;
        align-items: center;
        justify-content: space-around;
    }

    button {
        display: flex;
        align-items: center;
        justify-content: center;
        border: 0;
        background:${(props) => props.theme['purple']};
        border-radius: 5px;
        padding: 5px;
        cursor: pointer;
        &:disabled {
                        opacity: 0.7;
                        cursor:not-allowed;
					}
    }
    
    span {
            font-family: "Roboto", serif;
            font-size: 12px;
            color :${(props) => props.theme['base-text']};
            padding-left: 20px;
            margin-left: 10px;
            margin-right: 5px;
    }
   
    strong { 
            font-family: "Baloo 2", serif;
            font-size: 24px;
            font-weight: bold;
            color :${(props) => props.theme['base-text']};
        }
`

