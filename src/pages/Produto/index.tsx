import { useNavigate } from "react-router-dom";

export function Produto() {

  const navigate = useNavigate()

  function voltar (){
    navigate("/")
  }
  return (
    <>
      <h1>Produtos</h1>
      <button onClick={voltar}>Voltar</button>
    </>
  );
}
