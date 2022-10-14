import { useState } from "react";
import { dataEng } from "./dataEng";
import { dataRus } from "./dataRus";
import photo from '../images/photo1.jpg'
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';





const Resume = (props) => {

  const [language, setLanguage] = useState(false)
  const [theme, setTheme] = useState(false)

  const data = !language ? dataEng : dataRus


  const handlerLanguage = (e) => {

   
    if (e.target.innerHTML === 'RUS' || e.target.innerHTML ==='ENG') {
      setLanguage(!language)
    }
    else if (e.target.innerHTML === 'Dark' || e.target.innerHTML ==='Light') {
      setTheme(!theme)
    }
  }


  // const handlerContact =(e)=> {
    
  //    if (e.target.innerHTML.length === 24) {
  //     window.open('https://github.com/alexeyShuncko')
  //    }
  //    else if (e.target.innerHTML === '@alexeyShuncko') {
  //     window.open('https://t.me/alexeyShuncko')
  //    }
  //     else if (e.target.innerHTML.includes(',')) {
  //     window.open('https://yandex.by/maps/geo/53177019/?ll=27.727503%2C53.882847&z=10.78')
  //    }
  //    else if (e.target.innerHTML.includes('335')) {
  //     window.open('tel:+375333352328')
  //    }


     
  // }




  return (
    <div className='container'>

      <div className='blockBtn' onClick={handlerLanguage}>
        { !language ? <button>RUS</button> : <button>ENG</button> }
        { !theme ?  <button>Dark</button> : <button>Light</button> }
      </div>

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
            {data.contactInfo.list.map(el => (
              <li key={el.text}>
                <span className='icon'>{el.icon}</span>
                <a href={el.url} target="_blank" className='text' rel="noreferrer">{el.text}</a>
              </li>
            ))
            }
          </ul>
        </div>

        <div className='contactInfo education'>
          <h3 className='title'>{data.education.title}</h3>
          <ul>
            {data.education.list.map((el, i) => (
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
              data.languages.list.map(el => (
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
          <p>{data.about.p1}</p>
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
            data.skills.list.map(el => (
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
  )
}
export default Resume