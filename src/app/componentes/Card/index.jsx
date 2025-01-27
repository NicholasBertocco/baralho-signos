import Image from 'next/image';
import styles from './Card.module.css';
import { PiPlant } from "react-icons/pi";
import { MdAir } from "react-icons/md";
import { FaFire, FaWater } from "react-icons/fa";

export default function Card (props){
    return(
        <div className={
            props.elemento === "agua"
            ? styles.CardAgua
            : props.elemento === "fogo"
            ? styles.CardFogo
            : props.elemento === "terra"
            ? styles.CardTerra
            : props.elemento === "ar" && styles.CardAr
        }>
            <div className={styles.boxTitleIcon}>
                <h3>{props.signo}</h3>
                {props.elemento ==="agua" ? (
                    <FaWater className={styles.icone}/>
                ) : props.elemento === "fogo" ? (
                    <FaFire className={styles.icone} />
                ) : props.elemento ==="terra" ? (
                    <PiPlant className={styles.icone}/>
                ) : props.elemento ==="ar" && (
                    <MdAir className={styles.icone}/>
                )}
            </div>
        
            <Image src={props.imagem} alt={props.signo}/>
            <span>{props.data}</span>
        </div>
    );
}