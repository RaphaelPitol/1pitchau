import { useParams } from "react-router-dom";
import { Menu } from "../../components/Menu";
import { Button, Col4, Col6, Row, TextButton, Input } from "./styles";
import { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";

interface Produto {
  id: number,
  nome: string,
  imagemg: string,
  promo: number,
  valor: number
}


const formtateValor = new Intl.NumberFormat('pt-BR',{style:'currency', currency: 'BRL',})

export const Product = () => {
  const { id } = useParams();
  const[dataProduct, setDataProduct] = useState<Produto | null>(null)


  const imagem =
  "https://raw.githubusercontent.com/profchines/imagens1Pitchau/main/Imagens1Pitchau/";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/produtos/${id}`);
        setDataProduct(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [id]);



  return (
    <>
      <Menu />
      <div
        style={{
          paddingLeft: "6%",
          paddingRight: "6%",
          marginTop: 20,
          marginBottom: 40,
        }}
      >
        <>
          <h1>Produto</h1>
          <Row>
            <Col4>
              <img
                src={imagem + dataProduct?.imagemg}
                alt=""
                style={{
                  width: "100%",
                }}
              />
            </Col4>

            <Col6>
            <h3>{dataProduct?.nome}</h3>
            <p style={{
              textDecoration: 'line-through'
            }}>R$ {dataProduct && dataProduct.valor ? formtateValor.format(dataProduct.valor) : ''}</p>
            <p style={{
              fontWeight: 'bold',
              color: 'red'
            }}>R$ {dataProduct && dataProduct.promo ? formtateValor.format(dataProduct.promo) : ''}</p>

            <form action="">
              <Input
                type="number"
                name="quantidade"
                defaultValue={1}
                min="1"
                required
              />
              <Button>
                <TextButton>
                  Adicionar ao Carrinho
                </TextButton>
              </Button>
            </form>
            </Col6>
          </Row>
        </>
      </div>
    </>
  );
};
