import {  
    CafeFresquinho, 
    CarrinhoContainer, 
    CoffeeList, 
    CompraEntrega,  
    EmbalagemFresca, 
    EmbalagemIntacto, 
    EntregaRapidaContainer, 
    HomeContainer, 
    IcoCoffe, 
    IconPackge, 
    IconShoppingCart, 
    IcoTImer, 
    ImageContainer, 
    ProductContainer,  
    QualityCoffee, 
    Title, 
    TitleAndCategory, 
    TitleAndItensConatainer, 
    TitleProdutos, 
    TypeCategoryContainer } 
from "./styles";

import logoCoffee from '../../assets/logoCafe.png'
import { Coffee, Package, ShoppingCart, Timer, } from "phosphor-react";
import { coffees }  from '../../../data.json'
import { Card } from "../../components/Card";

export function Home() {
    return(
        <>
        <HomeContainer>
            <TitleAndItensConatainer>
                <Title>
                    <h1>Encontre o café perfeito <p>para qualquer hora do dia </p></h1>
                    <span>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</span>
                </Title>

                 <QualityCoffee>

                    <CompraEntrega>
                        <CarrinhoContainer>
                            <IconShoppingCart><ShoppingCart size={22} weight="fill"  color='#FFFFFF' /></IconShoppingCart>
                            <div>Compra simples e segura</div>
                        </CarrinhoContainer>

                        <EntregaRapidaContainer>
                            <IcoTImer><Timer size={22} weight="fill"  color='#FFFFFF'/></IcoTImer>
                            <div>Entrega rápida e rastreada </div>
                        </EntregaRapidaContainer>
                        
                    </CompraEntrega>

                    <EmbalagemFresca>
                        <EmbalagemIntacto>
                            <IconPackge><Package size={22} weight="fill"  color='#FFFFFF' /></IconPackge>
                                <span>Embalagem mantém o café intacto</span>
                        </EmbalagemIntacto>

                        <CafeFresquinho>
                            <IcoCoffe> <Coffee size={22} weight="fill"  color='#FFFFFF' /> </IcoCoffe>
                            <span>O café chega fresquinho até você</span>
                        </CafeFresquinho>
                    
                    </EmbalagemFresca> 

                </QualityCoffee>

            </TitleAndItensConatainer>

            <ImageContainer >
                <img src={logoCoffee}/>
            </ImageContainer>

        </HomeContainer>
        
        <ProductContainer>
                            
            <TitleAndCategory>
                <TitleProdutos> Nossos cafés </TitleProdutos>
                <TypeCategoryContainer>
                    <span> TRADICIONAL </span>
                    <span> ESPECIAL </span>
                    <span> COM LEITE  </span>
                    <span> ALCOÓLICO </span>
                    <span> GELADO </span>
                </TypeCategoryContainer>
            </TitleAndCategory>
        </ProductContainer>

        <CoffeeList>
            {
                coffees.map((coffee)=> {
                  return(
                    <Card 
                        key={coffee.id}
                        id={coffee.id}
                        image={coffee.image}
                        tags={ coffee.tags}
                        title= {coffee.title}
                        description={coffee.description}
                        price={coffee.price}
                    /> 
                  )
                })
            }
        </CoffeeList>
    </>
    )
}