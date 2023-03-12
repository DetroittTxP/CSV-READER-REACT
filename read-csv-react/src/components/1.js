import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

export const First =()=>{
    const [data,Setdata] = useState([]);

    useEffect(()=>{
       axios.get('https://covid19.ddc.moph.go.th/api/Cases/today-cases-all')
       .then(res=>Setdata(res.data))
       .catch(err=>alert(err))     

    },[])



    return(
        <div>
            <h3>รายงานสถานการณ์ COVID-19 ประจำสัปดาห์</h3>

            <br/>
            <br/>

            <table className='table' style={{backgroundColor:'white',width:1000,marginLeft:500}}>
                 <thead>
                     <tr>
                        <th scope='col'>year</th>
                        <th scope='col'>weeknum</th>
                        <th scope='col'>case</th>
                        <th scope='col'>total_case</th>
                     </tr>
                 </thead>
                 <tbody>
                     {data.map((e)=>(
                        <tr>
                            <td>{e.year}</td>
                            <td>{e.weeknum}</td>
                            <td>{e.new_case}</td>
                            <td>{e.total_case}</td>
                        </tr>
                     ))}
                 </tbody>
            </table>
        </div>
    )
}
