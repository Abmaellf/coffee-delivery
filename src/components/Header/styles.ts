import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

    background: var('base-text');
    margin-left: 10rem;
    margin-right: 10rem;
`

export const LogoContainer = styled.div`
  width: 5.3rem;
  height: 2.5rem;
  margin-top: 32px;
`

export const CarAndRegioContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 32px;
`

export const RegionStyle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${(props) => props.theme['purple-light']};
    /* padding: 10px; */
    border-radius: 8px;
    margin: 10px;
    
    button {
        margin: 8px;
        border: 0;
    }
    
    
    span {
        font-family: Roboto;
        margin: 10px 8px;
        color:  ${(props) => props.theme['purple-dark']};
    }

`
export const CarContainer = styled.div`
    background: ${(props) => props.theme['yellow-light']};
    border-radius: 8px;
    button {
        background: transparent;
            margin: 8px;
            border: 0;
        }
    
`