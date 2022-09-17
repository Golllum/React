import { Component, useRef, useState, useEffect } from "react";
import { Navigate, useLoaderData } from "react-router-dom";
import dummy from '../db/test.json';
import {useNavigate} from 'react-router-dom';

export default function LogIn() {
    let [myState, setMyState] = useState({
        userId : "",
        userName : "",
        userPwd : "",
    });

    useEffect(() => {
        if(myState.userName != ""){
            navigate("/Welcome", {replace : true, state : myState});
        }
    }, [myState.userName]);

    const myRefs = useRef([]);
    const navigate = useNavigate();

    const setUserId = (value) => {
        setMyState({
            ...myState,
            userId : value,
        });
    }

    const setUserPwd = (value) =>{
        setMyState({
            ...myState,
            userPwd : value,
        });
    }

    const validationCheck = () => {
        let check = false;

        Object.keys(dummy.users).forEach((key) => {
            if(dummy.users[key].id === myState.userId){
                check = true;

                if(dummy.users[key].password === myState.userPwd){
                    alert("로그인 성공했습니다.");
                    setMyState({
                        ...myState,
                        userName : dummy.users[key].name,
                    }, () => {console.log(1)});
                    //console.log(dummy.users[key].name);
                    //console.log(myState.userName);
                    //navigate("/Welcome", {replace : true, state : myState});
                }else{
                    alert("비밀번호가 다릅니다.");
                    setMyState({
                        ...myState,
                        userPwd : "",
                    });

                    myRefs.current[1].focus();
                }
            }
        });

        if(!check){
            alert("회원가입이 되지않은 아이디입니다.");
            clearForm();
        }
    }

    const clearForm = () => {
        setMyState({
            userId : "",
            userName : "",
            userPwd : "",
        });

        myRefs.current[0].focus();
    }

    return(
        <div>
            <table>
                <tbody>
                    <tr>
                        <td>아이디</td>
                        <td><input name="userId" ref={idRef => myRefs.current[0] = idRef} value={myState.userId} onChange={e => setUserId(e.target.value)}></input></td>
                    </tr>
                    <tr>
                        <td>비밀번호</td>
                        <td><input name="userPassword" ref={pwdRef => myRefs.current[1] = pwdRef} value={myState.userPwd} onChange={e => setUserPwd(e.target.value)}></input></td>
                    </tr>
                </tbody>
            </table>

            <input type="button" value="로그인" id="btnLogIn" onClick={validationCheck}></input>
        </div>
    )
}