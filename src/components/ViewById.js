/** @format */

import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ViewById = () => {
  const params = useParams();
  const [isLodding, setisLodding] = useState(true);
  const [user, setuser] = useState([]);

  const fetchUsers = async () => {
    const formData = new FormData();
    formData.append("id", params.id);
    axios
      .get(
        `http://localhost/reactphp/backend/fetchSingleUser.php?id=${params.id}`
      )
      .then((response) => {
        console.log(response);
        setuser(response.data);
        setisLodding(false);
      })
      .catch((Error) => console.log(Error));
  };
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      {isLodding ? (
        <h1>loding</h1>
      ) : (
        user.map((user, index) => {
          return (
            <div key={index}>
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

export default ViewById;
