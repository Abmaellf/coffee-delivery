import { ShoppingCart } from 'phosphor-react'
import cafeExpTra from '../../assets/CoffeeExTr.png'
import { Countdown, ItemContainer, PriceContainer } from './styles'


export function Item(){
    return(
        <ItemContainer>
            <header>
                <img src={cafeExpTra} alt='' />
                <span> TRADICIONAL </span>
                <h1>Expresso Tradicional </h1>
                <p> O tradicional café feito com água quente e grãos moídos</p>
            </header>

            <PriceContainer>

                <span> R$  </span> <strong> 9,90 </strong> 

                <Countdown> 
                    <button>  - </button> 
                      <p>1</p>  
                    <button> +  </button> 
                </Countdown>

                <button><ShoppingCart size={16} weight="fill" color='#FFFFFF'/> </button>
                
            </PriceContainer>
        </ItemContainer>
    )
}