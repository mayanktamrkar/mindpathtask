import "./App.css";
import { Header } from "./component/Header/Header";
import { Table } from "./component/table/Table";
import Footer from "./component/foooter/Footer";
import Loginform from "./component/table/Loginform";
import Form from "./component/form/Form";
import Button from "./component/comman/Button";
import React, { useState, useContext } from "react";
import Usereducer from "./component/comman/Usereducer";
import items from "./component/Header/Header";
import { Data } from "./component/table/Loginform";
import { citydata } from "./component/table/Confirm";
import Input from "./component/comman/Input";
import UseCallback from "./component/comman/UseCallback";
import Main from "./component/Ecommerce/Main";

function App() {
  const [change, setChange] = useState(false);
  const [year, setYear] = useState("All");
  const [opacity, seTopacity] = useState("");
  const [toggle, setToggle] = useState(true);
  const [is, setIs] = useState(true);

  const [data, setData] = useState([
    { name: "mayank", age: 21, address: "marimata" },

    { name: "prayag", age: 20, address: "bangali square" },
    { name: "mohit", age: 22, address: "rau " },
    { name: "dev", age: 19, address: "vijaynagar " },
    { name: "ashish", age: 18, address: "dewas naka" },
  ]);
  
  const del = (position) => {
    data.splice(position, 1);
    setData([...data]);
  };

  const edit = (position, value) => {
    data.splice(position, 1, value);
  };

  function setvalue(p) {
    setData([...data, p]);
  }

  return (
    <Main/>
    // <main className={toggle ? "main1" : "main2"}>
    //   {is ? (
    //     <items.Provider
    //       value={[items._currentValue, citydata._currentValue, setChange]}
    //     >
    //       <div className={` main ${opacity}`}>
    //         <Header
    //           className="Counter"
    //           setChange={setChange}
    //           login={change}
    //           setToggle={setToggle}
    //           toggle={toggle}
    //         />
    //         {change ? (
    //           <div>
    //             <Form fun={setvalue} setyear={setYear} />
    //             <Table
    //               data={data}
    //               year={year}
    //               del={del}
    //               edit={edit}
    //               seTopacity={seTopacity}
    //             />
    //           </div>
    //         ) : (
    //           <Loginform />
    //         )}
    //         <Footer>iam child</Footer>
    //       </div>
    //     </items.Provider>
    //   ) : (
    //     <UseCallback />
    //   )}
    // </main>
  );
}
 
export default App;
