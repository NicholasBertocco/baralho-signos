import Image from 'next/image';
import styles from './Card.module.css';

export default function Card (props){
    return(
        <div className={styles.Card}>
            <h3>{props.signo}</h3>
            <Image src={props.imagem} alt={props.signo}/>
            <span>{props.data}</span>
        </div>
    )
};