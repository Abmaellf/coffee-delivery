import { ShoppingCart } from "phosphor-react";
import { Countdown, ItemContainer, PriceContainer} from "./styles";
import  { useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from 'zod';
import { useState } from "react";

interface CarCoffee {
    id: string,
    title: string,
    description: string,
    tags: string[],
    price: number,
    image: string
}

const countCoffeeItemSchema = zod.object({
    count: zod.number().min(1),
})

type NewCardFormData = zod.infer<typeof countCoffeeItemSchema >

export function Card(coffee: coffeeProps) {

    // const [cart, setCart ] = useState<CarCoffee[]>([])
    const [count, setCount ] = useState(1)


    const { register, handleSubmit} = useForm<NewCardFormData>({
        resolver: zodResolver(countCoffeeItemSchema),
         defaultValues: {
            count: 1
         }
         }
    )

    function handleCreateNewCard(data: NewCardFormData) {
        event.preventDefault()
        console.log(data.count)
    }

    function handleIncrement() {
        event.preventDefault()

        setCount( count + 1)
        console.log(count)
    }

    function handleDecrement() {
        event.preventDefault()

        setCount( count - 1)
        console.log(count)
    }

    return(
        <>
        <ItemContainer>
            <header>
                <img src={coffee.image} alt='' />
                <span> { coffee.tags } </span>
                <h1> {coffee.title}</h1>
                <p> { coffee.description} </p>
            </header>

            <PriceContainer>
                <form  onSubmit={handleSubmit(handleCreateNewCard)} action=""> 
                    <span> R$  </span> <strong> { coffee.price } </strong> 
                    <Countdown > 
                        <button onClick={handleSubmit(handleDecrement)} >  - </button> 
                        {/* <input type="button" value="-"/> */}
                        <input
                            key="count" 
                            type="text"
                            id="count" 
                            value={count}
                            max={2}
                            size={2} 
                            {...register('count')}  
                                                     
                        />  
                        <button onClick={handleSubmit(handleIncrement)}>  +  </button> 
                    </Countdown>

                    <button type="submit"> {/*disabled */}
                        <ShoppingCart size={16} weight="fill" color='#FFFFFF'/> 
                    </button>
                </form>
            </PriceContainer>
        </ItemContainer>
        </>
    )
}