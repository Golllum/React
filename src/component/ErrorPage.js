import { useEffect } from "react"
import {useNavigate} from 'react-router-dom';

export default function ErrorPage(){
    const navigate = useNavigate();

    useEffect(() => {
        alert('잘못된 접근입니다.');
        navigate('/');
    }, [])

    return (
        <></>
    )
}