import React from 'react'
import banner from './assests/banner.png'
import banner1 from './assests/banner1.png'
import banner2 from './assests/banner2.png'

function Gallery({ productItems, handleAddToCart }) {
    return (
        <div>
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={banner} style={{ height: "450px" }} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={banner1} style={{ height: "450px" }} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={banner2} style={{ height: "450px" }} class="d-block w-100" alt="..." />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
            <div>
                <h2 style={{ border: "1px solid blue", marginTop: "30px", fontFamily: "sans-serif", padding: "5px", textAlign: "center", backgroundColor: "#808080", color: "#f7be6d" }}>You Deserve The Best So Shop With Us And Get It All!
                </h2>
            </div>
            <div className='container row' style={{ margin: "30px", padding: "30px", marginLeft: "100px", marginTop: "0px", backgroundColor: "#E2E5DE" }}>
                {productItems.map((product) => (
                    <div className='card col-7' style={{ margin: "7px", width: "300px", height: "450px", backgroundColor: "#F5F5F5" }}>
                        <img className='card-img-top' style={{ height: "200px", margin: "5px" }} src={product.pic} />
                        <div className='card-body'>
                            <h5 className='card-title'>{product.name}</h5>
                            <p>{product.tagline}</p>
                            <p>{product.cost}</p>
                            <button className='btn btn-primary' style={{ margin: "10px" }} onClick={() => handleAddToCart(product)}>Add to Cart</button>
                        </div>

                    </div>
                ))}

            </div>
        </div>
    )
}

export default Gallery
