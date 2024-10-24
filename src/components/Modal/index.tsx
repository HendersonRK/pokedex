import { useState } from "react";
import { EyeStyled, ModalContainer, ModalContent, XStyled } from "./styles";
import { BadgeType } from "../../enum/badgeEnum";
import { GraficChart } from "../GraficChart";

interface ModalProps {
    color: BadgeType;
    pokemon:{
        name: string
        sprite: string
        spriteShiny: string
        type1: BadgeType
        type2: BadgeType
        abilityHidden: string
        abilityNormal: string;
    }
}

export function Modal({ color, pokemon }: ModalProps){
    const [isOpen, setIsOpen] = useState(false);
    return(
        <>
            <EyeStyled size={24} onClick={() => setIsOpen(!isOpen)}/>
                {isOpen && (
                    <ModalContainer>
                        <ModalContent color={color}>
                            <XStyled onClick={()=>setIsOpen(!isOpen)}/>
                            <h2>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h2>
                            <img src={pokemon.sprite}/>
                            <img src={pokemon.spriteShiny}/>
                            <div>
                                <span>Habilidade:</span>
                                <p>{pokemon.abilityHidden}</p>
                                <span>Especial:</span>
                                <p>{pokemon.abilityNormal}</p>
                            </div>
                            <GraficChart/>
                        </ModalContent>
                    </ModalContainer>
                )}
        </>
    )
}