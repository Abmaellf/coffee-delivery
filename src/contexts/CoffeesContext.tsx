import { createContext, ReactNode, useState } from "react"

type Props = {
    coffee: {
     id: string,
     title: string,
     description: string,
     tags: string[],
     price: number,
     image: string
    }
 }

// interface  Coffee {
interface Coffee {
        id: string,
        title: string,
        description: string,
        tags: string[],
        price: number,
        image: string
       }
// //    }


interface CardContextType {
    cart: Props[]
    quantity: number
    isItemAdded: boolean
    setIsItemAdded:(isItemAdded: boolean) => void
    handleDecrement: ()=> void
    handleIncrement:()=> void
    handleCreateNewCard:(coffee: Coffee) => void
}

export const CardContext = createContext({} as CardContextType)

interface CoffeesContextProviderProps {
    children: ReactNode
}
export function CoffeesContextProvider({ children }: CoffeesContextProviderProps) {

    const [quantity, setQuantity] = useState(1)
    const [cart, setCart ] = useState<Props[]>([])
    const [isItemAdded, setIsItemAdded] = useState(false)
   

    function handleIncrement() {
            setQuantity( (state) => state + 1)
    }
    
    function handleDecrement() {
        if( quantity > 1) setQuantity( (state) => state - 1)
    }

    function handleCreateNewCard(coffee : Coffee) {
        
            setIsItemAdded(true);

            const newCart : Props = {
                coffee: {
                    id: coffee.id,
                    title: coffee.title,
                    description: coffee.description,
                    tags: coffee.tags,
                    price: coffee.price,
                    image: coffee.image
                }
        }
        setCart((state)=> [...state, newCart] )
        cart.map((c) => {
            console.log(c)
        })
    }
    return(
        <CardContext.Provider value={{
            cart,
            quantity, 
            isItemAdded,
            setIsItemAdded,
            handleDecrement, 
            handleIncrement,
            handleCreateNewCard
    }} >
        {children}
     </CardContext.Provider>
    )
        
}