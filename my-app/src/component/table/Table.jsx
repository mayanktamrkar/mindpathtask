import './Table.css'
import { useState } from 'react'
export const Table = (props) => {
    // let name="Name"
    console.log(props.pass)
    let data = props.data
    const my = {
        color: "red"
    }
    const [name, set] = useState(0)
    return (
        <div className='container'>
            <table id="customers">
                <tr>
                    <th>{name}</th>
                    <th >age</th>
                    <th style={my}>address</th>
                    <th>click</th>
                </tr>
                {data.map((val, key) => {
                    return (
                        <tr key={key}>
                            <td>{val.name}</td>
                            <td>{val.age}</td>
                            <td>{val.address}</td>
                            <td><button onClick={() => { set(1) }}>click</button></td>
                        </tr>
                    )
                })}
            </table>
        </div>
    )
}
