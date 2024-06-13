import "./App.css";
import { React, useEffect, useState } from "react";
import axios from "axios";
import TDVStudentList from "./components/TDVStudentList";

function TdvApp() {
  const [tdvStudentList, setTdvStudentList] = useState([]);

  const TDVGetStudent = async () => {
    try {
      const response = await axios.get("https://666a49837013419182cebdbe.mockapi.io/api/tdvv1/tdvStudent");
      setTdvStudentList(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    TDVGetStudent();
  }, []);

  return (
    <div className="container border mt-5 p-3">
      {" "}
      <h1 className="text-center my-3">
        Xu ly chuc nang CRUD - Hook - API
      </h1>{" "}
      <hr /> <TDVStudentList renderTdvStudentList={tdvStudentList} />{" "}
    </div>
  );
}

export default TdvApp;
