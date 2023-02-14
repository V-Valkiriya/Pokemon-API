
import Header from "./components/header/Header.jsx";
import { useEffect, useState } from 'react';
import Form from './components/Form/Form';

function App() {
  const [pokemon, setPokemon] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    console.log('pokemon:', pokemon);
    console.log('error: ', error);
  }, [pokemon, error]);

  return (
      <div className="App">
        <Header/>
        <div className="wrapper">
          <Form getPokemon={setPokemon} getError={setError} />
        </div>
    </div>
  );
}

export default App;
