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
          <Card elemento={'ar'} signo={'Aquário'} imagem={Aquario} data={'21/01 - 19/02'} />
          <Card elemento={ 'agua'} signo={'Peixes'} imagem={Peixes} data={'20/02 - 20/03'}/>
          <Card elemento={ 'fogo'} signo={'Áries'} imagem={Aries} data={'21/03 - 20/04'} />
          <Card elemento={ 'terra'} signo={'Touro'} imagem={Touro} data={'21/04 - 21/05'}  />
          <Card elemento={ 'ar'} signo={'Gêmeos'} imagem={Gemeos} data={'22/05 - 21/06'} />
          <Card elemento={ 'agua'} signo={'Câncer'} imagem={Cancer} data={'22/06 - 23/07'} />
          <Card elemento={ 'fogo'} signo={'Leão'} imagem={Leao} data={'24/07 - 23/08'} />
          <Card elemento={ 'terra'} signo={'Virgem'} imagem={Virgem} data={'24/08 - 23/09'} />
          <Card elemento={ 'ar'} signo={'Libra'} imagem={Libra} data={'24/09 - 23/10'} />
          <Card elemento={ 'agua'} signo={'Escorpião'} imagem={Escorpiao} data={'24/10 - 22/11'} />
          <Card elemento={ 'fogo'} signo={'Sagitário'} imagem={Sagitario} data={'23/11 - 21/12'} />
          <Card elemento={ 'terra'} signo={'Capricórnio'} imagem={Capricornio} data={'22/12 - 20/01'} />
        </section>
      </main>
    </div>
  );
}
