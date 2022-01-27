
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import React, { useState } from 'react';

const Contact = () => {
    // STATE FOR FUTURE FEATURE MAYBE BUT PROBABLY NOT
    const [contactForm, setContactForm] = useState({
        name: "",
        email: "",
        message: ""
    });
  
    const changeHandler = e => {
        setContactForm({...contactForm, [e.target.name]: e.target.value});
    } 

    const {register, handleSubmit, reset, formState: {errors}} = useForm();

    const toastifyMessageSent = () => {
        toast('Your message has been sent, thank you!', {
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

    const onSubmit = async (formData) => {
        const {name, email, message} = formData;
        console.log("something is happening")
        try {
            const templateParameters = {name, email, message};
            await emailjs.send(
                process.env.REACT_APP_SERVICE_ID,
                process.env.REACT_APP_TEMPLATE_ID,
                templateParameters,
                process.env.REACT_APP_USER_ID
            );
            reset();
            toastifyMessageSent();
        } catch (e) {
            console.log("an error occured: " + e);
        }
    };
      


    // EMAIL CONTACT FORM

    
  return(
        <div className="ContactForm">
            <div className="row">
                <div className="col-12 ">
                    <div className="contactHeader">
                        <h1 id="contactStart">Contact</h1>
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
                <h2 id="fancyText">Or send me a quick message  here</h2>
                <div className="row">
                    <div className="col-12 text-center">
                        <div className="formWrapper">
                             <form id='contact-form' onSubmit={handleSubmit(onSubmit)} noValidate>
                             {/* NAME ROW */}
                                 <div className="row formRow">
                                        <div className="col-12">
                                            <input type="text" className="form-control formInput" name="name" placeholder="Name"
                                            {...register("name", {required: { value: true, message: "Stop checking if I did validations and enter your name." }, maxLength: { value: 50, message: "50 characters or less please!"}
                                            })} />
                                            {errors.name && <span className="errorMessage">{errors.name.message}</span>}
                                        </div>
                                </div>
                                                {/* EMAIL ROW */}
                                <div className="row formRow">
                                    <div className="col-12">
                                        <input type="email"name="email" className="form-control formInput" placeholder="Email address" {...register("email", {required: true, pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ })} />
                                        {errors.email && ( <span className="errorMessage">Invalid Email</span>)}
                                    </div>
                                </div>
                                <div className="row formRow">
                                    <div className="col-12">
                                        <textarea rows={6} className="form-control formInput" placeholder="Message" name="message" {...register("message", {required: true})}/>
                                        {errors.message && <span className="errorMessage">Leave a message, anything you want. ANYTHING. Live your dreams.</span>}
                                    </div>
                                </div>
                                <button className="submit-btn btn-dark" type="submit">Send</button>
                            </form>
                        </div>
                        <ToastContainer/>
                    </div>
                </div>
                <h2 id="fancyText">Thanks</h2>
            </div>
        </div>
   
)
    }

export default Contact;