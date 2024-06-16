import { useEffect, useState } from "react";
import "./App.css";
import TDVCategoryList from "./components/TDVCategoryList";
// import axios from 'axios';
import axios from "./api/TDVApi";
import TDVCategoryForm from "./components/TDVCategoryForm";
function TDVApp() {
  //Lay du lieu tu api
  const [tdvCategories, setTDVCategories] = useState([]);

  const getCategories = async () => {
    try {
      const tdvCateResponse = await axios.get("TDVCategory");
      setTDVCategories(tdvCateResponse.data);
    } catch (error) {
      console.log("loi:", error);
    }
  };

  useEffect(() => {
    getCategories();
    console.log("tdvCategories:", tdvCategories);
  }, []);

  //Trang thai form
  const [tdvCategoryIsForm, setTdvCategoryIsForm] = useState(false);

  const tdvHandleAddNew = (param) => {
    setTdvCategoryIsForm(param);
  };
  const tdvHandleCategoryCloseForm = (param) => {
    setTdvCategoryIsForm(param);
  };
  const tdvHandleCategorySubmit = (param)=>{
    let id = tdvCategories[tdvCategories.length-1].tdvId;
    console.log("Ma:",id);
    param.tdvId = id+1;
    tdvCategories.push(param);
    setTDVCategories((prev)=>{
      return [...prev];
    })
  }
  return (
    <div className="container border my-3">
      <h1>TRAN DUY VU - Call API</h1>

      <TDVCategoryList
        renderTDVCategories={tdvCategories}
        onAddNew={tdvHandleAddNew}
      />
      <hr />
      {tdvCategoryIsForm === true ? (
        <TDVCategoryForm onCloseForm={tdvHandleCategoryCloseForm}
                        onCategorySubmit={tdvHandleCategorySubmit} />
      ) : (
        ""
      )}
    </div>
  );
}

export default TDVApp;
