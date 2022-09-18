import styles from './App.module.css';
import Header from './component/Header';
import SetMenu from './component/SetMenu';
import SignIn from './component/SignIn';
import LogIn from './component/LogIn';
import Welcome from './component/Welcome';
import ErrorPage from './component/ErrorPage';
import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {
  //Destructuring 문법 ES6
  //let [title, setTitle] = useState(['회원가입', '로그인']);

  return (
    <BrowserRouter>
      <div className={ styles.App }>
        <Header />
        <Routes>
          <Route path="/" element={<SetMenu />} />
          <Route path='/signIn' element={<SignIn />} />
          <Route path='/LogIn' element={<LogIn />} />
          <Route path='/Welcome' element={<Welcome />} />
          <Route path='/*' element={<ErrorPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
