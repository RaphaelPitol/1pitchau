import { useNavigate, useParams } from "react-router-dom";
import { Menu } from "../../components/Menu";
import { Button, Col4, Col6, Row, TextButton, Input } from "./styles";
import { SyntheticEvent, useCallback, useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import { ICarrinho } from "../../@types/interfaces";
import { formateValor } from "../../service/format";

interface Produto {
  id: number,
  nome: string,
  imagemg: string,
  imagemp: string,
  promo: number,
  promoNumber: number,
  valor: number,
  id_categoria: number,
}


export const Product = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const[dataProduct, setDataProduct] = useState<Produto>()


  const imagem =
  "https://raw.githubusercontent.com/profchines/imagens1Pitchau/main/Imagens1Pitchau/";

  useEffect(() => {
    // const fetchData = async () => {
    //   try {
    //     const response = await axios.get(`http://localhost:3000/produtos/${id}`);
    //     setDataProduct(response.data);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };

    // fetchData();
    axios.get('http://localhost:3000/produtos?id='+id)
    .then((response)=>{
      setDataProduct(response.data[0])
    })
    .catch((err)=>{
      console.log(err)
    })
  }, [id]);

  //SyntheticEvent serve para tipar os dados do formulario
  const onSubmit = useCallback((e: SyntheticEvent)=>{
    //preventDefault não deixa atualizar a pagina com formulario
    e.preventDefault();
    const target = e.target as typeof e.target & {
      quantidade:{value: number}
    }

    if(dataProduct){
      let qtd = target.quantidade.value
      if(qtd > 0){
        let objProduto = {
          ...dataProduct,
          quantidade: qtd,
          total: Number(dataProduct.promo) * qtd
        }

        // console.log(objProduto)
        //localStorage é uma memoria do navegador
        //o getItem traz alguma coisa do localStorage com o nome @1pitchau:carrinho
        let lsCarrinho = localStorage.getItem('@1pitchau:carrinho')

        let carrinho: Array<ICarrinho> = []

        if(typeof lsCarrinho === 'string'){
          //json.parse transforma em os dados do localStorage em objeto
          carrinho = JSON.parse(lsCarrinho)
        }


        if(carrinho.length > 0){
          carrinho.push(objProduto)
          //stringify converte o array em string ou Json
          localStorage.setItem('@1pitchau:carrinho', JSON.stringify(carrinho))
        }else{
          localStorage.setItem('@1pitchau:carrinho', JSON.stringify([objProduto]))
        }
        navigate('/carrinho')
      }
    }
  },[dataProduct])


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
          {

      dataProduct ?

      <>
          <h1>Produto</h1>
          <Row>
            <Col4>
              <img
                src={imagem + dataProduct.imagemg}
                alt=""
                style={{
                  width: "100%",
                }}
              />
            </Col4>

            <Col6>
            <h3>{dataProduct.nome}</h3>
            <p style={{
              textDecoration: 'line-through'
            }}>R$ {formateValor.format(dataProduct.valor)}</p>
            <p style={{
              fontWeight: 'bold',
              color: 'red'
            }}>R$ {formateValor.format(dataProduct.promo)}</p>

            <form action=""
            onSubmit={onSubmit}
            >
              <Input
                type="number"
                name="quantidade"
                defaultValue={1}
                min="1"
                required
              />
              <Button
              type="submit"
              >
                <TextButton>
                  Adicionar ao Carrinho
                </TextButton>
              </Button>
            </form>
            </Col6>
          </Row>
        </>
      :
       <h2>Nenhum Produto encontrado!</h2>
    }

      </div>
    </>
  );
};
