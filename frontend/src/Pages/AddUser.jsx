import {Box, Button, Text,Input, FormLabel, FormControl, Heading} from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/AddUser.css";
import axios from "axios";

export const AddUser = () => {
  const [formData,setFormData]=useState({});
 
  let navigate=useNavigate();

  const handleChange=(e)=>{
      let name=e.target.name;
      let val=e.target.value;
      setFormData({...formData,[name]:val})

  }

  const handleClick=(e)=>{
   e.preventDefault();
  console.log(formData,"formDAta");
  //  axios.post("http://localhost:8080/users/addUser",formData).then((r)=>{
    axios.post("https://process-web-backend.onrender.com/users/addUser",formData).then((r)=>{

    if(r.data==="please enter valid details"){
      alert("please enter valid details")
    }else{
      alert("User Added succesfully");
      navigate("/"); 
    }
    
   }).catch((err)=>{
    alert("Error from Backend")
   })
   
  }
  
  
  return (
    <Box>  
       <Heading fontSize="30px" marginTop={"20px"} marginBottom={"20px"}>Add Products</Heading>
        <FormControl w="40%" className="form" isRequired>    
          <FormLabel ml="7px" >Enter UserName</FormLabel>
          <Input onChange={handleChange} name="userName" type="string" placeholder="Enter UserName" />

          <FormLabel  mt="12px" ml="7px">Enter mobile number</FormLabel>
          <Input onChange={handleChange} name="mobileNo" type="string" placeholder="Enter mobile number"/>

          <FormLabel  mt="12px" ml="7px">Enter email ID</FormLabel>
          <Input onChange={handleChange} name="email" type="email" placeholder="Enter Email ID"/>

          <FormLabel  mt="12px" ml="7px">Enter address</FormLabel>
          <Input onChange={handleChange} name="address" type="string" placeholder="Enter addresss"/>

          <FormLabel  mt="12px" ml="7px">Enter profile pic</FormLabel>
          <Input onChange={handleChange} name="profilePic" type="string" placeholder="Enter profile pic url"/>

          <Button onClick={handleClick}>ADD</Button>
        </FormControl>
      
    </Box>
  );
};
