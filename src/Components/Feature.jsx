
import React from 'react'
import "../css/Feature.css"
import "../css/index.css"
import { FaLongArrowAltRight, FaReact } from "react-icons/fa"
import { BsArrowsMove } from "react-icons/bs"
import { AiOutlineMonitor } from "react-icons/ai"
import img1 from "../img/DALL·E 2024-02-02 00.12.17 - Create an image representing 'Legal Expertise for Business' in a corporate style. The image should evoke a sense of professionalism and expertise. Inc.png"
import img2 from "../img/DALL·E 2024-02-02 00.24.57 - Create an image symbolizing 'Comprehensive Legal Strategies' in a professional and corporate style. The image should convey a sense of structured and .png"
import img3 from "../img/DALL·E 2024-02-02 00.58.57 - Create an image symbolizing 'Legal Support for Business Development' in a professional and corporate style. The image should reflect the empowerment a.png"


function Feature() {
  return (
      <section id="feature">
        <div className="container">
          <h2>НАШІ ОСОБЛИВОСТІ</h2>
          <div className='title-border-simple'>
            <div className='title-border-colored'></div>
          </div>
          <div className="wrapper">
            <div className="text">
            <span className="head-icon">
              <FaReact/>
            </span>
              <h3>Юридична Експертиза для Бізнесу</h3>
              <p>Наше об'єднання надає повний комплекс юридичних послуг для комерційних клієнтів, включаючи корпоративне консультування, контрактне право та комерційні судові спори. Ми розуміємо важливість захисту вашого бізнесу та забезпечуємо ефективні стратегії для досягнення ваших цілей.</p>
               {/*<a  className="more" href="#">LEARN MORE <FaLongArrowAltRight/></a>*/}
            </div>
            <div className="image">
              <div className="inner-image">
                <img src={img1} alt="feature-first"/>
              </div>
            </div>
          </div>
          <div className="wrapper">
            <div className="image">
              <div className="inner-image">
                <img src={img2} alt="feature-second"/>
              </div>
            </div>
            <div className="text">
            <span className="head-icon">
              <BsArrowsMove/>
            </span>
              <h3>Комплексні Правові Стратегії</h3>
              <p>Забезпечте собі стратегічну перевагу з нашими індивідуалізованими правовими рішеннями. Ми спеціалізуємося на розробці стратегічних підходів, які захищають і підтримують ваші довгострокові бізнес-інтереси в усіх аспектах юридичної практики.</p>
               {/*<a  className="more"  href="#">LEARN MORE <FaLongArrowAltRight/></a>*/}
            </div>
          </div>
          <div className="wrapper">
            <div className="text">
            <span className="head-icon">
              <AiOutlineMonitor/>
            </span>
              <h3>Правова Підтримка для Розвитку Бізнесу</h3>
              <p>Наші юридичні послуги спрямовані на підтримку зростання та розвитку вашого підприємства. Від стартапів до великих корпорацій, ми пропонуємо персоналізовані консультації та ведення справ, щоб ваш бізнес міг працювати безперебійно і з максимальною ефективністю.</p>
               {/*<a  className="more"  href="#">LEARN MORE <FaLongArrowAltRight/></a>*/}
            </div>
            <div className="image">
              <div className="inner-image">
                <img src={img3} className="img3" alt="feature-third"/>
              </div>
            </div>
          </div>
        </div>

      </section>
  )
}

export default Feature
