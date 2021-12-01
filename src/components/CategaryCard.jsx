import React from 'react'
import { Link } from 'react-router-dom'
import CategoryImage from "../assets/image 1.png"

const CategoryCard = () => {
    return (
        <Link to="category"> 
        <div className="category-card">
            <img src={CategoryImage} alt="" />
            <div className="details-section">
                <h1>Electronics</h1>
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis numquam hic animi, nesciunt cum magni illo! Aspernatur, voluptate repellendus veritatis iusto earum quis tempora, laborum et aut dolor accusantium, omnis corporis blanditiis. Tempora maiores quas voluptates nobis aspernatur corrupti error explicabo nesciunt? Voluptatum distinctio illo pariatur qui ipsa asperiores deleniti.
                </p>
            </div>
        </div>
        </Link>
    )
}

export default CategoryCard
