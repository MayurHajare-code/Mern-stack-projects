import { useEffect, useState } from 'react';
import './style/service.css'
import axios from 'axios';


import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Review = () => {
    const [service, setService] = useState([]);

    const fetchAbout = (setService) => {
        axios.get("http://localhost:5000/services")
            .then((res) => {
                setService(res.data)
            })
            .catch((err) => {
                console.log(err);
            });
    }

    useEffect(() => {
        fetchAbout(setService);
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1

    };


    return (
        <div className="container-fluid mt-5 p-5 testimonialsContainer">
            <div className="row my-3">
                <h1>Testimonials</h1>
            </div>
            <div className="row my-3">
                <ul >
                    <Slider {...settings} className='testimonials-block'>
                        {
                            service.length > 0 ?
                                (
                                    service.map((serviceData) => (
                                        <li className="about-section" key={serviceData.id}>
                                            <div className="service">
                                                <img src={serviceData.img} className="service-img" />
                                                <h2 className="service-name">{serviceData.name}</h2>
                                                <p className="service-text"> &quot;{serviceData.description}&quot;</p>
                                            </div>
                                        </li>
                                    ))
                                ) : (
                                    <h2 className='h2-text'>About us data not founds</h2>
                                )
                        }
                    </Slider>
                </ul>

                {/* <div className="service">
                    <img src={} className="service-img" />
                    <h2 className="service-name">{this.props.name}</h2>
                    <p className="service-text">{this.props.description}</p>
                    <button className="btn">View More</button>
                </div> */}
            </div>
        </div>

    );
}
export default Review;