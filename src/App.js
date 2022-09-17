import styles from './App.module.css';
import Header from './component/Header';
import Menu from './component/Menu';
import SignIn from './component/SignIn';
import LogIn from './component/LogIn';
import Welcome from './component/Welcome';
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
        </Routes>
      </div>
    </BrowserRouter>
  );
}

function SetMenu(){
  return(
    <>
      <Menu title='회원가입' coment='회원가입을 하려면 여기를 클릭하세요.' url='/signIn' />
      <Menu title='로그인' coment='로그인을 하려면 여기를 클릭하세요.' url='/logIn' />
    </>
  );
}

export default App;
