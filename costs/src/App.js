import './App.css';

function App() {

  const name = 'Sérgio';
  const url = 'https://via.placeholder.com/150';

  function sum(a, b) {
    return a + b;
  }

  return (
    <div className="App">
      <h1>Alterando o jsx</h1>
      <p>Olá, {name}</p>
      <p>{sum(1, 2)}</p>
      <img src={url} alt="teste de imagem" style={{ "borderRadius": "25px"}}/>
    </div>
  );
}

export default App;
