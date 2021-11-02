import xml2js from 'xml2js';
import './App.css';

function App() {

  const data = `
  <?xml version='1.0' encoding='utf-8'?>
<Library>
    <Books count='1'>
        <Book id='1'>
            <Name>Me Before You</Name>
            <Author>Jojo Moyes</Author>
        </Book>
    </Books>
    <Music count='1'>
        <CD id='2'>
            <Name>Houses of the Holy</Name>
            <Artist>Led Zeppelin</Artist>
        </CD>
    </Music>
</Library>`;

  const xml = new xml2js.Parser();
  let resultJson;
  xml.parseString(data, function (err, result) {
    resultJson = result;
  });
  console.log(resultJson);

  return (
    <div className="App">
      <header className="App-header">
        <p>Hola Adrianita (mira la consola)</p>
        <p>{JSON.stringify(resultJson)}</p>
      </header>
    </div>
  );
}

export default App;