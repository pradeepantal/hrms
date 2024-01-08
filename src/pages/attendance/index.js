import React from "react"
import Image from 'next/image'
import calendar from '../../assets/calendar.png'
import picture from '../../assets/picture.png'
import './style.css'

export default function Attendance() {

    return (

        <div>
            <h1> <svg xmlns="http://www.w3.org/2000/svg" style={{float:"left"}} width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M19 12H5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M12 19L5 12L12 5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg> 
                <Image src={picture} style={{borderRadius:50, float: "right", marginTop:-3}}/> 
            ATTENDANCE 
             </h1>
            <br/> <br/> <br/>
            <form>
                <div className="container">
                    <br />  
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
                    <div className="year">
                        <select className="Year-list" style={{background: 'rgba(54, 114, 139, 0.10)'}} >
                        <option value="Date">2024 </option>
                            <option >2023 </option>
                            <option >2022 </option>
                            <option >2021 </option>
                        </select>
                    </div>
                </div>
            </form>
            <br /> <br />
            <div className="table-list">
                <table>
                    <tbody>
                        <tr>
                            <th>Date</th>
                            <th>Status</th>
                        </tr>
                        <tr>
                            <td> <Image src={calendar} style={{borderRadius:50}}/> 4-Jan-2024</td>
                            <td  ><span className= "prs"> Present </span></td>
                        </tr>
                        <tr>
                            <td> <Image src={calendar} style={{borderRadius:50}}/> 4-Jan-2024</td>
                            <td> <span className="lev"> On Leave </span></td>
                        </tr>
                        <tr>
                            <td> <Image src={calendar} style={{borderRadius:50}}/> 4-Jan-2024</td>
                            <td> <span className="abs">Absent </span></td>
                        </tr>
                    </tbody>
          
                </table>

            </div>
            <br /> <br />
            <div className="btn-atd">
                <button className="btn" type="submit"> ADD  ATTENDANCE </button>
            </div>


        </div>
    )
}