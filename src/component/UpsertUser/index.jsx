import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { editUserData, UpdateUser, userRegisterData } from "../../redux/action";
import { addUser, UPDATEUSER } from "../../service/api.service";
import { connect } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

function UpsertUser(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [number, setNumber] = useState("");

  //
  const submitHandler = async () => {
    const data = {
      name: name,
      email: emailAddress,
      phone: number,
      id: props.id,
    };
    if (props.id) {
      dispatch(UpdateUser(data));
      const Userupdate = await UPDATEUSER(props.id, data);
    }

    if (!props.id) {
      const UserData = await addUser(data);
      dispatch(userRegisterData(UserData));
    }
    setName("");
    setNumber("");
    setEmailAddress("");

    navigate(`/userinfo`);
  };

  useEffect(() => {
    if (props.id) {
      if (props.userList.item[0]) {
        UserData(props.userList.item[0]);
      }
    }
  }, [props.id]);

  const UserData = (data) => {
    console.log("data", data);
    const Data = data;
    setName(Data.name);
    setEmailAddress(Data.email);
    setNumber(Data.phone);
  };

  useEffect(() => {
    props.getUserDetails(props.id);
  }, [props.id]);

  return (
    <>
      <h2> Add User </h2>
      <div>
        <label> Name :</label>
        <input
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label> email :</label>
        <input
          placeholder="email"
          value={emailAddress}
          onChange={(e) => setEmailAddress(e.target.value)}
        />
      </div>
      <div>
        <label> number :</label>
        <input
          placeholder="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
      </div>
      <div style={{ display: "flex" }}>
        <button onClick={() => submitHandler()}>
          {props.id ? "edit User" : "Submit"}{" "}
        </button>

        <Link to="/userinfo">
          <button>view List</button>
        </Link>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    userList: state.user,
  };
};

const mapDispatchToprops = (dispatch) => {
  return {
    getUserDetails: (id) => {
      dispatch(editUserData(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToprops)(UpsertUser);
