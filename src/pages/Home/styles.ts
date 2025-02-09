import styled from "styled-components";

export const HomeContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: 10rem;
    margin-right: 10rem;
    /* gap: 12rem; */
    margin-top: 92px;

    
`

export const TitleAndItensConatainer = styled.div`

`
export const Title = styled.div`
    font-size: 20px;
    font-family: "Baloo 2", serif;
    font-optical-sizing: auto;
    font-style: normal;
    color: ${(props) => props.theme['base-title']};
    
`

export const QualityCoffee = styled.div`
   margin-top: 66px;
   display: flex;
   gap:1rem;
   
    
`
export const CompraEntrega = styled.div`
    display: flex;
    flex-direction: column;
    /* width: 30px; */
    
    gap:1rem;
    font-family: Roboto;
    font-size: 1rem;
    color: ${(props) => props.theme['base-text']};
    
    div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
    }
    
    button {
        background: ${(props) => props.theme['base-text']}; 
        border-radius: 50%;
        padding: 10px;
        border:0;
        cursor: pointer;
    }

    button {
        background: ${(props) => props.theme['yellow-dark']}; 
        border-radius: 50%;
        padding-left: 10px;
        border:0;
        cursor: pointer;
        
    }
`


export const EmbalagemFresca  = styled.div`
     display: flex;
     flex-direction: column;
     
     gap:1rem;
     font-family: Roboto;
     font-size: 1rem;
     color: ${(props) => props.theme['base-text']};

     div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
    }
    
     button {
        background: ${(props) => props.theme['yellow']}; 
        border-radius: 50%;
        padding: 10px;
        border:0;
        cursor: pointer;
     }

     button {
        background: ${(props) => props.theme['purple']}; 
        border-radius: 50%;
        padding: 10px;
        border:0;

     }
`
export const ImageContainer = styled.div`
width: 476px;
height:360px;
/* margin-right: 16px; */

`

