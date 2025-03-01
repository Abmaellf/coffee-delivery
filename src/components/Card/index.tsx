import { Check, ShoppingCart } from "phosphor-react";
import { ItemContainer, PriceContainer} from "./styles";
import {useContext,  useEffect} from "react";
import { QuantityInput } from "../Form/QuantityInput";
import { CardContext } from "../../contexts/CoffeesContext";


  interface Coffee {
     coffee: {
        id: string,
        title: string,
        description: string,
        tags: string[],
        price: number,
        image: string
     }
    }
 
export function Card( {coffee} : Coffee ){

   const {  handleCreateNewCard, isItemAdded, setIsItemAdded } = useContext(CardContext)
   
    
// O isItemAdded recebe true quando adiciona um item, esse useEffect troca para false apos 1 segundo
// Vamos levar esse useEffect e criar uma função aqui para   chamar o setIsItemAdded
useEffect(()=> {

        let timeout: number 
        
        if(isItemAdded) {

            timeout = setTimeout(()=>{
                setIsItemAdded(false)
            }, 1000)
        }
        return () => {
            if(timeout) {
                clearTimeout(timeout)
            }
        }
   }, [ isItemAdded ])

    return(
        <>
            <ItemContainer>
                <header>
                    <img src={ coffee.image} alt='' />
                    <span> { coffee.tags } </span>
                    <h1> { coffee.title }</h1>
                    <p> { coffee.description } </p>
                </header>

                <PriceContainer>
                    
                        <span> R$  </span> <strong > { coffee.price } </strong> 

                        <QuantityInput />

                        <button disabled={isItemAdded} onClick={handleCreateNewCard}> {/*disabled */}
                            {isItemAdded ? (
                                <Check 
                                    weight="fill"
                                    size={22}
                                    color='#FFFFFF'
                                /> 
                            ) : (
                                <ShoppingCart size={16} weight="fill" color='#FFFFFF'/> 
                            )}
                        </button>
                </PriceContainer>
            </ItemContainer>
        </>
    )
}