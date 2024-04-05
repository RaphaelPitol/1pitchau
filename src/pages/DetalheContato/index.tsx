import { useParams } from "react-router-dom";
import { Menu } from "../../components/Menu";
import { useEffect, useState } from "react";
import axios from "axios";
import { ContatoDetalhesContainer, DetalhesItem } from "./styles";

interface IContato {
  nome: string;
  email: string;
  telefone: string;
  cidade: string;
  mensage: string;
}

export function DetalheContato(){
  const {id} = useParams()
  const[contato, setContato] = useState<IContato>()

  useEffect(()=>{
    axios.get('http://localhost:3000/contato?id=' + id)
    .then((res)=>{
      console.log(res.data)
      setContato(res.data[0])

    })
    .catch((err)=>{
        console.log(err)
    })
  },[id])

  return(
    <>
    <Menu/>
    <h1
    style={{textAlign: 'center', marginTop: 20}}
    >Detalhes do Contato</h1>
    {
      contato ?
      <ContatoDetalhesContainer>
      <DetalhesItem>
        <h3>Nome:</h3>
        <p>{contato.nome}</p>
      </DetalhesItem>
      <DetalhesItem>
        <h3>E-mail:</h3>
        <p>{contato.email}</p>
      </DetalhesItem>
      <DetalhesItem>
        <h3>Telefone:</h3>
        <p>{contato.telefone}</p>
      </DetalhesItem>
      <DetalhesItem>
        <h3>Cidade:</h3>
        <p>{contato.cidade}</p>
      </DetalhesItem>
      <DetalhesItem>
        <h3>Mensagem:</h3>
        <p>{contato.mensage}</p>
      </DetalhesItem>
    </ContatoDetalhesContainer>
    :
    <h1>Nenhum Detalhe encontrado!</h1>
    }

    </>
  )
}