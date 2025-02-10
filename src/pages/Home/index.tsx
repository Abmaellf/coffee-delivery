import {  CompraEntrega, EmbalagemFresca, HomeContainer, ImageContainer,  QualityCoffee, Title, TitleAndItensConatainer } from "./styles";
import logoCoffee from '../../assets/logoCafe.png'
import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";

export function Home() {
    return(
        <HomeContainer>
            <TitleAndItensConatainer>
                <Title>
                    <h1>Encontre o café perfeito <p>para qualquer hora do dia </p></h1>
                    <span>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</span>
                </Title>
                
                <QualityCoffee>

                    <CompraEntrega>
                        <div><button><ShoppingCart size={22} weight="fill"  color='#FFFFFF' /></button><span>Compra simples e segura</span></div>
                        <div><button><Timer size={22} weight="fill"  color='#FFFFFF'/></button><span>Entrega rápida e rastreada</span></div>
                    </CompraEntrega>
                    
                    <EmbalagemFresca>
                        <div><button><Package size={22} weight="fill"  color='#FFFFFF' /></button><span>Embalagem mantém o café intacto</span></div>
                        <div><button><Coffee size={22} weight="fill"  color='#FFFFFF' /></button><span>O café chega fresquinho até você</span></div>
                       
                    </EmbalagemFresca>

                </QualityCoffee>

            </TitleAndItensConatainer>

            <ImageContainer >
                <img src={logoCoffee}/>
            </ImageContainer>
        </HomeContainer>
    )
}