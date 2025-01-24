import Topo from './componentes/Topo';
import Card from './componentes/Card';
import styles from "./page.module.css";
import Aquario from '../../public/Aquario.png'
import Aries from '../../public/Aries.png'
import Cancer from '../../public/Cancer.png'
import Capricornio from '../../public/Capricornio.png'
import Escorpiao from '../../public/Escorpiao.png'
import Gemeos from '../../public/Gemeos.png'
import Leao from '../../public/Leão.png'
import Libra from '../../public/Libra.png'
import Peixes from '../../public/Peixes.png'
import Sagitario from '../../public/Sagitario.png'
import Touro from '../../public/Touro.png'
import Virgem from '../../public/Virgem.png'

export default function Home() {
  return (
    <div className={styles.page}>
      <Topo />
      <main className={styles.conteinerMain}>
        <section className={styles.secaoBaralho}>
          <Card signo={'Aquário'} imagem={Aquario} data={'21/01 - 19/02'} />
          <Card signo={'Peixes'} imagem={Peixes} data={'20/02 - 20/03'}/>
          <Card signo={'Áries'} imagem={Aries} data={'21/03 - 20/04'} />
          <Card signo={'Touro'} imagem={Touro} data={'21/04 - 21/05'}  />
          <Card signo={'Gêmeos'} imagem={Gemeos} data={'22/05 - 21/06'} />
          <Card signo={'Câncer'} imagem={Cancer} data={'22/06 - 23/07'} />
          <Card signo={'Leão'} imagem={Leao} data={'24/07 - 23/08'} />
          <Card signo={'Virgem'} imagem={Virgem} data={'24/08 - 23/09'} />
          <Card signo={'Libra'} imagem={Libra} data={'24/09 - 23/10'} />
          <Card signo={'Escorpião'} imagem={Escorpiao} data={'24/10 - 22/11'} />
          <Card signo={'Sagitário'} imagem={Sagitario} data={'23/11 - 21/12'} />
          <Card signo={'Capricórnio'} imagem={Capricornio} data={'22/12 - 20/01'} />
        </section>
      </main>
    </div>
  );
}
