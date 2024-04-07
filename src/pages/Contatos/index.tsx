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
import { useNavigate, useParams } from "react-router-dom";
import { Menu } from "../../components/Menu";
import axios from "axios";

interface TypeContato {
  id?: number;
  nome: string;
  email: string;
  telefone: string;
  cidade: string;
  mensage: string;
}
interface Cidade {
  id: number;
  nome: string;
}

export function Contato() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [cidades, setCidades] = useState<Array<Cidade>>([]);
  const [contato, setContato] = useState<TypeContato>({
    nome: "",
    email: "",
    telefone: "",
    cidade: "",
    mensage: "",
  });

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

    if (id) {
      axios
        .get(`http://localhost:3000/contato/${id}`)
        .then((resp) => {
          setContato(resp.data);
        })
        .catch(() => {
          console.log("Erro no Id");
        });
    }
  }, [id]);

  async function createUpdateContato() {
    if (id) {
      await axios.put(`http://localhost:3000/contato/${id}`, contato);
      // console.log(contato)
      alert("Editado com Sucesso!");
    } else {
      await axios.post("http://localhost:3000/contato/", contato);
      // console.log(contato)
      alert("Criado com Sucesso!");
    }
    navigate("/listacontato");
  }

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
            value={contato.nome}
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
            value={contato.email}
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
            value={contato.telefone}
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
            value={contato.cidade}
            onChange={(event) =>
              setContato({ ...contato, cidade: event.target.value })
            }
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
            value={contato.mensage}
            onChange={(event) =>
              setContato({ ...contato, mensage: event.target.value })
            }
          ></TextArea>
        </FormGroup>
        <Button onClick={createUpdateContato}>Enviar</Button>
      </FormContainer>
    </>
  );
}
