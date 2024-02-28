import { useNavigate } from "react-router-dom";

export const Home = () => {

  const navigate = useNavigate();

  function home (){
    navigate("/carrinho")
  }
  function produto (){
    navigate("/produto")
  }
  function contato (){
    navigate("/contato")
  }

  return (
    <>
      <h1>Home</h1>
      <button onClick={home}>Carrinho</button>
      <button onClick={produto}>Produtos</button>
      <button onClick={contato}>Contato</button>

    </>
  );
};
