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

            <table className='table' style={{backgroundColor:'white',width:1000,marginLeft:500}}>
                  
            </table>
        </div>
    )
}
