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

export const ProductContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;

    margin-left: 10rem;
    margin-right: 10rem;
    padding-bottom: 30px;
`
export const TitleAndCategory = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 54px;
    /* gap: 25rem; */
    width: 100%;
   
    
`

export const TitleProdutos = styled.div`
    font-family: "Baloo 2", serif;
    font-size: 2rem;
    font-weight: bold;
    color :${(props) => props.theme['base-subtitle']};
    
    /* margin-bottom: 54px; */
`

export const TypeCategoryContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    justify-items: stretch;
    gap:2rem;
    
    
    span {
        font-family: "Baloo 2", serif;
        font-size: 12px;
        /* font-weight: bold; */
        border-radius: 15px;
        color :${(props) => props.theme['yellow-dark']};
        border: solid 1px ${(props) => props.theme['yellow-dark']} ; 
        padding: 0 8px 0 8px;
    }
    
`

export const CoffeeList = styled.div`
    display: flex;
    margin-right: 1rem;
    margin-left: 10rem;
    flex-wrap: wrap;
   
    gap: 1rem;
    
`

