import axios from "axios";
import { useEffect, useState } from "react";
import './style/gallery.css'

const Galary = () => {

    const [gallery, setGallery] = useState([]);

    const fetchGallery = (setGallery) => {
        axios.get("http://localhost:5000/gallery")
            .then((res) => {
                setGallery(res.data)
            })
            .catch((err) => {
                console.log(err);
            });
    }

    useEffect(() => {
        fetchGallery(setGallery);
    }, []);

    return (
        <div className="container-fluid mt-5 p-5 galleryContainer">
            <div className="row my-3">
                <h1>Galllery</h1>
            </div>
            <div className="row my-3">
                <div className="container">
                    <ul className="gallery-block">
                        {
                            gallery.length > 0 ?
                                (
                                    gallery.map((galleryData) => (
                                        <li className="gallery-img" key={galleryData.id}>
                                            <img src={galleryData.img} className="" />
                                        </li>
                                    ))
                                ) : (
                                    <h2 className='h2-text'>Gallery images data not founds</h2>
                                )
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Galary;