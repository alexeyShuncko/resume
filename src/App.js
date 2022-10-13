import './App.css';
import photo from './images/photo1.jpg'
import PhoneIcon from '@mui/icons-material/Phone';
import TelegramIcon from '@mui/icons-material/Telegram';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import GitHubIcon from '@mui/icons-material/GitHub';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import CodeIcon from '@mui/icons-material/Code';
import RestaurantIcon from '@mui/icons-material/Restaurant';

function App() {


  const data = {
    profileText: {name: 'Aleksei Shunko',job: 'Junior Frontend Developer'},
    contactInfo: {
      title: 'Contact Info', 
      list: [
        {icon: <PhoneIcon />, text: '+375 33 335 23 28'},
        {icon: <TelegramIcon />, text: '@alexeyShuncko'},
        {icon: <GitHubIcon />, text: 'github.com/alexeyShuncko'},
        {icon: <MailOutlineIcon />, text: 'shuncko.a@yandex.ru'},
        {icon: <LocationOnIcon />, text: 'Belarus, Minsk'},
      ]},
      education: {title: 'Education', list: [
        {date: '2010-2015', 
        speciality: 'Design, Construction and Exploitation of Gas and Oil Pipelines and Storages', 
        university: 'Polotsk State University'},
        {date: '2010-2015', 
        speciality: 'Design, Construction and Exploitation of Gas and Oil Pipelines and Storages', 
        university: 'Polotsk State University'},
    ]},
    languages: {title: 'Languages', list: [
      {name: 'Russian', percent: '95%'},
      {name: 'English', percent: '35%'},
      {name: 'Bellarusian', percent: '95%'},
    ]},
    about: {title: 'Profile', 
    p1: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
    molestiae aut? Id saepe ratione totam ipsa eius deleniti pariatur voluptatum placeat,
    exercitationem corporis sint soluta repudiandae, fugiat perspiciatis! Quam, esse?`,
    p2: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
    molestiae aut? Id saepe ratione totam ipsa eius deleniti pariatur voluptatum placeat,
    exercitationem corporis sint soluta repudiandae, fugiat perspiciatis! Quam, esse?`},
    experience: {title: 'Experience', list: [
      {date: '2015-2022', name: 'Company Name', job: 'Dispatcher', 
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
      molestiae aut? Id saepe ratione totam ipsa eius deleniti pariatur voluptatum placeat,`},
      {date: '2015-2022', name: 'Gazprom transgaz Belarus,', job: 'Dispatcher', 
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
      molestiae aut? Id saepe ratione totam ipsa eius deleniti pariatur voluptatum placeat,`},
    ]},
    skills: {title: 'Professional Skills', list: [
      {name: 'HTML', percent: '80%'},
      {name: 'CSS', percent: '75%'},
      {name: 'Javascript', percent: '95%'},
      {name: 'Typescript', percent: '65%'},
      {name: 'React', percent: '80%'},
      {name: 'Redux', percent: '75%'},
      {name: 'Git', percent: '80%'},
      {name: 'Webpack', percent: '65%'},
      {name: 'AntDisign, MUI', percent: '80%'},
    ]},
    interest: {title: 'Interest', list: [
      {icon: <SportsEsportsIcon fontSize='large'/>, name: 'Gaming'},
      {icon: <SportsSoccerIcon fontSize='large'/>, name: 'Football'},
      {icon: <RestaurantIcon fontSize='large'/>, name: 'Cooking'},
      {icon: <CodeIcon fontSize='large'/>, name: 'Programming'},
    ]}
  }


  return (
    <div className='container'>
     
      <div className='leftSection'>
      
        <div className='profileText'>
          <div className='imgBx'>
            <img src={photo} alt='My_photo' />
          </div>
          <h2>{data.profileText.name}<br /><span>{data.profileText.job}</span></h2>
        </div>

        <div className='contactInfo'>
          <h3 className='title'>{data.contactInfo.title}</h3>
          <ul>
            { data.contactInfo.list.map(el=> (
                <li key={el.text}>
                <span className='icon'>{el.icon}</span>
                <span className='text'>{el.text}</span>
              </li>
              ))
            }
          </ul>
        </div>

        <div className='contactInfo education'>
          <h3 className='title'>{data.education.title}</h3>
          <ul>
            { data.education.list.map((el, i)=> (
                <li key={i}>
                <h5>{el.date}</h5>
                <h4>{el.speciality}</h4>
                <h4>{el.university}</h4>
              </li>
              ))
            }
          </ul>
        </div>

        <div className='contactInfo language'>
          <h3 className='title'>{data.languages.title}</h3>
          <ul>
            {
              data.languages.list.map(el=> (
                <li key={el.name}>
                <span className='text'>{el.name}</span>
                <span className='percent'>
                  <div style={{ width: el.percent }}></div>
                </span>
              </li>
              ))
            }
          </ul>
        </div>
      </div>


      <div className='rightSection'>
        <div className='about'>
          <h2 className='title2'>{data.about.title}</h2>
          <p>{data.about.p1}</p><br />
          <p>{data.about.p2}</p>
        </div>

        <div className='about'>
          <h2 className='title2'>{data.experience.title}</h2>
          {
            data.experience.list.map(el => (
              <div className='box' key={el.name}>
              <div className='years_company'>
                <h5>{el.date}</h5>
                <h5>{el.name}</h5>
              </div>
              <div className='text'>
                <h4>{el.job}</h4>
                <p>{el.description}</p>
              </div>
            </div>
            ))
          }
        </div>

        <div className='about skills'>
          <h2 className='title2'>{data.skills.title}</h2>
          {
            data.skills.list.map(el=> (
              <div className='box' key={el.name}>
              <h4>{el.name}</h4>
              <div className='percent'>
                <div style={{ width: el.percent }}></div>
              </div>
            </div>
            ))
          }
          </div>

        <div className='about interest'>
          <h2 className='title2'>{data.interest.title}</h2>
          <ul>
            {
              data.interest.list.map(el => (
                <li key={el.name}>
                <span>{el.icon}</span>
                {el.name}
                </li>
              ))
            }
          </ul>
          </div>
      </div>

    </div>
  );
}

export default App;
