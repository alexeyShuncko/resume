import PhoneIcon from '@mui/icons-material/Phone';
import TelegramIcon from '@mui/icons-material/Telegram';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import GitHubIcon from '@mui/icons-material/GitHub';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import CodeIcon from '@mui/icons-material/Code';
import RestaurantIcon from '@mui/icons-material/Restaurant';





export const dataRus = {
    profileText: {name: 'Алексей Шунько',job: 'Junior Frontend Developer'},
    contactInfo: {
      title: 'Контакты', 
      list: [
        {icon: <PhoneIcon />, text: '+375 33 335 23 28'},
        {icon: <TelegramIcon />, text: '@alexeyShuncko'},
        {icon: <GitHubIcon />, text: 'github.com/alexeyShuncko'},
        {icon: <MailOutlineIcon />, text: 'shuncko.a@yandex.ru'},
        {icon: <LocationOnIcon />, text: 'Беларусь, Минск'},
      ]},
      education: {title: 'Образование', list: [
        {date: '2021-настоящее время', 
        speciality: 'Самообразование, изучение программирования. Онлайн Курс из 100 уроков по React, Redux', 
        university: 'Youtube, lern.javascript, developer.mozilla etc.'},
        {date: '2010-2015', 
        speciality: 'Проектирование, сооружение и эксплуатация газо-нефтепроводов и газо-нефтехранилищ', 
        university: 'Полоцкий Государственный Университет'},
    ]},
    languages: {title: 'Языки', list: [
      {name: 'Русский', percent: '95%'},
      {name: 'Английский', percent: '35%'},
      {name: 'Беларусский', percent: '95%'},
    ]},
    about: {title: 'Обо мне', 
    p1: `Жизнерадостный парень 29 лет, которому нравится программирование, активный отдых на природе, 
    командные спортивные игры. Каждый день стараюсь узнавать что-то новое. 
    Если меня спросить: "Как называется твоя любимая футбольная команда?", то я отвечу – "Арсенал".`},
    experience: {title: 'Опыт', list: [
      {date: '2021-настоящее время', name: 'GitHub, фриланс', job: 'Junior Frontend Developer', 
      description: `Практическое применение получаемых знаний. 
      Разработка собственных проектов на GitHub, каждый из которых развёрнут на GitHub Pages. 
      Выполнение тестовых заданий. Фриланс.`},
      {date: '2015-2022', name: 'Газпром трансгаз Беларусь,', job: 'Диспетчер', 
      description: `Работа на различных должностях, последняя из которых диспетчер. Обязанности: 
      оперативное руководство транспортировкой газа по газотранспортной системе филиала,
      постоянный контроль за параметрами газотранспортной системы филиала,
      изучение и применение в работе новых технологий и нормативно-технических документов,
      ежедневное несение ответственности за подчиненный персонал и выполняемую ими работу,
      учет количества газа, поставленного потребителям с постоянным взаимодействием с газоснабжающими 
      организациями страны.`},
    ]},
    skills: {title: 'Профессиональные навыки', list: [
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
    interest: {title: 'Интересы', list: [
      {icon: <SportsEsportsIcon fontSize='large'/>, name: 'Игры'},
      {icon: <SportsSoccerIcon fontSize='large'/>, name: 'Футбол'},
      {icon: <RestaurantIcon fontSize='large'/>, name: 'Готовка'},
      {icon: <CodeIcon fontSize='large'/>, name: 'Фронтенд'},
    ]}
  }
