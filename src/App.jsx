import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Test from './components/test.jsx';
import Signin from './components/user-credientials/login.jsx';
import Signup from './components/user-credientials/signup.jsx';
import Home from './components/HomeComponent.jsx';
import ProfileDashboard from './components/user-credientials/profile.jsx';
import Createblog from './components/Blog/Createblog.jsx';
// import Testing from './components/Blog/Testing.jsx';


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} > 
              <Route path="/profile" element={<ProfileDashboard />} />
              <Route path='/writeblog' element={<Createblog/>}/>
              {/* <Route path='/abcd' element={<Testing/>}/> */}
          </Route>
          <Route path='/login' element={<Signin/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path="/test" element={<Test />} />

        </Routes>
      </Router>
      
    </>
  );
}



export default App;