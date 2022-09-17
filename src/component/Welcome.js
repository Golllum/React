import { useLocation } from "react-router-dom"

export default function Welcome(){
    const {state} = useLocation();
    console.log({state});
    return(
        <div>
            <h2>Welcome to Heaven!</h2>
            <p>maybe you just die.</p>
            <table>
                <tbody>
                    <tr>
                        <td>이름</td>
                        <td>{state.userName}</td>
                    </tr>
                    <tr>
                        <td>아이디</td>
                        <td>{state.userId}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}