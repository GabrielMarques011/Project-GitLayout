import { Header } from "../../componentes/Header/header";
import background from "../../assets/background.png"
import './style.css';
import { Conteudo } from "../../componentes/Texts";


function App() {
  return (
    <div className="App">
      <Header/>

      <div className="conteudo">
        <img src={background} className="background" alt="background img"/>

        <div className="conteudo-filho">

          <div>
            <input className="inputTop" name="usuario" placeholder="@username"></input>
            <button className="buttonTop" type="submit">Buscar</button>
          </div>

          <div className="conteudoUser">
            <img src="https://avatars.githubusercontent.com/u/91213127?v=4" className="profile"/>
            <div className="information">
              <h3>Gabriel Marques</h3>
              <p className="user">@gabrielmarques011</p>
              <p className="text">Olá! Sou um desenvolvedor apaixonado por criar soluções inovadoras e eficientes. Com experiência em HTML, CSS, JavaScript e Java, estou sempre em busca de novos desafios e aprendizados.</p>
            </div>
          </div>

          <hr />

          <div className="conteudoRepositorio">
            <h3>Repositório</h3>
          </div>

          <Conteudo title="Form" descript="Sistema criado para formularios de uma loja de vendas de frutas"/>
          <Conteudo title="User" descript="Sistema criado para formularios de criação de User"/>
          <Conteudo title="Sistem-Car" descript="Sistema criado para formularios de uma loja de carros"/>
          <Conteudo title="Form" descript="Sistema criado para formularios de uma loja de vendas de frutas"/>

        </div>

      </div>

    </div>
  );
}

export default App;
