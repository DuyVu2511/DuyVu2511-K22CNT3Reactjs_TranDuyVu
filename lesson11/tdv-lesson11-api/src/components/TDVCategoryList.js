import React from "react";

const TDVCategoryList = ({ renderTDVCategories, onAddNew, onTDVDelete, onTDVEdit }) => {
  const tdvCategoryElement = renderTDVCategories.map((tdvCategory, index) => {
    return (
      <tr key={index}>
        <th>{index + 1}</th>
        <td>{tdvCategory.TDVId}</td>
        <td>{tdvCategory.TDVCategoryName}</td>
        <td>{tdvCategory.TDVCategoryStatus ? "Hien thi" : "Tam khoa"}</td>
        <td>
          <button
            className="btn btn-danger"
            onClick={() => tdvHandleDelete(tdvCategory.TDVid)}>
            Delete
          </button>
          <button
            className="btn btn-success"
            onClick={() => tdvHandleEdit(tdvCategory)}>
            Edit
          </button>
        </td>
      </tr>
    );
  });

  const tdvHandleAdd = () => {
    onAddNew(true);
  };

  const tdvHandleDelete = (TDVId) => {
    if(window.confirm('Ban co muon xoa Category nay voi id ['+TDVId+'] khong?')){
      console.log("Delete:",TDVId);
      onTDVDelete(TDVId);
    } else {

    }
};

  const tdvHandleEdit = (tdvCategory)=>{
    onTDVEdit(tdvCategory);
  }

  return (
    <div className="container m-2">
      <h2>DANH SACH LOAI SAN PHAM</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>#</th>
            <th>Ma loai</th>
            <th>Ten loai</th>
            <th>Trang thai</th>
            <th>Chuc nang</th>
          </tr>
        </thead>
        <tbody>{tdvCategoryElement}</tbody>
      </table>
      <button className="btn btn-primary" onClick={tdvHandleAdd}>
        Them moi
      </button>
    </div>
  );
};

export default TDVCategoryList;
