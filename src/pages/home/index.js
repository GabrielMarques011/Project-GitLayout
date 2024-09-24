import { Header } from "../../componentes/Header/header";
import background from "../../assets/background.png"
import './style.css';


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

          <div>
            <img src="https://avatars.githubusercontent.com/u/91213127?v=4" className="profile"/>
            <div>
              <h3>Gabriel Marques</h3>
              <p>@gabrielmarques011</p>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}

export default App;
