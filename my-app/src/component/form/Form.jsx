import React, { useState } from "react";
// import styles from '../table/Table.module.css'
import styles from "./Form.module.css";
const Form = (p) => {
  const [data, setData] = useState({ name: "", age: "", address: "" });
  const [usernameError, setusernameError] = useState("");
  const [ageError, setageError] = useState("");
  const [addressError, setAddressError] = useState("");

  const validation = (value) => {
    if (value.name.trim().length == 0) { 
      setusernameError("pls enter name");
    } else if (value.name.trim().length > 0 && value.name.trim().length <= 3) {
      setusernameError("pls enter min 3 char");
    } else if (value.name.length > 8) {
      setusernameError("max lenth is 8 char");
    } else {
      setusernameError("");
    }
    if (value.age.length === 0) {
      setageError("pls enter age");
    } else {
      setageError("");
    }
    if (value.address.trim().length === 0) {
      setAddressError("pls enter address");
    } else if (
      value.address.trim().length > 0 &&
      value.address.trim().length <= 3
    ) {
      setAddressError("pls enter min 3 char");
    } else if (value.address.length > 8) {
      setAddressError("max lenth is 8 char");
    } else {
      setAddressError("");
    }
  };
  const changehandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    validation(data);
  };

  let submitform = (e) => {
    validation(data);
    e.preventDefault();
    if (
      usernameError.trim().length === 0 &&
      ageError.trim().length === 0 &&
      addressError.trim().length === 0 &&
      data.name.trim().length !== 0 &&
      data.age.trim().length !== 0 &&
      data.address.trim().length !== 0
    ) {
      p.fun(data);
      setData((p) => {
        return { ...p, name: "", age: "", address: "" };
      });
    }
  };
  let addfilter = (e) => {
    p.setyear(e.target.value);
  };
  return (
    <form className={styles.form}>
      <div>
        <input
          value={data.name}
          type="text"
          name="name"
          placeholder="Your Name"
          onChange={changehandler}
          minLength={3}
          required
        />
        {<lable>{usernameError}</lable>}
      </div>
      <div>
        <input
          value={data.age}
          type="number"
          name="age"
          placeholder="Your age"
          onChange={changehandler}
          required
        />
        {<lable>{ageError}</lable>}
      </div>
      <div>
        <input
          value={data.address}
          type="text"
          name="address"
          placeholder="Your address"
          onChange={changehandler}
          required
        />
        {<lable>{addressError}</lable>}
      </div>
      <div>
        <button type="submit" className={styles.button} onClick={submitform}>
          Add
        </button>
      </div>
      <div>
        <select name="filter" className={styles.select} onChange={addfilter}>
          <option name="filter" value="All">
            All
          </option>
          <option name="filter" value="18">
            18
          </option>
          <option name="filter" value="19">
            19
          </option>
          <option name="filter" value="20">
            20
          </option>
          <option name="filter" value="21">
            21
          </option>
          <option name="filter" value="22">
            22
          </option>
        </select>
      </div>
    </form>
  );
};
export default Form;
