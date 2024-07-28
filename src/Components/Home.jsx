import React from 'react'
import "../css/Home.css"
import homeLogo from "../img/LOgoLawyer400x480.png"

function Home() {
    return (
        <section id="home">
            <div className="wrapper">
                <div className="left">
                    <h1>Отримайте безкоштовну консультацію!</h1>
                    <p>"Наше адвокатське об'єднання пропонує комплексні юридичні рішення для бізнесу та індивідуальних
                        клієнтів.
                        Ми спеціалізуємося на корпоративному праві, судових спорах та інтелектуальній власності. Наші
                        експерти
                        забезпечують професійну підтримку у найскладніших
                        правових викликах, гарантуючи при цьому особистий підхід та конфіденційність. Довіртеся нашому
                        досвіду
                        та відданості вашому успіху."</p>
                    <div className="groupBtn">
                        <div>
                            <a href="#getInTouch">
                                <div className="btn">
                                    <a href="#getInTouch">Запитати консультацію!</a>
                                </div>
                            </a>

                            <a href="tel:+380938482248">
                                <div className="btn">

                                    <a href="tel:+380938482248">Телефонуйте !!!<br/> <span>+38 (093) 848-22-48</span>
                                    </a>
                                </div>
                            </a>
                        </div>
                        <div>
                        <form
                            action="https://formspree.io/xzbjobrd"
                            method="POST"
                        >
                            <div>


                                <div>
                                    <input name={'subject'} type="text" id="subject" placeholder="Телефон"></input><br/>

                                 </div>

                            </div>

                            <button className="btn" type={'submit'} value="Send Message">Відправити запит на телефрнний дзвінок!</button>
                        </form>
                     </div>
                </div>

            </div>
            <a href="tel:+380938482248">
                <div className="right">
                    <img src={homeLogo} alt="main"/>
                </div>
            </a>
        </div>
</section>
)
}

export default Home
