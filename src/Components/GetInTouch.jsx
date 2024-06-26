import React from 'react'
import "../css/GetyInTouch.css"
import { MdFacebook, MdOutlineLocationOn } from "react-icons/md"
import { AiOutlineMail } from "react-icons/ai"
import { FaTwitter, FaGooglePlusG, FaLinkedin, FaWhatsapp, FaHeadphones } from "react-icons/fa"

function GetInTouch() {
  return (
    <section id="getInTouch">
      <div className="wrapper">
        <h2> Зателефонуйте нам і ми вам допоможемо</h2>
        <div className='title-border-simple'>
          <div className='title-border-colored'></div>
        </div>
        <div className="container">
          <div className="left">

            <div>

              <form
                    action="https://formspree.io/xzbjobrd"
                    method="POST"
              >
                 <div >
                  <div  >
                    <input name={'name'} type="text" id="name" placeholder="Ім'я"/>
                    <input name={'email'} type="text" id="email" placeholder="Email"/>
                  </div>

                   <div>
                     <input name={'subject'} type="text" id="subject" placeholder="Телефон"></input><br/>

                     <textarea name={'messages'} id="message" placeholder={'Текст повідомлення'}/>
                   </div>

                 </div>
                <button type={'submit'} value="Send Message" >Відпраити повідомлення</button>
              </form>
              {/*<input type="text" id="name" placeholder="Ім'я"></input>*/}
              {/*<input type="text" id="email" placeholder="Email"></input>*/}
            </div>
            {/*<input type="text" id="subject" placeholder="Тема"></input><br/>*/}
            {/*<textarea id="message" placeholder="Текст повідомлення"></textarea><br/>*/}
            {/*<button type="submit" value="Send Message">Відпраити повідомлення</button>*/}
          </div>
          <div className="right">
            <div>
              <span><FaHeadphones/></span>
              <span>Телефон:</span>
              <br/>
              <span className="content">+38 (093) 848-22-48</span>
            </div>
            <div>
              <span><AiOutlineMail/></span>
              <span>Email :</span>
              <br/>
              <span className="content">a.zayets1987@gmail.com</span>
            </div>
            <div>
              <span><MdOutlineLocationOn/></span>
              <span>Локація :</span>
              <br/>
              <span className="content">м.Київ, вул.Тарасівська 3</span>
            </div>
            {/*<div>*/}
            {/*  <h3>Follow</h3>*/}
            {/*  <span className="icon"><MdFacebook/></span>*/}
            {/*  <span className="icon"><FaTwitter/></span>*/}
            {/*  <span className="icon"><FaGooglePlusG/></span>*/}
            {/*  <span className="icon"><FaLinkedin/></span>*/}
            {/*  <span className="icon"><FaWhatsapp/></span>*/}
            {/*</div>*/}
          </div>

        </div>
      </div>
    </section>
  )
}

export default GetInTouch
