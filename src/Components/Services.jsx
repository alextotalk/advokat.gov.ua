import React from 'react'
import "../css/Services.css"
import "../css/index.css"
import {HiDatabase} from "react-icons/hi"
import {MdPalette} from "react-icons/md"
import {BsGraphUp} from "react-icons/bs"
import {FaLongArrowAltRight, FaYinYang} from "react-icons/fa"
import {BiCommand} from "react-icons/bi"
import {TbHexagons} from "react-icons/tb"

function Services() {
    return (
        <section id="service">
            <div className="wrapper">
                <h2>Наші послуги</h2>
                <div className='title-border-simple'>
                    <div className='title-border-colored'></div>
                </div>
                <div className="grid1">
                    <div className="card">
                        <div className="icon">
                            <HiDatabase/>
                        </div>
                        <a href="#">Робота з документами</a>
                        <p>Надаємо повний спектр послуг з юридичного документообігу, включаючи складання,
                            перевірку та аналіз комерційних контрактів, правових угод та інших документів.
                            Наш підхід забезпечує юридичну точність і стратегічне бачення для захисту ваших
                            інтересів.</p>
                        <a className="more" href="#">LEARN MORE <FaLongArrowAltRight/></a>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <MdPalette/>
                        </div>
                        <a href="#">Звернення</a>
                        <p>"Пропонуємо кваліфіковану допомогу у взаємодії з державними органами,
                            включаючи подання звернень, скарг та інших офіційних документів.
                            Ми допомагаємо клієнтам навігувати складні бюрократичні процеси ефективно та своєчасно.</p>
                        <a className="more"  href="#">LEARN MORE <FaLongArrowAltRight/></a>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <BsGraphUp/>
                        </div>
                        <a href="#">Захист</a>
                        <p>Забезпечуємо професійний захист прав та інтересів клієнтів у судах всіх інстанцій.
                            Наш досвід охоплює цивільні, кримінальні та адміністративні справи,
                            забезпечуючи вам найкраще представництво.</p>
                        <a className="more"  href="#">LEARN MORE <FaLongArrowAltRight/></a>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <FaYinYang/>
                        </div>
                        <a href="#">Супровід справи</a>
                        <p>Наша фірма пропонує комплексний супровід юридичних справ на кожному етапі процесу.
                            Від представництва інтересів перед третіми сторонами до детального аналізу і підготовки
                            необхідних документів, ми працюємо невпинно, щоб забезпечити
                            вам юридичну підтримку найвищого рівня. Незалежно від складності справи, наші експерти
                            гарантують професійний супровід,
                            максимально знижуючи ризики та забезпечуючи успіх у вашій юридичній ситуації.</p>
                        <a className="more"  href="#">LEARN MORE <FaLongArrowAltRight/></a>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <BiCommand/>
                        </div>
                        <a href="#">Справа під ключ</a>
                        <p>Пропонуємо повний комплекс послуг, від початкової консультації до виконання рішення суду.
                            Ми беремо на себе всю
                            відповідальність за ведення справи, звільняючи клієнтів від юридичних турбот.</p>
                        <a className="more"  href="#">LEARN MORE <FaLongArrowAltRight/></a>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <TbHexagons/>
                        </div>
                        <a href="#">Надання консультацій</a>
                        <p>Надаємо експертні юридичні консультації з різноманітних питань.
                            Наші фахівці готові надати вам інформацію,
                            що знадобиться для прийняття обґрунтованих рішень.</p>
                        <a className="more"  href="#">LEARN MORE <FaLongArrowAltRight/></a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services