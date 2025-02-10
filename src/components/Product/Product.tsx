import { Item } from "../Item/Item"
import { ProductContainer, ProductItemContainer, TitleProdutos } from "./styles"

export function Product() {
    return(
        <ProductContainer>
            
            <TitleProdutos> Nossos cafés </TitleProdutos>

           <ProductItemContainer>
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
               
            </ProductItemContainer> 
        </ProductContainer>
    )
}