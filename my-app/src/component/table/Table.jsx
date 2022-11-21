import './Table.css'
//import { useState } from 'react'
export const Table = (props) => {
    
    //console.log(props.pass)
    let data;
    if(props.year==="All"){
        data = props.data

    }else{
        data=props.data.filter((v)=>{
            return v.age==props.year
        })
        

    }
    
    
   
   //console.log(data1)
    return (
        <div className='container'>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Address</th>
                    <th>Delete</th>
                </tr>
                {data.map((val, key) => {
                    return (
                        <tr key={key}>
                            <td>{val.name}</td>
                            <td>{val.age}</td>
                            <td>{val.address}</td>
                            <td><button onClick={(e) => { e.target.parentElement.parentElement.remove()
                        console.log('clicked')}}>Delete</button></td>
                        </tr>
                    )
                })}
            </table>
        </div>
    )
}
