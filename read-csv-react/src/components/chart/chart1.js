import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  export const Chart1 = ({total,datasource})=>{


        const data = {
             labels:['new_case','total_case','new_case_excludeabroad','total_case_excludeabroad','new_death','total_death'],
             datasets:[
                {
                    label:'TOTALCASE',
                    data:total,
                    backgroundColor: 'rgba(255, 99, 132, 0.5)',
                }
             ]
        }



        return(
            <div className='Table'>
                <Bar data={data}/>
            </div>
        )
  }




