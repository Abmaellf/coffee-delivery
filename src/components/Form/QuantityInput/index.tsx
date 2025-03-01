import { useContext } from "react";
import { Countdown } from "./styles";
import { CardContext } from "../../../contexts/CoffeesContext";

/*NÃO VAMOS MAIS PRECISAR POR CAUSA DO CONTEXTO*/
// interface Props {
//     quantity: number,
//     handleDecrement: ()=> void;
//     handleIncrement: ()=> void;
// }

// Esses parametros estavam sendo passado pelo component  "{quantity, handleDecrement, handleIncrement}: Props"
// Também não necessita pois esta no contexto
export function QuantityInput() {

    
    const {quantity, handleDecrement, handleIncrement } = useContext(CardContext)

    return(
        <>
            <Countdown > 
                <button onClick={handleDecrement}>  - </button> 
                <input
                    type="text"
                    value={quantity}
                    max={2}
                    size={2} 
                />  
                <button onClick={handleIncrement}>  +  </button> 
            </Countdown>
        </>
    )
}