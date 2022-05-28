/** @format */

import { useRef, useEffect, useState } from "react";
import axios from "axios";

const AddUser = () => {
  const [form, setform] = useState({ name: "", age: "" });
  const file = useRef();
  const handlesubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("picture", file.current.files[0]);
    formData.append("name", form.name);
    formData.append("age", form.age);

    axios
      .post("http://localhost/reactphp/backend/insertUser.php", formData)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const updateinputs = (input, value) => {
    if (input === "name") {
      setform({ ...form, name: value });
    }
    if (input === "age") {
      setform({ ...form, age: value });
    }
  };
  return (
    <div>
      <form onSubmit={handlesubmit}>
        <input type="file" ref={file} />
        <input
          type="text"
          placeholder="name"
          onChange={(e) => updateinputs("name", e.target.value)}
        />
        <input
          type="text"
          placeholder="age"
          onChange={(e) => updateinputs("age", e.target.value)}
        />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default AddUser;
