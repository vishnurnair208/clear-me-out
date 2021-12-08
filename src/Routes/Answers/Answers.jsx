import React from 'react'
import "./Answer.css"

const Answers = () => {
    return (
        <div className="answer-category">
            <div className="question-field">
                <p className="question">
                   1. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem, minus magnam sapiente maxime maiores modi labore eligendi voluptatibus corporis corrupti quisquam aliquid asperiores illum, iusto provident atque iure eveniet debitis.?
                </p>
                <div className="keywords">
                    <button>circuits</button>
                    <button>circuits</button>
                    <button>circuits</button>
                </div>
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
                        <div className="date-container">
                                <div className="date">Date:</div>
                                <div className="date-value">11/12/2021</div>
                        </div>
                </div>
            </div>
            <div className="answer-area">
                <div className="answer-field">
                    <h3>Vishnu</h3>
                    <div className="date-container">
                            <div className="date">Date:</div>
                            <div className="date-value">11/12/2021</div>
                    </div>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere suscipit temporibus, maxime explicabo animi autem excepturi aperiam consectetur quo nemo laborum, culpa vitae praesentium perferendis debitis! Distinctio esse explicabo ducimus?</p>
                </div>
                <div className="answer-field">
                    <h3>Vishnu</h3>
                    <div className="date-container">
                            <div className="date">Date:</div>
                            <div className="date-value">11/12/2021</div>
                    </div>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere suscipit temporibus, maxime explicabo animi autem excepturi aperiam consectetur quo nemo laborum, culpa vitae praesentium perferendis debitis! Distinctio esse explicabo ducimus?</p>
                </div>
                <div className="answer-field">
                    <h3>Vishnu</h3>
                    <div className="date-container">
                            <div className="date">Date:</div>
                            <div className="date-value">11/12/2021</div>
                    </div>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere suscipit temporibus, maxime explicabo animi autem excepturi aperiam consectetur quo nemo laborum, culpa vitae praesentium perferendis debitis! Distinctio esse explicabo ducimus?</p>
                </div>
            </div>
        </div>
    )
}

export default Answers
