
// import Button from '../../components/Button';
import { Link } from 'react-router-dom';

const navLinks = [
  { name: 'login', path: '/login' },
  { name: 'forgot-password', path: '/forgot-password' },
  { name: 'password-sent', path: '/password-sent' },
  { name: 'dashboard', path: '/dashboard' },
];


const Home = () => {
  return (
    <div>
      {/* <Button text='push'>Send</Button> */}
      <nav>
        <ul>
          {navLinks.map(link => (
            <li key={link.path}>
              <Link to={link.path}>Click to go to {link.name} page</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default Home
