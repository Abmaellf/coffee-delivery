import {  CafeFresquinho, CarrinhoContainer, CompraEntrega,  EmbalagemFresca,  EmbalagemIntacto, EntregaRapidaContainer, HomeContainer, IcoCoffe, IconPackge, IconShoppingCart, IcoTImer, ImageContainer,  QualityCoffee, Title, TitleAndItensConatainer } from "./styles";
import logoCoffee from '../../assets/logoCafe.png'
import { Coffee, Package, ShoppingCart, Timer, } from "phosphor-react";
import { Product } from "../../components/Product/Product";

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

        <Product />
    </>
    )
}