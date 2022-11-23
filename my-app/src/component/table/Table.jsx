import { useState } from 'react';
import Editform from './Editform';
import styles from './Table.module.css'
import  ReactDOM  from 'react-dom';
export const Table = (props) => {
    const [value,setvalue]=useState({name:'',age:'',address:''})
    const [isedit,setIsedit]=useState(false)
    const [key,setKey]=useState(0)
    let a=false
    let data;
    //console.log("key",key)
    if(props.year==="All"){
        data = props.data
    }else{
        data=props.data.filter((v)=>{
            return v.age==props.year
        })
    }
    const editbutton=(name,age,address)=>{
        console.log(name,age,address)
        setvalue({name,age,address})
        setIsedit(true)
    }
    console.log(value)


  
    return (
        <div className='container'>
            { isedit  &&  ReactDOM.createPortal(<Editform k={key} seTopacity={props.seTopacity}  name={value.name} age={value.age} address={value.address}  setedit={setIsedit}  editdata={props.edit}/>,document.getElementById('root2'))}
          { }
          <table >
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Address</th>
                    <th>Action</th>
                </tr>
                {data.map((val, key) => {
                    return (
                        <tr key={key}>
                            <td>{val.name}</td>
                            <td>{val.age}</td>
                            <td>{val.address}</td>
                            <td><button className={styles.button}   onClick={(e) => { props.del(key)
                       }}>Delete</button> <button className={styles.button}  onClick={()=>{editbutton(val.name,val.age,val.address)  
                        setKey(key)    
                        props.seTopacity("opacity")}}>Edit</button></td>
                        </tr>
                    )
                })}
            </table>
        </div>
    )
}
