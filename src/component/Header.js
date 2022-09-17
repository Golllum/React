import styles from './css/Header.module.css';
import {Link} from 'react-router-dom';

export default function Header() {
    return(
        <div className = { styles.myHeader }>
            <h4><Link to="/">React Header</Link></h4>
        </div>
    );
}