import { useParams } from "react-router-dom";
import { Menu } from "../../components/Menu";

export function DetalheContato(){
  const {id} = useParams()

  return(
    <>
    <Menu/>
    <h1>{id}</h1>
    </>
  )
}