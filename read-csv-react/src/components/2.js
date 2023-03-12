import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { Chart1 } from './chart/chart1';
export const  Csv2=()=>{
    const [data,Setdata] = useState([]);
    const [total,Settotal] = useState(null)
    
    useEffect(()=>{
        axios.get('https://covid19.ddc.moph.go.th/api/Cases/today-cases-by-provinces')
        .then(res=>{
            const data = res.data
            Setdata(data)
            const total = [];
            let sum_death = 0;
            let sum_new_case = 0,total_case =  0,new_case_excludeabroad = 0,total_case_excludeabroad = 0,total_death = 0
            data.forEach((e)=>{
                sum_new_case += e.new_case;
                total_case+=e.total_case;
                new_case_excludeabroad += e.new_case_excludeabroad;
                total_case_excludeabroad += e.total_case_excludeabroad;
                sum_death += e.new_death
                total_death+=e.total_death
            })
            total.push(sum_new_case);
            total.push(total_case);
            total.push(new_case_excludeabroad)
            total.push(total_case_excludeabroad)
            total.push(sum_death)
            total.push(total_death)
             
            Settotal(total)
            
        }).catch(err=>alert(err))

        // data.forEach((e)=>{
        //     if(e.new_death !== 0){
        //         Settotald(sum_death += e.new_death)
        //     }
        // })

        
    },[])

    

    return(
        <div>
            <h3>รายงานสถานการณ์ COVID-19 ประจำสัปดาห์ แยกตามรายจังหวัด</h3>
            
            <Chart1 total = {total} datasource = {data}/>

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
