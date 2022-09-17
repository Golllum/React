import styles from './css/Menu.module.css';
import {Link} from 'react-router-dom';

export default function Menu(props) {
    return(
        <div>
            <div className = { styles.list }>
                <Link to={props.url}>
                    <h4>{ props.title }</h4>
                    <p>{ props.coment }</p>
                </Link>
            </div>
        </div>
    );
}