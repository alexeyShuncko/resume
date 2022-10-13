import PhoneIcon from '@mui/icons-material/Phone';
import TelegramIcon from '@mui/icons-material/Telegram';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import GitHubIcon from '@mui/icons-material/GitHub';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import CodeIcon from '@mui/icons-material/Code';
import RestaurantIcon from '@mui/icons-material/Restaurant';









export const dataEng = {
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
        {date: '2021-present', 
        speciality: 'Self-education, learning programming. Online course of 100 lessons on React, Redux.', 
        university: 'Youtube, lern.javascript, developer.mozilla etc.'},
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
    p1: `I'm a cheerful guy 29 years old who likes programming, outdoor activities, team sports.
    Every day I try to learn something new. If you ask me: “What is the name of your favorite football team?”,
     then I will answer - “Arsenal”.`},
    experience: {title: 'Experience', list: [
      {date: '2021-present', name: 'GitHub, freelance', job: 'Junior Frontend Developer', 
      description: `Practical application of acquired knowledge. Development of own projects on github,
       each of which is deployed on github pages. Execution of test tasks. Freelance.`},
      {date: '2015-2022', name: 'Gazprom transgaz Belarus,', job: 'Dispatcher', 
      description: `Work in various positions, the last of which is the dispatcher. Responsibilities:
      operational management of gas transportation through the gas transmission system of the branch,
      constant monitoring of the parameters of the gas transmission system of the branch,
      study and application in work of new technologies and normative and technical documents,
      daily responsibility for subordinate personnel and the work they do,  
      accounting for the amount of gas supplied to consumers with
      constant interaction with gas supply organizations of the country.`},
    ]},
    skills: {title: 'Professional Skills', list: [
      {name: 'HTML', percent: '90%'},
      {name: 'CSS, SASS', percent: '85%'},
      {name: 'Javascript', percent: '90%'},
      {name: 'Typescript', percent: '70%'},
      {name: 'React', percent: '85%'},
      {name: 'Redux', percent: '85%'},
      {name: 'Git', percent: '85%'},
      {name: 'Webpack', percent: '70%'},
      {name: 'AntDesign, MUI', percent: '85%'},
    ]},
    interest: {title: 'Interest', list: [
      {icon: <SportsEsportsIcon fontSize='large'/>, name: 'Gaming'},
      {icon: <SportsSoccerIcon fontSize='large'/>, name: 'Football'},
      {icon: <RestaurantIcon fontSize='large'/>, name: 'Cooking'},
      {icon: <CodeIcon fontSize='large'/>, name: 'Programming'},
    ]}
  }
