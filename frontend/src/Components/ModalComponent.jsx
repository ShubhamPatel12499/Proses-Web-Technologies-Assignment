import React,{useState} from 'react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Input,
    Button, FormLabel,FormControl
  } from '@chakra-ui/react'

const ModalComponent = ({handleClick,ID}) => {

const { isOpen, onOpen, onClose } = useDisclosure();
const [formData,setFormData]=useState({})

const initialRef = React.useRef(null)
const finalRef = React.useRef(null);
const handleChange=(e)=>{
  const value=e.target.value;
  const name=e.target.name;
  setFormData({...formData,[name]:value})
}


return (
  <>
    <Button onClick={onOpen} _hover={{"color":"white", "backgroundColor":"black"}}>EDIT</Button>
  
    <Modal
      initialFocusRef={initialRef}
      finalFocusRef={finalRef}
      isOpen={isOpen}
      onClose={onClose}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Edit the USER</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <FormControl>
            <FormLabel>User Name</FormLabel>
            <Input ref={initialRef} name="userName" onChange={handleChange} placeholder='User name' />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Mobile Number</FormLabel>
            <Input name="mobileNo" onChange={handleChange} placeholder='Mobile No' />
          </FormControl>
          
          <FormControl mt={4}>
            <FormLabel>Email</FormLabel>
            <Input name="email" onChange={handleChange} placeholder='Email' />
          </FormControl>

          
          <FormControl mt={4}>
            <FormLabel>Address</FormLabel>
            <Input name="address" onChange={handleChange} placeholder='Address' />
          </FormControl>
           
          <FormControl mt={4}>
            <FormLabel>Profile Pic</FormLabel>
            <Input name="profilePic" onChange={handleChange} placeholder='ProfilePic' />
          </FormControl>

        </ModalBody>

        <ModalFooter>
          <Button colorScheme='blue' mr={3} onClick={()=>handleClick(formData,ID)}>
            Save
          </Button>
          <Button onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  </>
)
 
}

export default ModalComponent