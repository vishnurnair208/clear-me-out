
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Routes/Home';
import Category from './Routes/Category';
import Login from './Routes/Login';
import Questions from './Routes/Questions';
import Signup from './Routes/Signup';
import Askquestion from './Routes/Askquestions/Askquestion';
import Postanswer from './Routes/Postanswer';
import Feedback from './Routes/Feedback';


//home page

 //catagory page

 //question page


//login


//signup page

//Ask questions 

//Post Answer 

//feedback

function App() {
  return (
    <div className="App">
      <header>
        <h1>header</h1>
      </header>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="category" element={<Category />} />
        <Route path="login" element={<Login />} />
        <Route path="questions" element={<Questions />} />
        <Route path="signup" element={<Signup />} />
        <Route path="askquestion" element={<Askquestion />} />
        <Route path="postanswer" element={<Postanswer />} />
        <Route path="feedback" element={<Feedback />} />
      </Routes>
    </div>
  );
}

export default App;
