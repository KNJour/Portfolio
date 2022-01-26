import react, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import emailjs from 'emailjs-com';
import 'react-toastify/dist/ReactToastify.min.css';
import { useForm } from 'react-hook-form';
import React from 'react';

const Contact = () => {

    const {register,handleSubmit,reset, formState: { errors }} = useForm();

    const toastifyProcessSuccessful = () => {
        toast('Message Sent!', {
          position: 'bottom-right',
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,  
          draggable: false,
          className: 'submit-feedback success',
          toastId: 'notifyToast'
        });
      };

    const onSubmit = async (data) => {
        const {name, email, message} = data;
        console.log("is this working?");
        console.log("name: " + name + " email: " + email + " message: " + message);

        try { 
            
            const templateParameters = {name, email, message};

            await emailjs.send(
                process.env.REACT_APP_SERVICE_ID,
                process.env.REACT_APP_TEMPLATE_ID,
                templateParameters,
                process.env.REACT_APP_USER_ID
            );
            
            reset();
            toastifyProcessSuccessful(); } catch (e) {
                console.log("ERROR CHECK: " + e);
            }  
         };



        return(
            <div>
                <div className="contact-form-container">
                    <div className="row">
                        <div className="col-12 ">
                            <div className="contactHeader">
                                <h1 id="skillStart">Contact</h1>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 ">
                            <div className="contactInfo">
                                <h1 id="contactStart">Email: <span className="darkBlue">KNJournell@gmail.com</span></h1>
                                <h2 id="phone">Phone: <span className="darkBlue">(571)-288-7110</span></h2>
                                <h2 className="makeBlue" id="git">GitHub: <a href="https://github.com/KNJour" className="darkBlue" target="_blank">GitHub.com/KNJour</a></h2>
                            </div>
                        </div>
                    </div>
                    <div className="container mt-4 text-center">
                        <h2 id="portfolio-link">Or send me a quick message  here</h2>
                        <div className="row">
                            <div className="col-12 text-center">
                                <div className="formWrapper">
                                    <form id="contact-form" onSubmit={handleSubmit(onSubmit)} noValidate>
                                        <div className="row formRow">
                                            {/* NAME ROW */}
                                            <div className="col-12 d-flex text-center">
                                                <input className="form-control formInput" type="text" placeholder="Name" name="name"
                                                {...register('name', {
                                                    required: { value: true, message: 'Sorry but you have to put SOMETHING for your name.' },
                                                    maxLength: { value: 50, message: 'Is that really your name? Must be under 50 characters.'}
                                                })} />
                                                {errors.name && <span className="errorMessage">{errors.name.message}</span>}
                                            </div>
                                        </div>
                                        <div className="row formRow">
                                               {/* Email ROW */}
                                            <div className="col-12">
                                                <input className="form-control formInput" type="email" placeholder="Email Address" name="email"
                                                {...register('email', {
                                                    required: true, pattern:  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ 
                                                })} />
                                                {errors.email && (<span className='errorMessage'>Invalid Email</span> )}
                                            </div>
                                        </div>
                                        <div className="row formRow">
                                            {/* Content */}
                                            <div className="col-12">
                                                <textarea className="form-control formInput" rows={5} placeholder="Message" name="message"
                                                {...register('message', { required: true })}/>
                                                {errors.message && <span className='errorMessage'>Please enter something in this box. Anything. Live your dreams. </span>}
                                            </div>
                                        </div>
                                        <button type="button"className="contactSubmit btn-dark text-light">Submit</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <h2 id="portfolio-link">Thanks</h2>
                    </div>
                </div>
            </div>
        )
    }

export default Contact;