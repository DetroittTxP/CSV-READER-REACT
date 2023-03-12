import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
export const  Csv2=()=>{
    const [data,Setdata] = useState([]);

    useEffect(()=>{
        axios.get('https://covid19.ddc.moph.go.th/api/Cases/today-cases-by-provinces')
        .then(res=>Setdata(res.data)).catch(err=>alert(err))
    },[])

    return(
        <div>
            <h3>รายงานสถานการณ์ COVID-19 ประจำสัปดาห์ แยกตามรายจังหวัด</h3>

            <br/>
            <br/>

            <table className='table' style={{backgroundColor:'white',marginLeft:160,width:1500}}>
                  <thead>
                       <tr>
                           <th>เคสที่</th>
                           <th scope='col'>year</th>
                           <th scope='col'>weeknum</th>
                           <th scope='col'>provinces</th>
                           <th scope='col'>new_case</th>
                           <th scope='col'>total_case</th>
                           <th scope='col'>new_case_excludeabroad</th>
                           <th scope='col'>total_case_excludeabroad</th>
                           <th scope='col'>new_death</th>
                           <th scope='col'>total_death</th>
                       </tr>
                  </thead>

                  <tbody>
                       
                          {data.map((element,index)=>(
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{element.year}</td>
                                <td>{element.weeknum}</td>
                                <td>{element.province}</td>
                                <td>{element.new_case}</td>
                                <td>{element.total_case}</td>
                                <td>{element.new_case_excludeabroad}</td>
                                <td>{element.total_case_excludeabroad}</td>
                                <td>{element.new_death}</td>
                                <td>{element.total_death}</td>
                            </tr>
                          ))}
                       
                  </tbody>
            </table>
        </div>
    )
}
