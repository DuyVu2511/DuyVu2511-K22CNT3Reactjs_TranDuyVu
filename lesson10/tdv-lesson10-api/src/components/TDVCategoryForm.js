import React, { useState } from "react";
// import axios from "./api/TDVApi";
import axios from '../api/TDVApi';

export default function TDVCategoryForm({onCloseForm, onCategorySubmit}) {
    //state
    const [tdvCategoryName,setTDVCategoryName] = useState("");
    const [tdvCategoryStatus,setTDVCategoryStatus] = useState("true");

    const tdvHandleClose = ()=>{
        onCloseForm(false);
    }
    const tdvHandleSubmit = async (event)=>{
        event.preventDefault();
        let tdvCategory = {
            tdvId:0,
            tdvCategoryName:tdvCategoryName,
            tdvCategoryStatus:tdvCategoryStatus
        }
        console.log("tdvCategory",tdvCategory);
        await axios.post("TDVCategory",tdvCategory);
        onCategorySubmit(tdvCategory);
    }
    return (
        <div>
        <form>
            <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
                Category Name
            </span>
            <input
                type="text"
                className="form-control"
                name="tdvCategoryName"
                value={tdvCategoryName}
                onChange={(ev)=>setTDVCategoryName(ev.target.value)}
                placeholder="Category Name"
                aria-label="Category Name"
                aria-describedby="basic-addon1"
            />
            </div>
            <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
                Category Status
            </span>
            <select
                className="form-control"
                name="tdvCategoryStatus"
                value={tdvCategoryStatus}
                onChange={(ev)=>setTDVCategoryStatus(ev.target.value)}

            >
                <option value={true}>Hien thi</option>
                <option value={false}>Tam khoa</option>
            </select>
            </div>
            <button className="btn btn-success" onClick={tdvHandleSubmit}>Ghi lai</button>
            <button className="btn btn-danger" onClick={tdvHandleClose}>Dong</button>
        </form>
        </div>
    );
}
