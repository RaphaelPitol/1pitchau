import { useEffect, useState } from "react";
import {
  CardBody,
  Title,
  TitlePreco,
  Button,
  TextButton,
  TitlePromo,
} from "./styles";
import { useNavigate } from "react-router-dom";

interface Produto {
  id?: number;
  nome?: string;
  img?: string;
  preco_promo: number;
  preco: number;
}

const formtateValor = new Intl.NumberFormat('pt-BR',{style:'currency', currency: 'BRL',})

//componente que recebe parametros por propriedade
export const Card = (props: Produto) => {

  const{id, nome, img, preco_promo, preco} = props;
  const navigate = useNavigate()

  function modal(p : any){
   navigate('product/'+p)
  }


  return (
    <>

    <CardBody key={id}>
        <img src={img} alt="" />
        <Title>{nome}</Title>
        <TitlePreco>{formtateValor.format(preco)}</TitlePreco>
        <TitlePromo>{formtateValor.format(preco_promo)}</TitlePromo>
        <Button onClick={()=>{modal(id)}}>
          <TextButton>Detalhes</TextButton>
        </Button>

      </CardBody>


    </>
  );
}
