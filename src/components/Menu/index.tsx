import { useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import {
  LeftContainer,
  NavbarContainer,
  NavbarExtendedContainer,
  NavbarInnerContainer,
  NavbarLink,
  NavbarLinkContainer,
  NavbarLinkExtended,
  OpenLinksButton,
  RightContainer,
} from "./styles";
import axios, { AxiosError } from "axios";

interface IDataMenu {
  id: number;
  categoria: string;
}



export const Menu = () => {
  const [extendNavbar, setExtendNavbar] = useState(false);
  //diz que IDataMenu é um array
  const [dataMenu, setDataMenu] = useState<Array<IDataMenu>>([]);


  useEffect(() => {
    axios.get('http://localhost:3000/categorias')
      .then((res)=>{
        setDataMenu(res.data)
      })
      .catch((err: AxiosError)=>{
        console.log(err)
      })
  }, []);


  return (
    <>
      {/* //extendNavbar é a prop definida no style para o NavbarContainer */}
      <NavbarContainer extendNavbar={extendNavbar}>
        <NavbarInnerContainer>
          <LeftContainer>
            <NavbarLinkContainer>
              <OpenLinksButton
                onClick={() => {
                  setExtendNavbar((value) => !value);
                }}
              >
                {extendNavbar ? <>&#10005;</> : <>&#8801;</>}
              </OpenLinksButton>

              <NavbarLinkExtended
                style={{
                  fontWeight: "bold",
                  color: "#fff",
                }}
                to="/"
              >
                1Pitchau
              </NavbarLinkExtended>
              {/* {as chaves no to{} quer dizer que pode receber instrução javascript} */}
              <NavbarLink to={"/"}>Home</NavbarLink>
              {dataMenu.map((menu) => {
                return (
                  <NavbarLink key={menu.id} to={"/categoria/" + menu.id}>
                    {menu.categoria}
                  </NavbarLink>
                );
              })}
            </NavbarLinkContainer>
          </LeftContainer>

          <RightContainer>
            <NavbarLinkExtended to="/carrinho">
              <FaShoppingCart size={22} />
            </NavbarLinkExtended>
          </RightContainer>
        </NavbarInnerContainer>

        {/* {instrução javascript para quando o extendNavbar for true} */}
        {extendNavbar && (
          <NavbarExtendedContainer>
            <NavbarLinkExtended to={"/"}>Home</NavbarLinkExtended>
            {dataMenu.map((menu) => {
              return (
                <NavbarLinkExtended key={menu.id} to={"/categoria/" + menu.id}>
                  {menu.categoria}
                </NavbarLinkExtended>
              );
            })}
          </NavbarExtendedContainer>
        )}
      </NavbarContainer>
    </>
  );
};
