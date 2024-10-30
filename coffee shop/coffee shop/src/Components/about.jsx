import axios from 'axios';
import './style/about.css'
import { useEffect, useState } from 'react';

const About = () => {
    const [about, setAbout] = useState([]);

    const fetchAbout = (setAbout) => {
        axios.get("http://localhost:5000/about")
            .then((res) => {
                setAbout(res.data)
            })
            .catch((err) => {
                console.log(err);
            });
    }

    useEffect(() => {
        fetchAbout(setAbout);
    }, []);

    return (
        <>
            <div className="container my-5 px-5">
                <div className="row my-3">
                    <h1>About Coffee Ko</h1>
                </div>
                <div className="row my-3">
                    <ul className="about">
                        {
                            about.length > 0 ?
                                (
                                    about.map((aboutData) => (
                                        <li className="about-section" key={aboutData.id}>
                                             <div className="about-img">
                                                <img src={aboutData.img} alt={aboutData.title} />
                                            </div>
                                            <div className="about-para">
                                                <h2>{aboutData.title}</h2>
                                                <p>{aboutData.description}</p>
                                                <button className=" button">View More</button>
                                            </div>
                                        </li>
                                    ))
                                ) : (
                                    <h2 className='h2-text'>About us data not founds</h2>
                                )
                        }
                    </ul>
                </div>
            </div>
        </>
    );
}

export default About;