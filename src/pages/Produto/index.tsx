import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Button,
  Container,
  Title,
  Image,
  Price,
  Promo,
  Original,
  QuantityContainer,
  QuantityInput,
} from "./styles";
import { Menu } from "../../components/Menu";

interface Produto {
  id: number;
  nome: string;
  imagemp: string;
  promo: number;
  valor: number;
}

const formtateValor = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

export function Produto() {
  const { id } = useParams();
  const [dataProduto, setDataProduto] = useState<Produto>();
  const [quantidade, setQuantidade] = useState<number>(1);

  const navigate = useNavigate();

  const imagem =
    "https://raw.githubusercontent.com/profchines/imagens1Pitchau/main/Imagens1Pitchau/";

  function voltar() {
    navigate("/");
  }

  const decrementarQuantidade = () => {
    if (quantidade > 1) {
      setQuantidade(quantidade - 1);
    }
  };

  const incrementarQuantidade = () => {
    setQuantidade(quantidade + 1);
  };

  useEffect(() => {
    axios
      .get("http://localhost:3000/produtos/" + id)
      .then((res) => {
        setDataProduto(res.data);
      })
      .catch((err: AxiosError) => {
        console.log(err);
      });
  }, []);
  return (
    <>
    <Menu/>
      <Container>
        <Title>{dataProduto?.nome}</Title>
        <Image src={imagem + dataProduto?.imagemp} alt="" />
        <Price>
          Preço Promocional:{" "}
          <Promo>
            {dataProduto?.promo !== undefined
              ? formtateValor.format(dataProduto?.promo)
              : ""}
          </Promo>
        </Price>
        <Price>
          Preço Original:{" "}
          <Original>
            {dataProduto?.valor !== undefined
              ? formtateValor.format(dataProduto?.valor)
              : ""}
          </Original>
        </Price>
        <QuantityContainer>
          <Button onClick={decrementarQuantidade}>-</Button>
          <QuantityInput type="number" value={quantidade} readOnly />
          <Button onClick={incrementarQuantidade}>+</Button>
        </QuantityContainer>

        <Button onClick={voltar}>Comprar</Button>
      </Container>
    </>
  );
}
