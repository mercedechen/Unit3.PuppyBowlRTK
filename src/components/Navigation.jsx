// react
import {NavLink} from 'react-router-dom';

function Navigation(){

  return (
    <nav>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/players'>Players</NavLink>
      <NavLink to='/players/:id'>Player Details</NavLink>
    </nav>
  );
};

export default Navigation