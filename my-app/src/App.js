
import './App.css';
import { Header } from './component/Header/Header'
import { Table } from './component/table/Table'
import Footer  from './component/foooter/Footer';
import Form from './component/form/Form';
import { useState } from 'react'


function App() {

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
    // console.log("-->",position,value)
  }
 
 

  console.log("o",opacity)
 
  

  function setvalue(p){
    console.log(p)
    setData([...data,p])
  }


  return (
    <div  className= {` main ${opacity}`} >
     
      <Header className="Mayank" />
      <Form    fun={setvalue}  setyear={setYear} />
      
      <Table  data={data} year={year}  del={del} edit={edit} seTopacity={seTopacity}/>
      <Footer>iam child</Footer>
 

    </div>

  );
}

export default App;
