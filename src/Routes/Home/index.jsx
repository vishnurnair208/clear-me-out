import { Link } from "react-router-dom"
import CategoryCard from "../../components/CategaryCard"
import CategoryImage from "../../assets/image 1.png"






const categoryList = [
    {
        image : CategoryImage,
        title: "Electronics",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis numquam hic animi, nesciunt cum magni illo! Aspernatur, voluptate repellendus veritatis iusto earum quis tempora, laborum et aut dolor accusantium, omnis corporis blanditiis. Tempora maiores quas voluptates nobis aspernatur corrupti error explicabo nesciunt? Voluptatum distinctio illo pariatur qui ipsa asperiores deleniti."
    },
    {
        image : CategoryImage,
        title: "Electrical",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis numquam hic animi, nesciunt cum magni illo! Aspernatur, voluptate repellendus veritatis iusto earum quis tempora, laborum et aut dolor accusantium, omnis corporis blanditiis. Tempora maiores quas voluptates nobis aspernatur corrupti error explicabo nesciunt? Voluptatum distinctio illo pariatur qui ipsa asperiores deleniti."
    },
    {
        image : CategoryImage,
        title: "Electronics",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis numquam hic animi, nesciunt cum magni illo! Aspernatur, voluptate repellendus veritatis iusto earum quis tempora, laborum et aut dolor accusantium, omnis corporis blanditiis. Tempora maiores quas voluptates nobis aspernatur corrupti error explicabo nesciunt? Voluptatum distinctio illo pariatur qui ipsa asperiores deleniti."
    },
    {
        image : CategoryImage,
        title: "Electronics",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis numquam hic animi, nesciunt cum magni illo! Aspernatur, voluptate repellendus veritatis iusto earum quis tempora, laborum et aut dolor accusantium, omnis corporis blanditiis. Tempora maiores quas voluptates nobis aspernatur corrupti error explicabo nesciunt? Voluptatum distinctio illo pariatur qui ipsa asperiores deleniti."
    },
    {
        image : CategoryImage,
        title: "Electronics",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis numquam hic animi, nesciunt cum magni illo! Aspernatur, voluptate repellendus veritatis iusto earum quis tempora, laborum et aut dolor accusantium, omnis corporis blanditiis. Tempora maiores quas voluptates nobis aspernatur corrupti error explicabo nesciunt? Voluptatum distinctio illo pariatur qui ipsa asperiores deleniti."
    },
    {
        image : CategoryImage,
        title: "Electronics",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis numquam hic animi, nesciunt cum magni illo! Aspernatur, voluptate repellendus veritatis iusto earum quis tempora, laborum et aut dolor accusantium, omnis corporis blanditiis. Tempora maiores quas voluptates nobis aspernatur corrupti error explicabo nesciunt? Voluptatum distinctio illo pariatur qui ipsa asperiores deleniti."
    }
]

const Home = () => {
    return (
        // <div className="page-section">
        //     <h1>Home</h1>
        //     <Link to="category">Category</Link>
        // </div>
        <div className="container">
            
            <div className="category-container">

                {categoryList.map((data,i)=><CategoryCard {...data} key={i}/>)}
               
                
             
            </div>
            
        </div>
    )
}

export default Home
