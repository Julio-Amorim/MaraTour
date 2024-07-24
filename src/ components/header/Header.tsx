import "./header.css";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header(){ 
    /*const [menuMoba, setMenuMoba] = useState<boolean>(false);
    let menuMoba = document.querySelector('.nav_moba_icon');
    let divMoba = document.querySelector('.div-moba');

    function show() {
        menuMoba?.addEventListener('click', () => {
        
        if (divMoba?.classList.contains('hidden')) {
            divMoba.classList.remove('hidden');
            return;
        } else {
            divMoba?.classList.add('hidden');
        }
    });
}*/
    const [menuMoba, setMenuMoba] = useState(false);

    function show() {
        setMenuMoba(!menuMoba);
    }

    return (
        <header>
            <nav>
                <div className="div_img">
                        <Link to="/">
                            <img className="img-nav-logo" src="data:image/png;base64,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" alt="Logo Maratour" />
                        </Link>
                    </div>
                <ul className="ul_ul_div">
                    <div className="ul_div">
                        <li><a className="nav-links" href="#article-pontos-turisticos">Pontos Turísticos</a></li>
                        <li><a className="nav-links" href="#article-artesanato">Artesanato</a></li>
                        <li><a className="nav-links" href="#article-festa">Festas Populares</a></li>
                        <li><a className="nav-links" href="#article-culinaria">Culinária</a></li>
                        <li><a className="nav-links" href="#article-galeria">Galeria</a></li>
                    </div>
                </ul>
                <div className="div_contato">
                        <img className="div-contato-img" src="" alt="" />
                        <li><a className="nav-links" href="#article-contato">Contato</a></li>
                    </div>
                <div className="nav_moba_icon hidden" onClick={show}>
                    <button><img /*onClick={show}*/ className="nav_moba_icon-icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAZ0lEQVR4nO3WwQmAQAwF0SlPt/+zC4t9RGxAZRH84DzIPTkEBiRJek8DOlDh04H16pARsGQ9nP0Xh6zAFrBk3cy54zL7P5IkSR9pZjxZ9TsCyrbMeEmSpGzNjCerfkdAnpcZL0kScw7zFAKxsVXx1wAAAABJRU5ErkJggg==" alt="Menu" /></button>
                </div>
            </nav> 
            <div className={`div-moba ${menuMoba ? '' : 'hidden'}`}  /*className="div-moba hidden"*/>
                <ul>
                    <li><a className="nav-links" href="#article-pontos-turisticos">Pontos Turísticos</a></li>
                    <li><a className="nav-links" href="#article-artesanato">Artesanato</a></li>
                    <li><a className="nav-links" href="#article-festa">Festas Populares</a></li>
                    <li><a className="nav-links" href="#article-culinaria">Culinária</a></li>
                    <li><a className="nav-links" href="#article-galeria">Galeria</a></li>
                    <li><a className="nav-links" href="#article-contato">Contato</a></li>
                </ul>         
            </div>
        </header>
    )
}