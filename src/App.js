import './App.css';
import photo from './images/photo1.jpg'
import PhoneIcon from '@mui/icons-material/Phone';
import TelegramIcon from '@mui/icons-material/Telegram';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function App() {



  return (
    <div className='container'>
      <div className='leftSection'>
        <div className='profileText'>
          <div className='imgBx'>
            <img src={photo}  alt='My_photo' />
          </div>
          <h2>Aleksei Shunko<br/><span>Junior Frontend Developer</span></h2>
        </div>
        <div className='contactInfo'>
          <h3 className='title'>Contact Info</h3>
          <ul>
            <li>
              <span className='icon'><PhoneIcon /></span>
              <span className='text'>+375 33 335 23 28</span>
            </li>
            <li>
              <span className='icon'><TelegramIcon /></span>
              <span className='text'>https://t.me/alexeyShuncko</span>
            </li>
            <li>
              <span className='icon'><MailOutlineIcon /></span>
              <span className='text'>shuncko.a@yandex.ru</span>
            </li>
            <li>
              <span className='icon'><LocationOnIcon /></span>
              <span className='text'>Belarus, Minsk</span>
            </li>
          </ul>
        </div>
        <div className='contactInfo education'>
          <h3 className='title'>Education</h3>
          <ul>
            <li>
            <h5>2010-2015</h5>
            <h4>Design, Construction and Exploitation of Gas and Oil Pipelines and Storages</h4>
            <h4>Polotsk State University</h4>
            </li>
            <li>
            <h5>2010-2015</h5>
            <h4>Design, Construction and Exploitation of Gas and Oil Pipelines and Storages</h4>
            <h4>Polotsk State University</h4>
            </li>
            
          </ul>
        </div>

        <div className='contactInfo language'>
          <h3 className='title'>Languages</h3>
          <ul>
            <li>
                <span className='text'>Russian</span>
                <span className='percent'>
                <div style={{width: '95%'}}></div>
                </span>
            </li>
            <li>
                <span className='text'>English</span>
                <span className='percent'>
                  <div style={{width: '35%'}}></div>
                </span>
            </li>
          </ul>
          </div>
      </div>
      <div className='rightSection'>
        <div className='about'>
          <h2 className='title2'>Profile</h2>
          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, 
            molestiae aut? Id saepe ratione totam ipsa eius deleniti pariatur voluptatum placeat, 
            exercitationem corporis sint soluta repudiandae, fugiat perspiciatis! Quam, esse?</p><br/>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, 
            molestiae aut? Id saepe ratione totam ipsa eius deleniti pariatur voluptatum placeat, 
            exercitationem corporis sint soluta repudiandae, fugiat perspiciatis! Quam, esse?</p>
        </div>
        <div className='about'>
        <h2 className='title2'>Experience</h2>
        <div className='box'>
          <div className='years_company'>
            <h5>2015-2022</h5>
            <h5>Company Name</h5>
          </div>
        </div>
        </div>
      </div>
     
       
    </div>
  );
}

export default App;
