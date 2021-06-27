import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table} from 'react-bootstrap';

const Qualification =()=>{

    return(<div className='main'>
            <div className='table'>
                <h2> Educational Qualification</h2>
                <Table striped bordered hover>
  <thead>
    <tr>
      <th></th>
      <th>Institute Name</th>
      <th>Year</th>
      <th>Percentage</th>
    </tr>
  </thead>
  <tbody className='tbody'>
    <tr>
      <td>ME</td>
      <td>Madras Institute of Technology</td>
      <td>2014-2016</td>
      <td>82</td>
    </tr>
    <tr>
      <td>BE</td>
      <td>Jerusaem College of Engineering</td>
      <td>2009-2013</td>
      <td>76</td>
    </tr>
    <tr>
      <td>12</td>
      <td>Kurinji Higher Secondary School</td>
      <td>2009</td>
      <td>89</td>
    </tr>
    <tr>
      <td>10</td>
      <td>St.Xaviers Higher Secondary School</td>
      <td>2007</td>
      <td>90</td>
    </tr>
  </tbody>
</Table>

            </div>
    </div>)
}
export default Qualification;