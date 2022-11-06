import './Info.css'
import photo from '../assets/photo.jpg'  

export default function Info() {
    return (
        <header className="info--container">
            <img src={photo} className="info--photo"/>
            <h1 className="info--name">Jacek Kopala</h1>
            <h3 className="info--occupation">Embedded Software Developer</h3>
            <a className="info--website" 
               href="https://github.com/Jatsekku"
               target="_blank">
                Website
            </a>
            <div className="info--buttons">
                <a href ="https://www.google.com" 
                   target="_blank">
                    <button className="info--button-email">
                        <i class="fa-solid fa-envelope"></i>
                        <span>Email</span>
                    </button>
                </a>
                <a href ="https://www.linkedin.com/in/jacek-kopala-23527a145/"
                   target="_blank">
                    <button className="info--button-linkedin">
                        <i class="fa-brands fa-linkedin"></i>
                        <span>Linkedin</span>
                    </button>
                </a>
            </div>
        </header>
    )
}