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
}, [tdvCategories]);

  //Trang thai form
  const [tdvCategoryIsForm, setTdvCategoryIsForm] = useState(false);

  const tdvHandleAddNew = (param) => {
    setTdvCategoryIsForm(param);
  };
  const tdvHandleCategoryCloseForm = (param) => {
    setTdvCategoryIsForm(param);
  };
  const tdvHandleCategorySubmit = (param) => {
    let id = tdvCategories[tdvCategories.length - 1].tdvId;
    console.log("Ma:", id);
    param.tdvId = id + 1;
    tdvCategories.push(param);
    setTDVCategories([...tdvCategories]); // Cập nhật lại state
    setTdvCategoryIsForm(false);
  };
  // Ham xu ly su kien xoa mot doi tuong category
  const tdvHandleDelete = (tdvId)=>{
    console.log("App-Delete-tdvId:",tdvId);
    // Xoa tren api
    // const tdvResponse = axios.delete(`https://666e8c14f1e1da2be5208590.mockapi.io/TDVApi/tdvv1/TDVCategory/${tdvId}`);
    const tdvResponse = axios.delete(`TDVCategory/${tdvId}`)
    console.log("tdvResponse-Delete",tdvResponse);
    let tdvDelete = tdvCategories.filter(x=>x.tdvId !== tdvId);
    setTDVCategories(tdvDelete);
    console.log("Deleted:",tdvDelete);
  }

  //sua category
  const tdvHandleEdit = (tdvCategory)=>{
   
  }
  return (
    <div className="container border my-3">
      <h1>TRAN DUY VU - Call API</h1>

      <TDVCategoryList
        renderTDVCategories={tdvCategories}
        onAddNew={tdvHandleAddNew}
        onTDVDelete={tdvHandleDelete}
        onTDVEdit={tdvHandleEdit}
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
