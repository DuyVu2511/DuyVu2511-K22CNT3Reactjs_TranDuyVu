import React from "react";

export default function TDVStudentList({ renderTdvStudentList }) {
    console.log("Data:", renderTdvStudentList);
    let tdvElement = renderTdvStudentList.map((tdvStudent, index)=>{
        return (
                <tr key={index}>
                <th scope="row">{index+1}</th>
                <td>{tdvStudent.tdvId}</td>
                <td>{tdvStudent.tdvName}</td>
                <td>{tdvStudent.tdvAge}</td>
                <td>{tdvStudent.tdvPhone}</td>
                <td>{tdvStudent.tdvEmail}</td>
                <td>{tdvStudent.tdvStatus}</td>
                <td>
                    Edit / Delete 
                </td>
          </tr>
        )
    });
  return (
    <div>
      <h2>Danh sach sinh vien</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Ma sinh vien</th>
            <th scope="col">Ho ten</th>
            <th scope="col">Tuoi</th>
            <th scope="col">Dien thoai</th>
            <th scope="col">Email</th>
            <th scope="col">Trang thai</th>
            <th scope="col">Chuc nang</th>
          </tr>
        </thead>
        <tbody>
          {tdvElement}
        </tbody>
      </table>
    </div>
  );
}

