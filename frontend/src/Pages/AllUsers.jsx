import React, { useEffect,useState} from 'react';
import {Heading,Table, Box, Thead,Tbody,Th,Tr,Td,Button} from "@chakra-ui/react";
import axios from "axios";
import ModalComponent from '../Components/ModalComponent';



const AllUsers = () => {
  const [data,setData]=useState([]);

  const GET=()=>{
    axios.get("https://process-web-backend.onrender.com/users/getUser").then((r)=>{
     
      setData(r.data);
    }).catch((err)=>{
      alert("Some error in getting")
    })
  }

  useEffect(()=>{
      GET();
  },[])

  const handleDelete=(ind)=>{
   
      axios.delete(`https://process-web-backend.onrender.com/users/${ind}`).then((r)=>{
        
        GET();
      })
  }
 
  
 const handleClick=(formDAta,ID)=>{
  
  axios.patch(`https://process-web-backend.onrender.com/users/${ID}`,formDAta).then((r)=>{

    if(r.data==="please enter valid details"){
      alert("Please Enter Valid Details!")
    }else{
      alert("Succesfully Edited the info");
      GET();
    }
    
  }).catch((err)=>{
    alert("Error in Patch request")
  })
 }


  return (
    <div>
      <Heading mt="20px">AllUsers</Heading>
      <Box mt="30px">
        <Table cellSpacing="2">
              <Thead bg={"red.100"} >
                <Tr>
                  <Th fontSize="16px">SR. No</Th>
                  <Th fontSize="16px">Profile Pic</Th>
                  <Th fontSize="16px">UserName</Th>
                  <Th fontSize="16px">Mobile No.</Th>
                  <Th fontSize="16px">Email</Th>
                  <Th fontSize="16px">Address</Th>
                  <Th fontSize="16px">Edit</Th>
                  <Th fontSize="16px">Delete</Th>
                </Tr>
              </Thead>
              <Tbody bg={"blue.100"}>
              {
                 data.length>0 && data.map((item,ind)=>{
                      return(
                      <Tr key={ind}>
                        <Td>{ind+1}</Td>
                        <Td><img src={item.profilePic} alt="avatar" width="30%" height="30%"/></Td>
                        <Td>{item.userName}</Td>
                        <Td>{item.mobileNo}</Td>
                        <Td>{item.email}</Td>
                        <Td>{item.address}</Td>
                        <Td><ModalComponent handleClick={handleClick} ID={item._id} /></Td>
                        <Td><Button onClick={()=>handleDelete(item._id)} _hover={{"color":"white", "backgroundColor":"black"}}>DELETE</Button></Td>
                        
                      </Tr>
                      )
                 })
              }
              </Tbody>
        </Table>
        

      </Box>

    </div>
  )
}

export default AllUsers