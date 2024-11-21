import { Link } from 'react-router-dom';

const NavLink = ({ to, children }) => {
  return (
    <Link className="text-[#333333] hover:text-opacity-50" to={to}>{children}</Link>
  );
}

export default NavLink;