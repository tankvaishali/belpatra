import React, { useState } from 'react'

// import Heading from './Heading';
import { HiBuildingOffice2} from "react-icons/hi2";
import { TbPhoneCall } from "react-icons/tb";
import { TfiEmail } from "react-icons/tfi";
import HOC from '../HOC';
import "../../Assets/Css/Contactcss.css"
import Logorun from '../Logorun';
function Contactus() {
const [errmsg, seterrmsg] = useState({ });
const [blankobj, setblankobj] = useState({ });
const [obj, setobj] = useState({ });
  let getdata=(e)=>{
    if (e.target.name === "name") {
      if (e.target.value?.length <= 0) {
        errmsg.name = "Your name is require !"
      } else {
        errmsg.name = ""
      }
    }
    if (e.target.name === "email") {
      if (e.target.value?.length <= 0) {
        errmsg.email = "Your email is require !"
      } else {
        errmsg.email = ""
      }
    }
    if(e.target.name==="phonenumber"){
      if(e.target.value.length===10){
        errmsg.phonenumber=""
      }else if(e.target.value.length<10){
        errmsg.phonenumber="number must be require 10 digits"
      }else if(e.target.value.length>10){
        errmsg.phonenumber="number is not valid"
      }
      }
      if (e.target.name === "textarea") {
        if (e.target.value?.length <= 0) {
          errmsg.textarea = "Your email is require !"
        } else {
          errmsg.textarea = ""
        }
      }
obj[e.target.name]=e.target.value;
blankobj[e.target.name]=""
setobj({...obj})
setblankobj({...blankobj})
seterrmsg({...errmsg})
  }
  let savedata=()=>{
    if (obj.name === "" || obj.name === undefined) {
      errmsg.name = "Your name is require !"
    }
    if (obj.email === "" || obj.email === undefined) {
      errmsg.email = "Your email is require !"
    }
    if (obj.phonenumber === "" || obj.phonenumber === undefined) {
      errmsg.phonenumber = "Your phone number is require !"
    }
    if (obj.textarea === "" || obj.textarea === undefined) {
      errmsg.textarea = "Type your message !"
    }
    if(Object.values(errmsg).every((x)=>x==="")){
      setobj({...blankobj})
      // setobj({...obj})
      console.log(obj);
    }
    seterrmsg({...errmsg})
  }
  return(
    <>
    <div className='contactus_back'ddata-aos="zoom-in" data-aos-delay="50"
    data-aos-duration="1500">

    <h1 className='titletext text-center'  data-aos="zoom-in" data-aos-delay="50"
    data-aos-duration="1800">Our Contact </h1>
    </div>
   <div className='container py-5'>
    <div className='row g-4 py-4'>
    <div className='col-12 col-lg-4  pt-2 '>
<div className="h-100 d-flex flex-column justify-content-between ">
<div className='card  contactbck_color shadow border-0 p-4  py-5' data-aos="zoom-in" data-aos-delay="50"
    data-aos-duration="1500">
         <div className='d-flex  align-items-center justify-content-start ps-2'>
      <div className='contactusicon rounded-circle d-flex align-items-center justify-content-center align-content-center  text-white'>
      <HiBuildingOffice2 />
        </div>
        <div className='ps-4'>
        <div className='fs-4 fw-medium py-1 fstyle'>Location</div>
        <div className='pera py-1 text-secondary'>Plot No. 1, Shop No. 5, Ground Floor, Shaktinagar Co. Op. Housing Society, Near Kantareswar Mahadev Temple Katargam, Surat – 395004 ,Gujarat
        </div>
        </div>
      </div>
      
       
      </div>
      <div className='card  contactbck_color shadow border-0 p-4 my-4  py-5' data-aos="zoom-in" data-aos-delay="50"
    data-aos-duration="1500">
         <div className='d-flex  align-items-center justify-content-start ps-2'>
      <div className='contactusicon rounded-circle d-flex align-items-center justify-content-center align-content-center  text-white'>
      <TbPhoneCall />
        </div>
        <div className='ps-4'>
        <div className='fs-4 fw-medium py-1 fstyle'>Call For Help</div>
        <div className='pera py-1 text-secondary'>+(91) 98983 99973
    
        </div>
        </div>
      </div>
      
       
      </div>
      <div className='card  contactbck_color shadow border-0 p-4  py-5' data-aos="zoom-in" data-aos-delay="50"
    data-aos-duration="1500">
        <div className='d-flex align-items-center justify-content-start ps-2'>
      <div className='contactusicon rounded-circle d-flex align-items-center justify-content-center align-content-center  text-white' >
      <TfiEmail />
        </div>
        <div className='ps-4'>
        <div className='fs-4 fw-medium py-1 fstyle'>Mail For Information</div>
        <div className='pera py-2 text-secondary'>sales@belpatrapharmachem.com
       
        </div>
        </div>
      </div>
      </div>
</div>

    </div>
     <div className='col-12 col-lg-8  '>
  <div  className='h-100 d-flex flex-column justify-content-between '>
  <h2 className='text-start fstyle my-2' data-aos="zoom-in" data-aos-delay="50"
    data-aos-duration="1500">
  Get In Touch
   </h2>
   <div className='pera text-secondary' data-aos="zoom-in" data-aos-delay="50"
    data-aos-duration="1500">The page actually lists out what people will get when they ask a question, including a we will try for a short response time of 24 hours or fewer.
    </div>
<div className='contactbck_color shadow rounded' data-aos="zoom-in" data-aos-delay="50"
    data-aos-duration="1500">
<form className='p-5 my-3'>
  <label htmlFor='text' className='d-block'> First Name</label>
  <input type='text' name='name' onChange={getdata} value={obj?.name} placeholder='Type Your First Name' className='w-100 p-2  mt-2 text-secondary border border-secondary-substle form-control' />
  <span className='text-danger d-block' style={{ fontSize: "14px", height: "17px" }} >{errmsg.name}</span>
  <label htmlFor='text' className='d-block'> Your Email Address</label>
  <input type='text' name='email' onChange={getdata} value={obj?.email} placeholder='Type Your Email ' className='w-100 p-2  mt-1 text-secondary border border-secondary-substle form-control' />
  <span className='text-danger  d-block' style={{ fontSize: "14px", height: "17px" }}>{errmsg.email}</span>
  <label htmlFor='number' className='d-block'> Your Phone Number</label>
  <input type='number' name='phonenumber' onChange={getdata} value={obj?.phonenumber} placeholder='Type Phone Number' className='w-100 p-2  mt-1 text-secondary border border-secondary-substle form-control' />
  <span className='text-danger  d-block' style={{ fontSize: "14px", height: "17px" }}>{errmsg.phonenumber}</span>
  <label htmlFor='text' className='d-block'> Message</label>
  <textarea type='text' name='textarea' onChange={getdata} value={obj?.textarea} placeholder='Type your message' className='w-100 p-2 mt-2 text-secondary border border-secondary-substle form-control' />
  <span className='text-danger  d-block' style={{ fontSize: "14px", height: "15px" }}>{errmsg.textarea}</span>
  <br></br>
  <button type='button' className='staff_btn p-2 px-5 fw-bold rounded my-2 mt-2' onClick={savedata}>Submit</button>
</form>
</div>

  </div>

     </div>
      </div>
<div className='py-5'>
  {/* <Heading headingtittle={"Our Location"} headingpera={" An online acquaintance and our location for  keep in touch."}/> */}

<div className='py-3'>
<iframe title='google map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119066.52982230402!2d72.82229625000001!3d21.15920015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e59411d1563%3A0xfe4558290938b042!2sSurat%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1707367688482!5m2!1sen!2sin" width="100%" height="450" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</div>
</div>

   </div>
<Logorun/>
    </>
  )
}

export default HOC(Contactus)