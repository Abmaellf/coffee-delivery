import { ShoppingCart } from 'phosphor-react'
import cafeExpTra from '../../assets/CoffeeExTr.png'
import { Countdown, ItemContainer, PriceContainer } from './styles'
import { useState } from 'react'


interface ItemProps {
    id: string,
    name: string,
    type: string,
    description: string,
    price: string,
    amount: number,
    image: string,
}

interface Car {
    id: string,
    itens: ItemProps
    quantidade: number
}

// const itens:ItemProps[] = [{
//         id: '0',
//         name : 'Expresso Tradicional',
//         type: 'TRADICIONAL',
//         description: 'O tradicional café feito com água quente e grãos moídos',
//         price: '9,90',
//         amount:1,
//         image: 'CoffeeExTr.png',
//     }, 
//     {
//         id: '1',
//         name : 'Expresso Americano',
//         type: 'TRADICIONAL',
//         description: 'Expresso diluído, menos intenso que o tradicional',
//         price: '10,90',
//         amount:1,
//         image: "CoffeeExpAme.png",
//     },
//     {
//         id: '2',
//         name : 'Expresso Cremoso',
//         type: 'TRADICIONAL',
//         description: 'Café expresso tradicional com espuma cremosa',
//         price: '15,90',
//         amount:1,
//         image: 'CoffeeExpCrem.png',
//     },
//     {
//         id: '3',
//         name : 'Expresso Gelado',
//         type: 'TRADICIONAL | GELADO',
//         description: 'Bebida preparada com café expresso e cubos de gelo',
//         price: '16,90',
//         amount:1,
//         image: 'CoffeeExpGel.png',
//     },
//     {
//         id: '4',
//         name : 'Expresso Gelado',
//         type: 'TRADICIONAL | COM LEITE',
//         description: 'Meio a meio de expresso tradicional com leite vaporizado',
//         price: '16,90',
//         amount:1,
//         image: 'CoffeeAndMilk.png',
//     },
//     {
//         id: '5',
//         name : 'Latter',
//         type: 'TRADICIONAL | COM LEITE',
//         description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
//         price: '16,90',
//         amount:1,
//         image: 'Latte.png',
//     },
//     {
//         id: '6',
//         name : 'Capuccino',
//         type: 'TRADICIONAL | COM LEITE',
//         description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
//         price: '17,90',
//         amount:1,
//         image: 'Capuccino.png',
//     },
//     {
//         id: '7',
//         name : 'Macchiato',
//         type: 'TRADICIONAL | COM LEITE',
//         description: 'Café expresso misturado com um pouco de leite quente e espuma',
//         price: '18,90',
//         amount:1,
//         image: 'Macchiato.png',
//     },
//     {
//         id: '8',
//         name : 'Mocaccino',
//         type: 'TRADICIONAL | COM LEITE',
//         description: 'Café expresso misturado com um pouco de leite quente e espuma',
//         price: '18,90',
//         amount:1,
//         image: 'Mocaccino.png',
//     },
//     {
//         id: '9',
//         name : 'Chocolate Quente',
//         type: 'ESPECIAL | COM LEITE',
//         description: 'Bebida feita com chocolate dissolvido no leite quente e café',
//         price: '18,90',
//         amount:1,
//         image: 'ChocolateQuente.png',
//     },
//     {
//         id: '10',
//         name : 'Cubano',
//         type: 'ESPECIAL | ALCOÓLICO | GELADO',
//         description: 'Drink gelado de café expresso com run, creme de leite e hortelã',
//         price: '18,90',
//         amount:1,
//         image: 'Cubano.png',
//     },
//     {
//         id: '11',
//         name : 'Havaiano',
//         type: 'ESPECIAL',
//         description: 'Bebida adocicada preparada com café e leite de coco',
//         price: '18,90',
//         amount:1,
//         image: 'Havaiano.png',
//     },
//     {
//         id: '12',
//         name : 'Árabe',
//         type: 'ESPECIAL',
//         description: 'Bebida adocicada preparada com grão de café especiarias',
//         price: '18,90',
//         amount:1,
//         image: 'Arabe.png',
//     },
//     {
//         id: '13',
//         name : 'Irlandês',
//         type: 'ESPECIAL',
//         description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
//         price: '18,90',
//         amount:1,
//         image: 'Irlandes.png',
//     },
// ]

interface countProps {
    id: string,
    qtd: number
}

export function Item(){

    const [cars, setCars] = useState<Car[]>([])

    const [acount, setAcount] = useState(1)

    function decrement(event: any){
        event.preventDefault()

        
        
    }

   

    function increment(){
        event.preventDefault()
        
        const qtd = event.target.value

        const res = Number(qtd) + 1

        setAcount(res)
        console.log(res)

        event.target.value = res
    }

    function newIncrementChange() {
        event.preventDefault()
       console.log( event.target.value)
    }

    function addItemCar() {
        const car =  event.target.value
        console.log(car)
        console.log('Item adicionado no carrinho')
        setCars([... cars, setCars()])
        event.preventDefault()
    }

    return(
        <>
           {
            itens.map(i => {
                return(
                    <ItemContainer>
                        
                            <header>
                                
                                <img src={i.image} alt='' />

                                <span> {i.type}</span>

                                <h1> {i.name} </h1>

                                <p>{i.description} </p>

                            </header>

                            <PriceContainer>
                            <form>
                                <span> R$  </span> <strong> {i.price} </strong> 

                                <Countdown > 
                                    <button name='decrementCuston' onClick={decrement}>  - </button> 

                                    <input
                                        id={i.id}
                                        name= 'input' 
                                        type='text' 
                                        value={acount}
                                        onChange={newIncrementChange}
                                    />  

                                    <button id={i.id} value={i.amount} onClick={increment}>  +  </button> 

                                </Countdown>

                                <button type='submit' onClick={addItemCar}> {/*disabled */}
                                    <ShoppingCart size={16} weight="fill" color='#FFFFFF'/> 
                                </button>
                                </form>
                            </PriceContainer>
                        
                    </ItemContainer>
                )
            }) 
           }
        </>
    )
}