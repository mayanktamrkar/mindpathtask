import './App.css';
import { Header } from './component/Header/Header'
import { Table } from './component/table/Table'
import Footer  from './component/foooter/Footer';
import UseEffect from './component/table/UseEffect';
import Form from './component/form/Form';
import Button from './component/comman/Button';
import { useState } from 'react'
import Usereducer from './component/comman/Usereducer';
function App() {
  const [change,setChange]=useState(false)
  const [year,setYear]=useState('All')
  const [opacity,seTopacity]=useState("")
  const [data,setData ]=useState([{name:"mayank",age:21,address:"marimata"},
  {name:"prayag",age:20, address:"bangali square"},
  {name:"mohit",age:22, address:"rau "},
  {name:"dev",age:19, address:"vijaynagar "},
  {name:"ashish",age:18, address:"dewas naka"}
]
  )
  const del=(position)=>{
    data.splice(position,1)
    setData([...data])
    console.log(data)
  }
  const edit=(position,value)=>{
     data.splice(position,1,value)
    console.log("-->",position,value)
  }
  function setvalue(p){
    console.log(p)
    setData([...data,p])
  }
  console.log(document.getElementsByClassName("main"))
  return (
    <>
    <div  className= {` main ${opacity}`} >
      <Header className="Counter"  setChange={setChange} />
      {change?<UseEffect/>: <div><Form    fun={setvalue}  setyear={setYear} />
      <Table  data={data} year={year}  del={del} edit={edit} seTopacity={seTopacity}/></div>}
      <Footer>iam child</Footer>
    </div>
    {/* <Usereducer/> */}
    {/* <Button onclick={()=>{
      console.log("run")
    }}>click</Button> */}
    </>
  );
}
export default App;
