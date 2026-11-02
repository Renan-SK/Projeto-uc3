import styles from './css/meio.module.css'
import moes from './imagem/moes.png'


function Meio(){
    return(
        <section>
            <div className={styles.ajuste}>
                <div className={styles.caixa}>
                    <div className={styles.mini_caixa}>
                        <h1>Respeite as diferenças!</h1>
                        <p>O preconceito separa, mas o respeito une. Valorize as diferenças e faça a sua parte por um mundo mais justo e igualitário!</p>
                    </div>
                </div>
                <div className={styles.caixa}>
                    <img src={moes} alt="" />
                </div>
            </div>
        </section>
    )
}

export default Meio