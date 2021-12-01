import { Link } from "react-router-dom"
import CategoryCard from "../../components/CategaryCard"

const Home = () => {
    return (
        // <div className="page-section">
        //     <h1>Home</h1>
        //     <Link to="category">Category</Link>
        // </div>
        <div className="container">
            
            <div className="category-container">
               
                <CategoryCard/>
                <CategoryCard/>
                <CategoryCard/>
                <CategoryCard/>
                <CategoryCard/>
                <CategoryCard/>
             
            </div>
            
        </div>
    )
}

export default Home
