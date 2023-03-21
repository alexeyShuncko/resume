import PhoneIcon from '@mui/icons-material/Phone';
import TelegramIcon from '@mui/icons-material/Telegram';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import GitHubIcon from '@mui/icons-material/GitHub';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import CodeIcon from '@mui/icons-material/Code';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import { ReactComponent as Skype } from '../images/skype.svg';

export const dataEng = {
  profileText: { name: 'Aleksei Shunko', job: 'Frontend Developer' },
  contactInfo: {
    title: 'Contact Info',
    list: [
      {
        icon: <PhoneIcon />,
        text: '+375 33 335 23 28',
        url: 'tel:+375333352328',
      },
      {
        icon: <TelegramIcon />,
        text: '@alexeyShuncko',
        url: 'https://t.me/alexeyShuncko',
      },
      {
        icon: <GitHubIcon />,
        text: 'github.com/alexeyShuncko',
        url: 'https://github.com/alexeyShuncko',
      },
      {
        icon: <MailOutlineIcon />,
        text: 'shuncko.a@yandex.ru',
        url: 'mailto:shuncko.a@yandex.ru',
      },
      {
        icon: <Skype />,
        text: 'live:shuncko.a',
        url: 'https://join.skype.com/invite/Cal9JwY6Hkzc',
      },
      {
        icon: <LocationOnIcon />,
        text: 'Belarus, Minsk',
        url: 'https://yandex.by/maps/geo/53177019/?ll=27.727503%2C53.882847&z=10.78',
      },
    ],
  },
  education: {
    title: 'Education',
    list: [
      {
        date: '2021-present',
        speciality:
          'Self-education, learning programming. Online course of 100 lessons on React, Redux.',
        university: 'Youtube, lern.javascript, developer.mozilla etc.',
      },
      {
        date: '2010-2015',
        speciality:
          'Design, Construction and Exploitation of Gas and Oil Pipelines and Storages',
        university: 'Polotsk State University',
      },
    ],
  },
  languages: {
    title: 'Languages',
    list: [
      { name: 'Russian', percent: '95%' },
      { name: 'English', percent: '35%' },
      { name: 'Belorussian', percent: '95%' },
    ],
  },
  about: {
    title: 'Profile',
    p1: `I'm a cheerful guy 29 years old who likes programming, outdoor activities, team sports.
    Every day I try to learn something new. If you ask me: "What is the name of your favorite football team?",
     then I will answer - "Arsenal".`,
  },
  experience: {
    title: 'Experience',
    list: [
      {
        date: '2021-present',
        name: 'GitHub, freelance',
        job: 'Frontend Developer',
        description: `Practical application of acquired knowledge. Development of own projects on Github,
       each of which is deployed on Github Pages and Vercel. Execution of test tasks. Freelance.`,
      },
      {
        date: '2015-2022',
        name: 'Gazprom transgaz Belarus',
        job: 'Dispatcher',
        description: `Work in various positions, the last of which is the dispatcher. Responsibilities:
      operational management of gas transportation through the gas transmission system of the branch,
      constant monitoring of the parameters of the gas transmission system of the branch,
      study and application in work of new technologies and normative and technical documents,
      daily responsibility for subordinate personnel and the work they do,  
      accounting for the amount of gas supplied to consumers with
      constant interaction with gas supply organizations of the country.`,
      },
    ],
  },
  skills: {
    title: 'Skills',
    list: [
      { name: 'HTML', percent: '90%' },
      { name: 'CSS, SASS, LESS', percent: '90%' },
      { name: 'Javascript', percent: '90%' },
      { name: 'Typescript', percent: '75%' },
      { name: 'React', percent: '85%' },
      { name: 'React Native', percent: '75%' },
      { name: 'Next.js', percent: '75%' },
      { name: 'Redux', percent: '85%' },
      { name: 'Git, GitHub', percent: '85%' },
      { name: 'Webpack, Gulp', percent: '70%' },
      { name: 'AntDesign, MUI', percent: '85%' },
    ],
  },
  interest: {
    title: 'Interest',
    list: [
      { icon: <SportsEsportsIcon fontSize="large" />, name: 'Gaming' },
      { icon: <SportsSoccerIcon fontSize="large" />, name: 'Football' },
      { icon: <RestaurantIcon fontSize="large" />, name: 'Cooking' },
      { icon: <CodeIcon fontSize="large" />, name: 'Frontend' },
    ],
  },
};
