/** @format */

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ViewUsers = () => {
  let navigate = useNavigate();
  const [isloading, setisloading] = useState(true);
  const [users, setusers] = useState([]);
  const fetchUsers = async () => {
    axios
      .get("http://localhost/reactphp/backend/fetchUsers.php")
      .then((response) => {
        setusers(response.data);
        setisloading(false);
      })
      .catch((Error) => console.log(Error));
  };

  //fetch user
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      {isloading ? (
        <h1>loading</h1>
      ) : (
        users.map((user, index) => {
          return (
            <div key={index} onClick={() => navigate(`/users/${user.id}`)}>
              <h1>{user.name}</h1>
              <img
                src={`/images/${user.image}`}
                height="100"
                width="100"
                alt=""
              />
              <hr />
            </div>
          );
        })
      )}
    </div>
  );
};

export default ViewUsers;
