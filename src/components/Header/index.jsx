import * as C from './style';
import logo from '../../assets/logo.svg';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { X, Rows } from 'phosphor-react';

export const Header = () => {
  const [active, setActive] = useState(false);

  return (
    <C.Header>
      <img src={logo} alt="Like a Rocket" />
      <div className="menu">
        <Rows
          onClick={() => setActive(!active)}
          cursor={'pointer'}
          size={32}
          color="#9e6dc2"
          id="menu"
        />
      </div>
      {active && (
        <div className="menu-overlay">
          <C.Overlay onClick={() => setActive(false)} />
        </div>
      )}

      <C.NavBar active={active}>
        <ul>
          <li>
            <img src={logo} className="menu-logo" alt="Like a Rocket" />
            <div className="close-menu">
              <X onClick={() => setActive(false)} size={32} color="#9e6dc2" />
            </div>
          </li>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/sobre">A Like a Rocket</NavLink>
          </li>
          <li>
            <NavLink to="/servicos">Serviços</NavLink>
          </li>
          <li>
            <NavLink to="/contato">Contato</NavLink>
          </li>
        </ul>
      </C.NavBar>
    </C.Header>
  );
};
