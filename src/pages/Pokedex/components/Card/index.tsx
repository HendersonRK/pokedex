import { CardAction, CardBody, CardContainer, CardInfo, CardTypes, SparkleStyled } from "./styles";
import { useState } from "react"
import { Modal } from "../../../../components/Modal";//modal
import { BadgeType, getBadgeUrl } from "../../../../enum/badgeEnum";//botoes dos tipos

interface CardProps {
    sprite: string
    name: string
    type1: BadgeType
    type2: BadgeType
    spriteShiny: string
    abilityHidden: string
    abilityNormal: string
}

export function Card({ sprite, name, type1, type2, spriteShiny, abilityHidden, abilityNormal }: CardProps ) {
    const [isShiny, setIsShiny] = useState(false)
    
    return (
        <div>
            <CardContainer color={type1} $isShiny={isShiny}>
                <CardAction>  
                    <Modal color={type1} pokemon={{ name, sprite, spriteShiny, type1, type2, abilityHidden, abilityNormal }}/>                  
                    <SparkleStyled size={24} onClick={() => setIsShiny(!isShiny)} />
                </CardAction>
                <CardBody>
                     <img src={isShiny ? spriteShiny : sprite}/>
                     <CardInfo>
                     <span>{name.charAt(0).toLocaleUpperCase() + name.slice(1)}</span>
                        <CardTypes>                    
                            <img src={getBadgeUrl(type1)}/>                    
                            {type2 && <img src={getBadgeUrl(type2)}/>}                   
                        </CardTypes>
                     </CardInfo>
                </CardBody>           
            </CardContainer>            
        </div>
    )
}