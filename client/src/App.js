import './App.css';
import Courses from './components/courses/Courses';
import Profile from './components/profile/Profile';
import Qualifications from './components/qualifications/Qualifications';
import Social from './components/social/Social';
import Title from './components/title/Title';


function App() {
  return (
    <div className="App"> 
      
      <div className='row'>

        <Title/>
        
        <div className='col'>
          <Profile/>      
        </div>

        <div className='col'>
          <Qualifications/>
        </div>

      </div>

      <hr/>

      <Courses />

      <hr/>

      <Social/>

    
    </div>
  );
}



export default App;
