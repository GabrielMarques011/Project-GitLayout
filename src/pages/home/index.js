import { useState } from 'react';
import { Header } from "../../componentes/Header/header";
import background from "../../assets/background.png"
import './style.css';
import { Conteudo } from "../../componentes/Texts";


function App() {

  const [user, setUser] = useState('');
  const [currentUser, setcurrentUser] = useState(null);
  const [repos, setRepos] = useState(null);

  const getData = async () => {
    const userData = await fetch(`https://api.github.com/users/${user}`);
    const newData = await userData.json();

    if(newData.name){
      const {avatar_url, name, bio, login} = newData;
      setcurrentUser({avatar_url, name, bio, login});

      const reposData = await fetch(`https://api.github.com/users/${user}/repos`);
      const newRepos = await reposData.json();

      if(newRepos.length){
        setRepos(newRepos);
      }

    }
  }

  return (
    <div className="App">
      <Header/>

      <div className="conteudo">
        <img src={background} className="background" alt="background img"/>

        <div className="conteudo-filho">

          <div>
            <input 
            value={user} 
            onChange={event => setUser(event.target.value)} 
            className="inputTop" 
            name="usuario" 
            placeholder="@username"></input>
            <button 
            onClick={getData}
            className="buttonTop" 
            type="submit">Buscar</button>
          </div>

          {currentUser?.name ? ( <>

            <div className="conteudoUser">
            <img src={currentUser.avatar_url} 
            className="profile"/>
            <div 
            className="information">
              <h3>{currentUser.name}</h3>
              <p className="user">@{currentUser.login}</p>
              <p className="text">{currentUser.bio}</p>
            </div>
            </div>

            <hr />

            </>): null}

            {repos?.length ? ( <>

            <div className="conteudoRepositorio">
            <h3>Repositório</h3>
            </div>

            {repos.map((repo) =>(
              <Conteudo title={repo.name} descript={repo.description}/>
            ))}

            </> ) : null}
          

        </div>

      </div>

    </div>
  );
}

export default App;
