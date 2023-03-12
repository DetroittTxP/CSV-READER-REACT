import {useEffect, useState } from 'react';
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';


export const Csv3=()=>{
    const [data,Setdata] = useState([]);
    

    useEffect(()=>{
        axios.get('https://covid19.ddc.moph.go.th/api/Cases/timeline-cases-all')
        .then(res=>Setdata(res.data))
        .catch(err=>alert(err))


    },[])



    return(
        <div>
            <h3>รายงานสถานการณ์ COVID-19 ระลอก 4 (ตั้งแต่ 01/01/2022 – ปัจจุบัน)</h3>

            <br/>
            <br/>

            <table className='table' style={{backgroundColor:'white',marginLeft:10,width:1500}}>
                <thead>
                     <tr>
                         <th>YEAR</th>
                         <th>WEEKNUM</th>
                         <th>NEW_CASE</th>
                         <th>new_case_excludeabroad"</th>
                         <th>total_case_excludeabroad"</th>
                         <th>new_recovered</th>
                         <th>total_recovered</th>
                         <th>new_death</th>
                         <th>total_death</th>
                         <th>case_foreign"</th>
                         <th>case_prison</th>
                         <th>case_walkin"</th>
                         <th>case_new_prev"</th>
                         <th>case_new_diff</th>
                         <th>death_new_prev</th>
                         <th>death_new_diff</th>
                     </tr>
                </thead>

                <tbody>
                    {data.map((e)=>(
                        <tr>
                            <td>{e.year}</td>
                            <td>{e.weeknum}</td>
                            <td>{e.new_case}</td>
                            <td>{e.new_case_excludeabroad}</td>
                            <td>{e.total_case_excludeabroad}</td>
                            <td>{e.new_recovered}</td>
                            <td>{e.total_recovered}</td>
                            <td>{e.new_death}</td>
                            <td>{e.total_death}</td>
                            <td>{e.case_foreign}</td>
                            <td>{e.case_prison}</td>
                            <td>{e.case_walkin}</td>
                            <td>{e.case_new_prev}</td>
                            <td>{e.case_new_dif}f</td>
                            <td>{e.death_new_prev}</td>
                            <td>{e.death_new_diff}</td>
                        </tr>
                    ))}
                </tbody>

            </table>


        </div>
    )
}
