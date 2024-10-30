import axios from "axios";
import './style/contactForm.css'
import { useEffect, useState } from "react";

const Form = () => {

    // const [about, setAbout] = useState([]);

    // const fetchAbout = (setAbout) => {
    //     axios.get("http://localhost:5000/about")
    //         .then((res) => {
    //             setAbout(res.data)
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         });
    // }

    // useEffect(() => {
    //     fetchAbout(setAbout);
    // }, []);


    return (
        <>
            <div className="container my-5 px-5">
                <div className="row my-3">
                    <h1>Contact with us</h1>
                </div>
                <div className="row my-3">
                    <div className="col-lg-6 px-5 contact-details">
                        <p> <i class="fa-solid fa-location-crosshairs icon"></i> Kalamboli, Navi mumbai, Mumbai - 410 253</p>
                        <p> <i class="fa-solid fa-envelope icon"></i> info@gmail.com</p>
                        <p> <i class="fa-solid fa-phone icon"></i> +91 88793 34267</p>
                        <p> <i class='far fa-clock icon'></i> Monday - Friday : 11:00 AM - 9:00 PM</p>
                        <p> <i class='far fa-clock icon'></i> Sunday : 9:00 AM - 6:00 PM</p>
                        <p> <i class="fa-solid fa-globe icon"></i> www.info-gmail.com</p>
                    </div>
                    <div className="col-lg-6 px-5">
                        <form className='contact-form'>
                            <div class="my-4 ">
                                    <input type="password" class="form-control" id="Name" placeholder="Your Name" />
                            </div>
                            <div class="my-4 ">
                                    <input type="password" class="form-control" id="Name" placeholder="Your Email" />
                            </div>
                            <div class="my-4 ">
                                    <textarea type="password" class="form-control" id="Name" placeholder="Your Address" rows={4} ></textarea>
                            </div>
                            <div class="my-4 ">
                                <button type="submit" class="contact-button mb-3">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* <div className="container my-5">
                <form className='p-5 shadow-lg' style={{"width" :"80%", "margin": "auto"}}>
                    <h1 className="text-center">Contact with us</h1>
                    <div class="my-4 row">
                        <label for="Name" class="col-sm-2 col-form-label">Name</label>
                        <div class="col-sm-10">
                            <input type="password" class="form-control" id="Name" />
                        </div>
                    </div>
                    <div class="my-4 row">
                        <label for="Name" class="col-sm-2 col-form-label">Email</label>
                        <div class="col-sm-10">
                            <input type="password" class="form-control" id="Name" />
                        </div>
                    </div>
                    <div class="my-4 row">
                        <label for="Name" class="col-sm-2 col-form-label">Phone</label>
                        <div class="col-sm-10">
                            <input type="password" class="form-control" id="Name" />
                        </div>
                    </div>
                    <div class="my-4 row">
                        <label for="Name" class="col-sm-2 col-form-label">Address</label>
                        <div class="col-sm-10">
                            <input type="password" class="form-control" id="Name" />
                        </div>
                    </div>
                    <div class="my-4">
                        <button type="submit" class="btn btn-primary mb-3">Submit</button>
                    </div>
                </form>
            </div> */}

        </>
    );
}

export default Form;