import { useNavigate } from "react-router-dom";

export const Carrinho = () => {

  const navigate = useNavigate()

  function voltar (){
    navigate("/")
  }
  return (
    <>
      <h1 style={{background: 'blue'}}>Carrinho</h1>
      <button onClick={voltar}>Voltar</button>

    </>
  );
};
