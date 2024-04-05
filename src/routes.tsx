import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Carrinho } from "./pages/Carrinho";
import { Produto } from "./pages/Produto";
import { Contato } from "./pages/Contatos";
import { Product } from "./pages/Product";
import { ListaContatos } from "./pages/ListaContatos";
import { DetalheContato } from "./pages/DetalheContato";
export function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/carrinho" element={<Carrinho />} />
        <Route path="/contato/:id?" element={<Contato />} />
        <Route path="/listacontato" element={<ListaContatos/>}/>
        <Route path="/detalhecontato/:id" element={<DetalheContato/>}/>

        <Route path="/produto/:id" element={<Produto />} />
        <Route path="/categoria/:id" element={<Produto />} />

        <Route path="/product/:id" element={<Product/>} />
      </Routes>
    </BrowserRouter>
  );
}
