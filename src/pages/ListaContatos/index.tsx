
import { Menu } from "../../components/Menu";
import { Button, TBTr, THTh, THtr, Table, Td, TextButton } from "./styles";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface IContato {
  id: number;
  nome: string;
  email: string;
  telefone: string;
  cidade: string;
  mensage: string;
}

export function ListaContatos() {

  const [contato, setContato] = useState<Array<IContato>>([]);
  const navigate = useNavigate()

  useEffect(() => {
    axios
      .get("http://localhost:3000/contato")
      .then((response) => {
        // console.log(response.data);
        setContato(response.data);
      })
      .catch(() => {
        alert('Não foi possivel carregar os Contatos!')
      });
  }, []);
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
        <h2>Lista de Contatos</h2>
        <Table>
          <thead
          style={{
            background: '#969595'
          }}
          >
            <THtr>
              <THTh
                style={{
                  minWidth: 100,
                }}
              >
                Nome
              </THTh>
              <THTh>E-mail</THTh>
              <THTh>Cidade</THTh>
              <THTh>Ações</THTh>
            </THtr>
          </thead>
          <tbody>
            {contato.map((cont) => {
              return (
                <TBTr
                key={cont.id}
                >
                  <Td>{cont.nome}</Td>
                  <Td>{cont.email}</Td>
                  <Td>{cont.cidade}</Td>
                  <Td>
                    <Button type="button" bgColor="blue"
                    onClick={()=>{navigate('/detalhecontato/'+cont.id)}}
                    >
                      <TextButton>Detalhes</TextButton>
                    </Button>
                  </Td>
                </TBTr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </>
  );
}
