import { useSelector } from 'react-redux';
import LoginFormContainer from '../../common/LoginFormContainer/LoginFormContainer';
import { getAllUser } from '../../../redux/workersReducer';
import { useNavigate } from 'react-router-dom';


const LoginForm = () => {

  //use only now as long as do mot have backend

  const data = useSelector(state => getAllUser(state));
  const navigate = useNavigate();

  const autentication = (user, password) =>
  {
    const actualUser = data.find(findUser => findUser.login === user && findUser.password === password);
    if (actualUser === undefined){
      console.log('nie ma takiego');
    } else {
      localStorage.setItem('user', JSON.stringify(actualUser));
      switch (actualUser.avalibityLevel) {
        case 'user':
          navigate('/user');
          break;
        case 'admin':
          navigate('/admin');
          break;
        default:
          navigate('/pagenotfound');
      }
    }
  }

  //end

  return (
    <>
      <LoginFormContainer autentication={autentication} />
    </>
  )
}

export default LoginForm;