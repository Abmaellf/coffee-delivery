import styled from "styled-components";

export const ProductContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;

    margin-left: 10rem;
    margin-right: 10rem;
    padding-bottom: 30px;

    

`

export const TitleProdutos = styled.div`
    font-family: "Baloo 2", serif;
    font-size: 2rem;
    font-weight: bold;
    color :${(props) => props.theme['base-subtitle']};
    margin-bottom: 54px;
`
export const ProductItemContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
   
    gap: 2rem;
    
`
