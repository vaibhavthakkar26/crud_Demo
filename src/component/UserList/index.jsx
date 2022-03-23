import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { userRegisterData, DeleteUser } from "../../redux/action";
import { Link } from "react-router-dom";
import {
  getUser,
  editUser,
  deletUser,
  EditUser,
} from "../../service/api.service";

function UserList() {
  const dispatch = useDispatch();

  const data = useSelector((state) => {
    return state.user.item;
  });

  const GetData = async () => {
    const getUserData = await getUser();
    getUserData.map((data) => {
      dispatch(userRegisterData(data));
    });
  };

  useEffect(() => {
    if (data.length == "0") {
      GetData();
    }
  }, []);

  const deleteUser = async (id) => {
    dispatch(DeleteUser(id));
    const deleteUserData = await deletUser(id);
  };

  return (
    <>
      <h2> User Information </h2>
      <table>
        <tbody>
          {data &&
            data.length > 0 &&
            data.map((data) => {
              return (
                <>
                  <tr>
                    <td> {data.name} </td>
                    <td> {data.email} </td>
                    <td> {data.phone} </td>
                    {/* <Link to={}> */}
                  </tr>
                  <Link to="/" state={{ id: data._id }}>
                    <button> Edit </button>
                  </Link>
                  {/* </Link> */}
                  <button onClick={() => deleteUser(data._id)}> Delete </button>
                </>
              );
            })}
        </tbody>
      </table>

      <Link to="/">
        <button> Add User </button>
      </Link>
    </>
  );
}

export default UserList;
