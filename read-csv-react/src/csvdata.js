import {Routes,Route} from 'react-router-dom'
import { First } from './components/1'
import { Csv2 } from './components/2'
import { Csv3 } from './components/3'



export const Csvdata=()=>{
    return(
        <Routes>
             <Route path='/1' element={<First/>}/>
             <Route path='/2' element={<Csv2/>}/>
             <Route path='/3' element={<Csv3/>} />
        </Routes>
    )
}