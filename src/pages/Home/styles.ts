import styled from "styled-components";

export const HomeContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: 10rem;
    margin-right: 10rem;
    margin-top: 92px;
`

export const TitleAndItensConatainer = styled.div`
    margin-bottom: 140px;
`
export const Title = styled.div`
    font-size: 20px;
    font-family: "Baloo 2", serif;
    font-optical-sizing: auto;
    font-style: normal;
    color: ${(props) => props.theme['base-title']};
    
`

export const QualityCoffee = styled.div`
    margin-top: 60px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap:3rem;

`
export const CompraEntrega = styled.div`
    display: flex;
    align-items: center;
    justify-content: left;
    flex-direction: column;
    gap:1rem;
    color: ${(props) => props.theme['base-text']};
`

 export const EmbalagemFresca = styled.div`
    display: flex;
    flex-direction: column;
    gap:1rem;
    color: ${(props) => props.theme['base-text']};
    border: 0;
`  
       

export const CarrinhoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: left;
    gap:1rem;

   
 `
 export const EmbalagemIntacto = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap:1rem;
`

export const IcoTImer = styled.div`
    background: ${(props) => props.theme['base-text']};  
    border-radius: 50%;
    padding: 10px;
    border:0;
    cursor: pointer;
`
export const IcoCoffe = styled.div`
    background: ${(props) => props.theme['base-text']};  
    border-radius: 50%;
    padding: 10px;
    border:0;
    cursor: pointer;
`

 export const EntregaRapidaContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap:1rem;
`
export const CafeFresquinho = styled.div`
    display: flex;
    align-items: center;
    justify-content: left;
    gap:1rem;
`
export const IconShoppingCart = styled.div`
 display: flex;
    align-items: center;
    justify-content: left;
    background: ${(props) => props.theme['yellow']}; 
    border-radius: 50%;
    padding: 10px;
    border:0;
    cursor: pointer;
`
export const IconPackge = styled.div`
    background: ${(props) => props.theme['yellow']}; 
    border-radius: 50%;
    padding: 10px;
    border:0;
    cursor: pointer;

`
export const ImageContainer = styled.div`
    width: 476px;
    height:360px;
    /* margin-right: 16px; */

`

