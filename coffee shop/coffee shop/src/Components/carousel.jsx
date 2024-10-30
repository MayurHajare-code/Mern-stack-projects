import './style/header.css'

const Carousel = () => {
    return (
        <>
            <div id="carouselExampleCaptions" class="carousel slide">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="./assets/carosel-img-2.jpg" class="d-block w-100" alt="..." />
                        <div class="carousel-caption slide-2">
                            <h2>Lorem, ipsum dolor.</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo blanditiis temporibus suscipit velit, excepturi voluptas dolores id pariatur doloribus illum molestias ducimus nobis officia facilis unde eius tempore quidem voluptatum.</p>
                            <a href="#" class="px-4 py-2  my-2">View more</a>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="./assets/carosel-img-1.jpg" class="d-block w-100" alt="..." />
                        <div class="carousel-caption">
                            <h2>Lorem, ipsum dolor.</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo blanditiis temporibus suscipit velit, excepturi voluptas dolores id pariatur doloribus illum molestias ducimus nobis officia facilis unde eius tempore quidem voluptatum.</p>
                            <a href="#" class="px-4 py-2  my-2">View more</a>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="./assets/carosel-img-3.jpg" class="d-block w-100" alt="..." />
                        <div class="carousel-caption slide-2">
                            <h2>Lorem, ipsum dolor.</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo blanditiis temporibus suscipit velit, excepturi voluptas dolores id pariatur doloribus illum molestias ducimus nobis officia facilis unde eius tempore quidem voluptatum.</p>
                            <a href="#" class="px-4 py-2  my-2">View more</a>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </>
    );
}



// const carouselItems = [
//     {
//         src: './assets/carosel-img-2.jpg',
//         title: 'Lorem, ipsum dolor.',
//         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo blanditiis temporibus suscipit velit, excepturi voluptas dolores id pariatur doloribus illum molestias ducimus nobis officia facilis unde eius tempore quidem voluptatum.',
//     },
//     {
//         src: './assets/carosel-img-1.jpg',
//         title: 'Lorem, ipsum dolor.',
//         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo blanditiis temporibus suscipit velit, excepturi voluptas dolores id pariatur doloribus illum molestias ducimus nobis officia facilis unde eius tempore quidem voluptatum.',
//     },
//     {
//         src: './assets/carosel-img-3.jpg',
//         title: 'Lorem, ipsum dolor.',
//         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo blanditiis temporibus suscipit velit, excepturi voluptas dolores id pariatur doloribus illum molestias ducimus nobis officia facilis unde eius tempore quidem voluptatum.',
//     },
// ];

// const Carousel = () => {
//     return (
//         <div id="carouselExampleCaptions" className="carousel slide">
//             <div className="carousel-indicators">
//                 {carouselItems.map((item, index) => (
//                     <button
//                         key={index}
//                         type="button"
//                         data-bs-target="#carouselExampleCaptions"
//                         data-bs-slide-to={index}
//                         className={index === 0 ? 'active' : ''}
//                         aria-current={index === 0 ? 'true' : 'false'}
//                         aria-label={`Slide ${index + 1}`}
//                     ></button>
//                 ))}
//             </div>
//             <div className="carousel-inner">
//                 {carouselItems.map((item, index) => (
//                     <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
//                         <img src={item.src} className="d-block w-100" alt={item.title} />
//                         <div className="carousel-caption">
//                             <h2>{item.title}</h2>
//                             <p>{item.description}</p>
//                             <a href="#" className="px-4 py-2 my-2">View more</a>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//             <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
//                 <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//                 <span className="visually-hidden">Previous</span>
//             </button>
//             <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
//                 <span className="carousel-control-next-icon" aria-hidden="true"></span>
//                 <span className="visually-hidden">Next</span>
//             </button>
//         </div>
//     );
// }




export default Carousel;