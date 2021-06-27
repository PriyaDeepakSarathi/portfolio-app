import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row,Col} from 'react-bootstrap';

const Contact =()=>{
 const[name,setName]=useState('');
 const[num,setNum]=useState('');
 const[mail,setMail]=useState('');
 const [people,setPeople]=useState([]);

const handleSubmit=(e)=>{
e.preventDefault();
if(name&&num&&mail){
let people=[name,num,mail];
setPeople(people);
setName('');
setNum('');
setMail('');

}

}

    return(<div className='main'>
<div className='contact'>
    <h2>My Contact</h2>
   <h6> Phone No:78******** </h6>
    <h6>Mail id: priyadeepaksarathi@gmail.com</h6>
<h4>Yours Deatails</h4>
<form action="">
    <Row>
        
 <Col><label htmlFor="name">Name:   </label></Col>
 <Col><input type="text" id='name' value={name} onChange={(e)=>setName(e.target.value)} /></Col>
</Row><br />
<Row>
 <Col><label htmlFor="number">Phone Number:   </label></Col>
 <Col><input type="number" id='number' value={num} onChange={(e)=>setNum(e.target.value)} /></Col>
 </Row><br />
 <Row>
  <Col><label htmlFor="mail">Mail id:   </label></Col>
 <Col><input type="mail" id='mail' value={mail} onChange={(e)=>setMail(e.target.value)} /></Col>
 </Row>
 <button type='button'  className='btn' onClick={handleSubmit}>share</button>
</form>

</div>
    </div>)
}
export default Contact;