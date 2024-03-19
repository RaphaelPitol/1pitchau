import { useEffect, useState } from "react";
import { Card } from "../../components/Card";
import { Menu } from "../../components/Menu"
import axios, { AxiosError } from "axios";

interface Produto {
  id: number;
  nome: string;
  imagemp: string;
  promo: number;
  valor: number;
}

export const Home = () => {

  const[produto, setProduto] = useState<Array<Produto>>([])

  const imagem = 'https://raw.githubusercontent.com/profchines/imagens1Pitchau/main/Imagens1Pitchau/'

    useEffect(() => {
    axios.get('http://localhost:3000/produtos')
      .then((res)=>{
        setProduto(res.data)
      })
      .catch((err: AxiosError)=>{
        console.log(err)
      })
  }, []);

  return (
    <>
    <Menu/>
      <div style={{
        paddingLeft: '6%',
        paddingRight: '6%',
      }}>
        <h2 style={{textAlign: 'center'}}>Produtos em Destaque:</h2>
        <div
        style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}
        >
          {produto.map((prod)=>{
            return(
              <Card
              key={prod.id}
              id = {prod.id}
              nome = {prod.nome}
              img = {imagem+prod.imagemp}
              preco = {prod.valor}
              preco_promo = {prod.promo}
      
              />

            )
          })}

        </div>

      </div>
    </>
  );
};
