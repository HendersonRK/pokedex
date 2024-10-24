import { BannerContainer, BannerTextContainer } from "./styles";
import banner from '../../assets/banner.png'

export function Home() {
    return(
        <>
           <BannerContainer>
            <BannerTextContainer>
                <h2>Avance em sua jornada para se tornar um Mestre Pokémon, adicione seus pokémon favoritos a Pokedex</h2>
            </BannerTextContainer> 
            <img src={banner} alt="" />         
           </BannerContainer>
        </>
    )
}