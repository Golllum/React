import styles from './css/SignIn.module.css';
import dummy from '../db/test.json';

export default function SignIn(){
    console.log(dummy.users[0].id);
    let userId = dummy.users[0].id;
    let userName = dummy.users[0].name;
    let userPassword = dummy.users[0].password;

    return(
        <div>
            <table>
                <tbody>
                    <tr>
                        <td>
                            이름
                        </td>
                        <td>
                            <input id="userName" defaultValue = {userName}></input>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            아이디
                        </td>
                        <td>
                            <input id="userId" defaultValue = {userId}></input>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            비밀번호
                        </td>
                        <td>
                            <input id="userPassword" defaultValue = {userPassword}></input>
                        </td>
                    </tr>
                </tbody>
            </table>

            <button onClick={() => {alert('회원가입 완료')}}>✔️</button>
        </div>
    );
}