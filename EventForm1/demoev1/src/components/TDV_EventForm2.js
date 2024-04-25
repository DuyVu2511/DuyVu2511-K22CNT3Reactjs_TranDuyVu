import React from 'react'

export default function TDV_EventForm2() {

    // Dinh nghia cac ham xu ly su kien
    const eventHandleClick1 = (content)=>{
        console.log('=============================');
        console.log(content);
        console.log('=============================');
    }

  return (
    <div className='alert alert-success'>
        <h2>Event Demo - Functiom Component</h2>
        <button onClick={eventHandleClick1("Tran Duy Vu")}>Goi khi render</button>
        <button onClick={()=>eventHandleClick1("K22CNT3-ReactJs")}>Goi khi click</button>

    </div>
  )
}
