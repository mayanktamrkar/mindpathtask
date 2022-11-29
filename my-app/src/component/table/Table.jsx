import { useState } from 'react';
import Editform from './Editform';
import styles from './Table.module.css'
import Confirm from './Confirm';
import  ReactDOM  from 'react-dom';
export const Table = (props) => {
    const [value,setvalue]=useState({name:'',age:'',address:''})
    const [confirm ,setConfirm]=useState(false)
    const [isedit,setIsedit]=useState(false)
    const [key,setKey]=useState(0)
    let a=false
    let data;
    console.log("table")
    if(props.year==="All"){
        data = props.data
    }else{
        data=props.data.filter((v)=>{
            return v.age==props.year
        })
    }
    const editbutton=(name,age,address)=>{
        // console.log(name,age,address)
        setvalue({name,age,address})
        setIsedit(true)
    }
    // console.log("key-->",key)

    const conifrm_delete=()=>{
        props.del(key) 

    }


  
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
                            <td><button className={styles.button}   onClick={(e) => { setKey(key) 
                            setConfirm(true)
                            props.seTopacity("opacity")
                       }}>Delete</button> <button className={styles.button}  onClick={()=>{editbutton(val.name,val.age,val.address)  
                        setKey(key)    
                        props.seTopacity("opacity")}}>Edit</button></td>
                        </tr>
                    )
                })}
            </table>
            {confirm && ReactDOM.createPortal(<Confirm conifrm_delete={conifrm_delete} setConfirm={setConfirm} seTopacity={props.seTopacity}  />,document.getElementById("root2"))}
           
        </div>
    )
}
