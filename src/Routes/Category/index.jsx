import React from 'react'
import { Link } from 'react-router-dom'
import CategoryImage from "../../assets/image 1.png"
import "./style.css"
import { useParams } from 'react-router-dom'

const Category = () => {
    const params = useParams();

    return (
        <div className="category-page-container ">
        <div className="page-section-category">
            <div className="page-image-container">
                <img src={CategoryImage} alt="" />
            </div>
            <div className="page-description">
                <h1>Electronics</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique adipisci, ducimus reiciendis distinctio officiis facilis eligendi perferendis quo beatae, cupiditate dolore vel veniam. Nostrum dolore cum quidem voluptatum pariatur ex.consectetur adipisicing elit. Similique adipisci, ducimus reiciendis distinctio officiis facilis eligendi perferendis quo beatae, cupiditate dolore vel veniam. Nostrum dolore cum quidem voluptatum pariatur ex.consectetur adipisicing elit. Similique adipisci, ducimus reiciendis distinctio officiis facilis eligendi perferendis quo beatae, cupiditate dolore vel veniam. Nostrum dolore cum quidem voluptatum pariatur ex.</p>
                <h1 className="key">KEYS</h1>
                <div className="key-container">
                    <button>CIRCUITS</button>
                    <button>CIRCUITS</button>
                    <button>CIRCUITS</button>
                    <button>CIRCUITS</button>
                    <button>CIRCUITS</button>
                    <button>CIRCUITS</button>
                </div>
            </div>
        </div>
        <div className="questions-container">
            <div>
                <p>1.Lorem ipsum dolor sit amet consectetur  itaque nihil dolor perferendis ipsam ut mollitia ea nesciunt dolore laborum unde esse maiores iste facere veritatis odio tenetur?</p>
                    <div className="comment">
                        <div className="answer-container">
                            <div className="pen-icon"></div>
                            <div className="answer-count">3</div>
                            <div className="answer">Answer</div>
                       </div>
                       <div className="answer-container">
                            <div className="view-icon"></div>
                            <div className="answer-count">315</div>
                            <div className="answer">views</div>
                       </div>
                   </div>
                
            </div>
            <div>
                <p>1.Lorem ipsum dolor sit amet consectetur  itaque nihil dolor perferendis ipsam ut mollitia ea nesciunt dolore laborum unde esse maiores iste facere veritatis odio tenetur?</p>
                <div className="comment">
                        <div className="answer-container">
                            <div className="pen-icon"></div>
                            <div className="answer-count">3</div>
                            <div className="answer">Answer</div>
                       </div>
                       <div className="answer-container">
                            <div className="view-icon"></div>
                            <div className="answer-count">315</div>
                            <div className="answer">views</div>
                       </div>
                   </div>
            </div>
            <div>
                <p>1.Lorem ipsum dolor sit amet consectetur  itaque nihil dolor perferendis ipsam ut mollitia ea nesciunt dolore laborum unde esse maiores iste facere veritatis odio tenetur?</p>
                <div className="comment">
                        <div className="answer-container">
                            <div className="pen-icon"></div>
                            <div className="answer-count">3</div>
                            <div className="answer">Answer</div>
                       </div>
                       <div className="answer-container">
                            <div className="view-icon"></div>
                            <div className="answer-count">315</div>
                            <div className="answer">views</div>
                       </div>
                   </div>
            </div>
        </div>
        </div>
    )
}

export default Category
