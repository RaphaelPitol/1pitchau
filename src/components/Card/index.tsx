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
import { formateValor } from "../../service/format";

interface Produto {
  id?: number;
  nome?: string;
  img?: string;
  preco_promo: number;
  preco: number;
}


//componente que recebe parametros por propriedade
export const Card = (props: Produto) => {

  const{id, nome, img, preco_promo, preco} = props;
  const navigate = useNavigate()

  return (
    <>

    <CardBody key={id}>
        <img src={img} alt="" />
        <Title>{nome}</Title>
        <TitlePreco>{formateValor.format(preco)}</TitlePreco>
        <TitlePromo>{formateValor.format(preco_promo)}</TitlePromo>
        <Button onClick={()=>{navigate('product/'+id)}}>
          <TextButton>Detalhes</TextButton>
        </Button>

      </CardBody>


    </>
  );
}
