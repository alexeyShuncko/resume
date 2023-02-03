import React from 'react';
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

export const dataRus = {
  profileText: { name: 'Алексей Шунько', job: 'Junior Frontend Developer' },
  contactInfo: {
    title: 'Контакты',
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
        text: 'Беларусь, Минск',
        url: 'https://yandex.by/maps/geo/53177019/?ll=27.727503%2C53.882847&z=10.78',
      },
    ],
  },
  education: {
    title: 'Образование',
    list: [
      {
        date: '2021-настоящее время',
        speciality:
          'Самообразование, изучение программирования. Онлайн Курс из 100 уроков по React, Redux',
        university: 'Youtube, lern.javascript, developer.mozilla etc.',
      },
      {
        date: '2010-2015',
        speciality:
          'Проектирование, сооружение и эксплуатация газо-нефтепроводов и газо-нефтехранилищ',
        university: 'Полоцкий Государственный Университет',
      },
    ],
  },
  languages: {
    title: 'Языки',
    list: [
      { name: 'Русский', percent: '95%' },
      { name: 'Английский', percent: '35%' },
      { name: 'Белорусский', percent: '95%' },
    ],
  },
  about: {
    title: 'Обо мне',
    p1: `Жизнерадостный парень 29 лет, которому нравится программирование, активный отдых на природе, 
    командные спортивные игры. Каждый день стараюсь узнавать что-то новое. 
    Если меня спросить: "Как называется твоя любимая футбольная команда?", то я отвечу – "Арсенал".`,
  },
  experience: {
    title: 'Опыт',
    list: [
      {
        date: '2021-настоящее время',
        name: 'GitHub, фриланс',
        job: 'Junior Frontend Developer',
        description: `Практическое применение получаемых знаний. 
      Разработка собственных проектов на GitHub, каждый из которых развёрнут на GitHub Pages или Vercel. 
      Выполнение тестовых заданий. Фриланс.`,
      },
      {
        date: '2015-2022',
        name: 'Газпром трансгаз Беларусь',
        job: 'Диспетчер',
        description: `Работа на различных должностях, последняя из которых диспетчер. Обязанности: 
      оперативное руководство транспортировкой газа по газотранспортной системе филиала,
      постоянный контроль за параметрами газотранспортной системы филиала,
      изучение и применение в работе новых технологий и нормативно-технических документов,
      ежедневное несение ответственности за подчиненный персонал и выполняемую ими работу,
      учет количества газа, поставленного потребителям с постоянным взаимодействием с газоснабжающими 
      организациями страны.`,
      },
    ],
  },
  skills: {
    title: 'Навыки',
    list: [
      { name: 'HTML', percent: '90%' },
      { name: 'CSS, SASS, LESS', percent: '90%' },
      { name: 'Javascript', percent: '90%' },
      { name: 'Typescript', percent: '75%' },
      { name: 'React', percent: '85%' },
      { name: 'React Native', percent: '75%' },
      { name: 'Next.js', percent: '75%' },
      { name: 'Redux', percent: '85%' },
      { name: 'Git', percent: '85%' },
      { name: 'Webpack, Gulp', percent: '70%' },
      { name: 'AntDesign, MUI', percent: '85%' },
    ],
  },
  interest: {
    title: 'Интересы',
    list: [
      { icon: <SportsEsportsIcon fontSize="large" />, name: 'Игры' },
      { icon: <SportsSoccerIcon fontSize="large" />, name: 'Футбол' },
      { icon: <RestaurantIcon fontSize="large" />, name: 'Готовка' },
      { icon: <CodeIcon fontSize="large" />, name: 'Фронтенд' },
    ],
  },
};
