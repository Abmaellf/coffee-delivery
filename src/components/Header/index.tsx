import { CarAndRegioContainer, CarContainer, HeaderContainer, LogoContainer, RegionStyle } from "./styles";
import logo from '../../assets/Logo.png'
import icon from '../../assets/Icon.png'
import { MapPin, ShoppingCart } from "phosphor-react";

export function Header() {
    return(
        <HeaderContainer>
            <LogoContainer>
                <img src={logo} alt="" />
            </LogoContainer>

            <CarAndRegioContainer>
                <RegionStyle>   
                   <button><MapPin size={22} weight="fill" color="#8047F8"  />  </button>         
                    <span>Vázea Grande, MT</span>
                </RegionStyle>
                
                <CarContainer>
                <button><ShoppingCart size={22} weight="fill" color='#C47F17'   /> </button>
                </CarContainer>
                

                
            </CarAndRegioContainer>
        </HeaderContainer>
    )
}