import React from 'react'

export default function TDVCategoryList({renderTDVCategories, onAddNew}) {
    console.log("renderTDVCategories: ", renderTDVCategories);
    let tdvCategoryElement = renderTDVCategories.map((tdvCategory,index)=>{
        return(
            <tr key={index}>
                <th>{index+1}</th>
                <th>{tdvCategory.TDVid}</th>
                <th>{tdvCategory.TDVCategoryName}</th>
                <th>{tdvCategory.TDVCategoryStatus===true?"Hien thi":"Tam khoa"}</th>
            </tr>
        )
    })

    const tdvHandleAdd = ()=>{
        onAddNew(true);
    }
  return (
    <div className='container m-2'>
        <h2>DANH SACH LOAI SAN PHAM</h2>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Ma loai</th>
                    <th>Ten loai</th>
                    <th>Trang thai</th>
                    <th>Chuc nang</th>
                </tr>
            </thead>
            <tbody>
                {tdvCategoryElement}
            </tbody>
        </table>
        <button className='btn btn-primary' onClick={tdvHandleAdd}>Them moi</button>
    </div>
  )
}

