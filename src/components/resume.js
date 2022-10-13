import { useState } from "react";
import { dataEng } from "./dataEng";
import { dataRus } from "./dataRus";
import photo from '../images/photo1.jpg'





const Resume = (props) => {

  const [language, setLanguage] = useState(false)

  const data = !language ? dataEng : dataRus


  const handlerLanguage = () => {
    setLanguage(!language)
  }

  return (
    <div className='container'>

      <div className='blockBtn'>
        {
          !language
            ? <button onClick={handlerLanguage}>RUS</button>
            : <button onClick={handlerLanguage}>ENG</button>
        }

        <button>Night</button>
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
                <span className='text'>{el.text}</span>
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