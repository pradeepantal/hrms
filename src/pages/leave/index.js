import Image from 'next/image'
import React from "react"
import { useRouter } from "next/router"
import calendar from '../../assets/calendar.png'
import picture from '../../assets/picture.png'
import './style.css'

export default function Leave() {

  const router = useRouter();
  function applyLeave() {
    router.push("/home");
  }
  function Arrow() {
    router.push("/attendance");
  }

// const URL = "https://cat-fact.herokuapp.com/facts";
// const factPara = document.querySelector("#fact")
// const btn = document.querySelector("#btn");

// const getFacts = async () =>{
//  console.log("getting data .....") 
// let response =  await fetch(URL);
// console.log(response);  
// };
// getFacts();

// btn.addEventListener("click", getFacts)



  return (
    <>
      <div className="head">

        <h1>
          <svg xmlns="http://www.w3.org/2000/svg" style={{ float: "left" }} onClick={Arrow} width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M19 12H5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M12 19L5 12L12 5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <Image src={picture} style={{ borderRadius: 50, float: "right", marginTop: -3 }} />
          LEAVES
        </h1>


      </div>

      <form>
        <div className="container" >
          <div className="month">
            <select className="date-list" >
              <option value="Date">Jan </option>
              <option> Feb </option>
              <option> Mar</option>
              <option> Apr</option>
              <option> May</option>
              <option> Jun </option>
              <option> Jul</option>
              <option> Aug</option>
              <option> Sep</option>
              <option> Oct </option>
              <option> Nov</option>
              <option> Dec</option>
            </select>
          </div>
          <div className="year">
            <select className="Year-list" style={{ background: 'rgba(54, 114, 139, 0.10)' }} >
              <option value="Date">2024 </option>
              <option >2023 </option>
              <option >2022 </option>
              <option >2021 </option>
            </select>
          </div>
        </div>
      </form>
      <div className="table-list">
        <table>
          <tbody>
            <tr>
              <th>From</th>
              <th> To </th>
              <th>Status</th>
            </tr>
            <tr>
              <td> <Image src={calendar} style={{ borderRadius: 50 }} /> 4-Jan-2024</td>
              <td> 6-Jan-2024</td>
              <td  ><span className="apr"> Approved </span></td>
            </tr>
            <tr>
              <td> <Image src={calendar} style={{ borderRadius: 50 }} /> 4-Jan-2024</td>
              <td> 6-Jan-2024</td>
              <td> <span className="pen"> Pending </span></td>
            </tr>
            <tr>
              <td> <Image src={calendar} style={{ borderRadius: 50 }} /> 4-Jan-2024</td>
              <td> 6-Jan-2024</td>
              <td> <span className="cnl">Cancel </span></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="btn-atd">
        <button className="btn" type="submit" onClick={applyLeave}> APPLY LEAVE </button>
      </div>
    </>
  )
}

