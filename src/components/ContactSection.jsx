import React, { useRef, useState } from "react";
import { AiFillGithub } from 'react-icons/ai'
import { BiLogoReact } from 'react-icons/bi'
import { FaNodeJs } from 'react-icons/fa'
import emailjs from "@emailjs/browser"
import { motion } from "framer-motion";
function ContactSection() {
    const formRef = useRef();
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { target } = e;
        const { name, value } = target;

        setForm({
            ...form,
            [name]: value,
        });
    };
    //JW-1ppZFU-7jBi_jD
    //template_ku837ts

    //service_xuliy9e
    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs
            .send(
                "service_xuliy9e",
                "template_ku837ts",
                {
                    from_name: form.name,
                    to_name: "Lanre-abass Akeem",
                    from_email: form.email,
                    to_email: "lanreabassab1@gmail.com.",
                    message: form.message,
                },
                "JW-1ppZFU-7jBi_jD"
            )
            .then(
                () => {
                    setLoading(false);
                    alert("Thank you. I will get back to you as soon as possible.");

                    setForm({
                        name: "",
                        email: "",
                        message: "",
                    });
                },
                (error) => {
                    setLoading(false);
                    console.error(error);

                    alert("Ahh, something went wrong. Please try again.");
                }
            );
    };




    return (
        <div className="contact-section wrapper">
            <div className="body">
                <div className="contact-section-content content">
                    <h2 className="title">Talk To Me </h2>
                    <p className="text">Contact me </p>
                    <div
                        className=""
                    >
                        <div

                            className=''
                        >

                           
                            <form
                                ref={formRef}
                                onSubmit={handleSubmit}
                                className='contact-form'
                            >
                                <label className='contact-form-label'>
                                    <span className=''>Your Name</span>
                                    <input
                                        type='text'
                                        name='name'
                                        value={form.name}
                                        onChange={handleChange}
                                        placeholder="What's your name?"
                                        className=' '
                                    />
                                </label>
                                <label className='contact-form-label'>
                                    <span className=''>Your email</span>
                                    <input
                                        required
                                        type='email'
                                        name='email'
                                        value={form.email}
                                        onChange={handleChange}
                                        placeholder="What's your Email address?"
                                        className=''
                                    />
                                </label>
                                <label className='contact-form-label'>
                                    <span className=''>Your Message</span>
                                    <textarea
                                        rows={7}
                                        name='message'
                                        value={form.message}
                                        onChange={handleChange}
                                        placeholder='What you want to say?'
                                        className=' '
                                    />
                                </label>

                                <button
                                    type='submit'
                                    className=''
                                >
                                    {loading ? "Sending..." : "Send"}
                                </button>
                            </form>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactSection;