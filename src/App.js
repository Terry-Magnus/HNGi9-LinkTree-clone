import zuri from "./images/zuri-logo.svg"
import i4g from "./images/i4g-logo.svg"
import slack from "./images/slack.svg"
import github from './images/github.svg'
import share from "./images/share.svg"
import styled from "styled-components"
import "./App.scss"

const Button = styled.a`
    text-decoration: none;
    color: #000;
    text-align: center;
    background-color: #EAECF0;
    padding: 24px 32px;
    border-radius: 10px;

    &:hover {
        background-color: #D0D5DD;
    }
`
const App = () => {
    return (
        <div className='app'>
            <header>
                <button className="menu-btn"></button>
                <div className="share"><img src={share} alt="share" />
                    <span className="tooltiptext">Share</span>
                </div>

                <div id="profile_img"></div>
                <p id="twitter">@Meekilo_</p>
                <p id="slack">@Mikilo</p>

            </header>

            <div className="links">
                <Button href="https://training.zuri.team/" id="btn_zuri">Zuri Team</Button>
                <Button href="http://books.zuri.team " id="books">Zuri Books</Button>
                <Button href="https://books.zuri.team/python-for-beginners?ref_id=<yourslackname>" id="book__python">Python Books</Button>
                <Button href="https://background.zuri.team" id="pitch">Background Check for Coders</Button>
                <Button href="https://books.zuri.team/design-rules" id="book__design">Design Books</Button>
                <Button href="HNGi9-LinkTree-clone/contact" id="contact">Contact Me</Button>
            </div>
            <div className="sub-links">
                <img src={slack} alt="slack" />
                <img src={github} alt="github" />
            </div>
            <footer>
                <img src={zuri} alt="zuri" />
                <p className="footer-text">HNG Internship 9 Frontend Task</p>
                <img src={i4g} alt="i4g" />
            </footer>
        </div>
    )
}

export default App;
