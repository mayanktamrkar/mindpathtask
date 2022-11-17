
import './App.css';
import { Header } from './component/Header/Header'
import { Table } from './component/table/Table'
import Footer  from './component/foooter/Footer';


function App() {
  let amount =105467456

  let data=[{name:"mayank",age:21,address:"marimata"},
            {name:"prayag",age:20, address:"bangali square"},
            {name:"mohit",age:22, address:"rau "},
            {name:"dev",age:19, address:"vijaynagar "}
          ]

  return (
    <>
     
      <Header className="mayank" />
      <Table data={data} pass={amount} />
      <Footer>iam child</Footer>
 

    </>

  );
}

export default App;
