import React from 'react';
import { styles } from '../style';
import { logo } from '../assets';
import { Link } from 'react-router-dom';
import { navLinks } from '../constants';
import SearchBar from './SearchBar';

const Navbar = () => {
  const [toggle, setToggle] = React.useState(false);
  const [active, setActive] = React.useState(0);

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-3 fixed top-0 z-20 bg-primary`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link to="/" className='flex items-center gap-2' onClick={() => {
          setActive("");
          window.scrollTo(0, 0);
        }}>
          <img src={logo} alt="logo" style={{ width: '5%', height: '5%', borderRadius: '50%' }} className='object-contain' />
          <p className='text-primary text-[18px] font-bold cursor-pointer flex pl-4'>Totalented Center Of Learning</p>
          <ul className='list-none hidden sm:flex flex-row gap-2 pl-12'>
            {navLinks.map((link, index) => (
              <li
                key={link.id}
                className={`${
                  active === link.title
                    ? "text-primary"
                    : "text-secondary"
                } hover:text-primary text-[18px] font-medium cursor-pointer`}
                onClick={() => setActive(link.title)}
              >
                <Link to={`#${link.id}`} className="flex items-center gap-1">
                  {link.title}
                  {index < navLinks.length - 1 && <span className="text-primary">|</span>}
                </Link>
              </li>
            ))}
          </ul>
        </Link>
        <div className="pl-4"> {/* Adjust the padding here for the space between search bar and links */}
          <SearchBar />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
