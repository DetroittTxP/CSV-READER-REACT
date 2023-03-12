

import {Navbar,Nav,Container, NavDropdown} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Csvdata} from './csvdata'

function App() {
  return (
    <div>
        <Navbar className='justify-content-between' bg='light' expand='lg' >
              <Navbar.Brand href='/'>HOME</Navbar.Brand>

              <Container>
                  <Nav>
                       <NavDropdown title='CSV'>
                           <NavDropdown.Item href='/1'>1.รายงานสถานการณ์ COVID-19 ประจำสัปดาห์</NavDropdown.Item>
                           <NavDropdown.Item href='/2'>2.รายงานสถานการณ์ COVID-19 ประจำสัปดาห์ แยกตามรายจังหวัด</NavDropdown.Item>
                       </NavDropdown>
                  </Nav>
              </Container>

        </Navbar>

         <div className='data-csv'>
             <Csvdata/> 
         </div>
        
    </div>
  );
}

export default App;
