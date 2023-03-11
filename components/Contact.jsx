import { Box, Button, FormControl, Heading, Input, Textarea } from '@chakra-ui/react'
import React, { useRef, useState } from 'react'
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
const Contact = () => {
    const ref = useRef();
    const [success, setSuccess] = useState(null)
    const { register, handleSubmit, watch, formState: { errors, isDirty, isValid } } = useForm();
    const onSubmit = (formData) => {
        emailjs.sendForm(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_YOUR_TEMPLATE_ID , ref.current, process.env.NEXT_PUBLIC_YOUR_PUBLIC_KEY)
            .then((result) => {
                console.log(result.text)
                setSuccess(true);

            }, (error) => {
                console.log(error.text)
                setSuccess(false);
            })
    }
    const styleInput = {
        minWidth: '100px',
        height: '100%',
        padding: '.5rem ',
        borderRadius: '5px',
        color:'gray'
    }
    const styles = {
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
         margin: '2rem 0'
    }
  return (
      <Box color={'white'}>
          <Heading color='white' fontFamily={'heading'}>Contact</Heading>
          <form ref={ref} onSubmit={handleSubmit(onSubmit)} style={styles}>
              
          <input style={styleInput} {...register('name', {
              required:'true'
          })}   type="text"  placeholder='Enter Name' />

              <input style={styleInput}  {...register('email', {
              required:'true'
          })}  type="email"  placeholder='Enter Email' />
          <textarea style={styleInput}  {...register("message", {
              required: { value: true, message: "message is required" },
              minLength: { value: 10, message: "message is too Short" },
              maxLength: { value: 20000, message: "messsage is too long" },
          })}  placeholder='Enter Message' />
              
          {errors.message && (
            <Text>{errors.message}</Text>
          )}
          <button  style={{backgroundColor:'teal', padding:'.5rem'}}  type='submit'  disabled={!isDirty || !isValid} >Send</button>
          </form>
    </Box>
  )
}

export default Contact