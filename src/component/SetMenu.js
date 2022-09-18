import axios from 'axios';
import { useEffect } from 'react';
import Menu from './Menu';

export default function SetMenu(){

    async function test(){
        try{
            const response = await axios.get("http://localhost:8080/test/crud/readById?id=Hong",
            {
                origin: true,
                withCredentials: true,
                
            });
            console.log("[SUCCESS] : " + response);
        }catch (error){
            console.log("[Error] : " + error);
        }
    }

    useEffect(() => {
        test();
    }, []);

    return (
        <div>
            <Menu title='회원가입' coment='회원가입을 하려면 여기를 클릭하세요.' url='/signIn' />
            <Menu title='로그인' coment='로그인을 하려면 여기를 클릭하세요.' url='/logIn' />
        </div>
    )
}