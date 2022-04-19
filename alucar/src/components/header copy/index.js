import "./style.scss";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { Link } from "react-router-dom";
import { ModalNav } from "./components/ModalNav";
import { ConteudoNav } from "./components/ConteudoNav";

export const Header = () => {
  const { width } = useWindowDimensions();

  return (
    <header>
      <div className="header__txt">
        <p className="btn-small">Carros assegurados em todo território nacional | Parcele seu aluguel em até 12x e saia dirigindo com segurança e conforto</p>
      </div>
      <div className="header__nav">
        <Link to='/' className="header__logo">
          <h2>Alu<span>Car</span></h2>
        </Link>
        {width < 992 ?
          (
            <ModalNav>
              <ConteudoNav />
            </ModalNav>
          ) : (
            <nav className="nav__menu">
              <ConteudoNav />
            </nav>
          )
        }
      </div>
    </header>
  )
}
