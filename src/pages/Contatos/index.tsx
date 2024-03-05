import { useState } from "react";
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



export function Contato() {
  const navigate = useNavigate();



  function home() {

    navigate("/" );
  }

  return (
    <>
      <DivForm>
        <h1>Pagina de contato</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic
          voluptate quis consequatur vero inventore quia placeat nobis,
          doloribus quo laudantium culpa voluptates dolores minima architecto id
          saepe ipsum alias perspiciatis.
        </p>
      </DivForm>
      <FormContainer>
        <FormGroup>
          <Label htmlFor="name">Nome:</Label>
          <Input
            type="text"
            id="name"
            name="name"

          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">Email:</Label>
          <Input
            type="email"
            id="email"
            name="email"

          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="phone">Telefone:</Label>
          <Input
            type="tel"
            id="phone"
            name="phone"

          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="cidade">Cidade:</Label>
          <Select
            id="cidade"
            name="cidade"

          >
            <option value="1">Altônia</option>
            <option value="2">Iporã</option>
            <option value="3">Perola</option>
            <option value="4">Umuarama</option>
          </Select>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="message">Mensagem:</Label>
          <TextArea id="message" name="message"
          ></TextArea>
        </FormGroup>
        <Button onClick={() => home()}>Enviar</Button>
      </FormContainer>
    </>
  );
}
