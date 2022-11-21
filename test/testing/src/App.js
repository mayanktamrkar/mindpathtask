
import './App.css';
import Parent from './Parent';


function App() {
  const takedata=(v)=>{
    console.log(v)
  }
  return (
    <div className="App">
      <Parent takedata={takedata}    />

    </div>
  );
}

export default App;
