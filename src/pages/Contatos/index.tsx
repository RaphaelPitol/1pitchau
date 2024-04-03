import { useEffect, useState } from "react";
import {
  FormContainer,
  FormGroup,
  Label,
  Input,
  Select,
  TextArea,
  Button,
  DivForm,
} from "./styles";
import { useNavigate } from "react-router-dom";
import { Menu } from "../../components/Menu";
import axios from "axios";

interface TypeContato {
  nome: string;
  email: string;
  telefone: string;
  cidade: string;
  mensage: string;
}
interface Cidade {
  id: number;
  nome: string
}

export function Contato() {
  const navigate = useNavigate();
  const [cidades, setCidades] = useState<Array<Cidade>>([]);
  const [contato, setContato] = useState<TypeContato>({
    nome: "",
    email: "",
    telefone: "",
    cidade: "",
    mensage: "",
  });

  async function createContato(params: TypeContato) {
    await axios.post("http://localhost:3000/contato/", params);
    navigate("/listacontato");
  }


  useEffect(() => {
    async function fetchCidades() {
      try {
        const response = await axios.get(
          "https://servicodados.ibge.gov.br/api/v1/localidades/estados/PR/municipios"
        );
        setCidades(response.data);
      } catch (error) {
        alert("Erro ao buscar cidades:" + error);
      }
    }

    fetchCidades();
  }, []);

  return (
    <>
      <Menu />
      <DivForm>
        <h1>Pagina de contato</h1>
      </DivForm>
      <FormContainer>
        <FormGroup>
          <Label htmlFor="name">Nome:</Label>
          <Input
            type="text"
            id="name"
            name="name"
            onChange={(event) =>
              setContato({ ...contato, nome: event.target.value })
            }
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">Email:</Label>
          <Input
            type="email"
            id="email"
            name="email"
            onChange={(event) =>
              setContato({ ...contato, email: event.target.value })
            }
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="phone">Telefone:</Label>
          <Input
            type="tel"
            id="phone"
            name="phone"
            onChange={(event) =>
              setContato({ ...contato, telefone: event.target.value })
            }
          />
        </FormGroup>
        <FormGroup>
        <Label htmlFor="cidade">Cidade:</Label>
        <Select
          id="cidade"
          name="cidade"
          onChange={(event) => setContato({ ...contato, cidade: event.target.value })}
        >
          {cidades.map((cidade) => (
            <option key={cidade.id} value={cidade.nome}>
              {cidade.nome}
            </option>
          ))}
        </Select>
      </FormGroup>
        <FormGroup>
          <Label htmlFor="message">Mensagem:</Label>
          <TextArea
            id="message"
            name="message"
            onChange={(event) =>
              setContato({ ...contato, mensage: event.target.value })
            }
          ></TextArea>
        </FormGroup>
        <Button onClick={() => createContato(contato)}>Enviar</Button>
      </FormContainer>
    </>
  );
}
