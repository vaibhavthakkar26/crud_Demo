import React, { useEffect, useState } from "react";
import UpsertUser from "../../component/UpsertUser";
import { useLocation } from "react-router-dom";
import "./Home.css";
function Home() {
  const [editId, setEditId] = useState("");
  const location = useLocation();

  useEffect(() => {
    if (location.state !== null) {
      getEditUserId();
    }
  });

  const getEditUserId = () => {
    const editId = location.state.id;
    setEditId(editId);
  };

  return (
    <>
      <div className="home_first_element"></div>
      <UpsertUser id={editId} />
    </>
  );
}

export default Home;
