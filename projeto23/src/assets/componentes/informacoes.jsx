import styles from './css/informacoes.module.css'
import misogenia from './imagem/misogenia.jpg'
import racismo from './imagem/racismo.jpg'
import transfobia from './imagem/transfobia.jpg'
import homofobia from './imagem/homofobia.jpg'
import { Link } from 'react-router-dom';


function Informacoes() {
    return(
        <section className={styles.fundo}>
            
            <div className={styles.ajuste}>
                    <div className={styles.miniheader}>
                        <div className={styles.miniheader_ajuste}>
                            <h1>venha saber mais sobre!</h1>
                        </div>
                    </div>
                    <div className={styles.minisection}>
                        <div className={styles.caixa1}>
                            <div className={styles.caixinha}>
                                <img src={homofobia} alt="" />
                            </div>
                            <div className={styles.caixinha}>
                                <p className={styles.sub_texto}>
                                    A homofobia é o preconceito, a discriminação ou a aversão contra pessoas homossexuais, 
                                    como gays e lésbicas. Ela pode se manifestar por meio de ofensas, exclusão social, agressões 
                                    e desigualdade de direitos. Essas atitudes podem afetar a autoestima e o bem-estar das vítimas, 
                                    dificultando sua convivência em ambientes como escolas e locais de trabalho. Combater a homofobia 
                                    é essencial para construir uma sociedade mais justa, inclusiva e respeitosa, na qual todos possam 
                                    viver livremente, independentemente de sua orientação sexual.
                                    <br />
                                    <br />
                                   Para mais informações, acesse nossa outra página <Link to="/Homofobia">Ir para próxima página</Link>
                                </p>
                            </div>
                        </div>
                        <div className={styles.caixa2}>
                            <div className={styles.caixas}>
                                <div className={styles.imagem}>
                                    <img src={misogenia} alt="" />
                                </div>
                                <div className={styles.texto}>
                                    <p className={styles.sub_texto}>
                                    A misoginia é o preconceito, desprezo ou ódio contra mulheres, podendo se manifestar por meio de ofensas, 
                                    violência e desigualdade de oportunidades. Combatê-la é essencial para promover o respeito, 
                                    a igualdade de direitos e uma sociedade mais justa para todos.
                                    <br />
                                    <br />
                                    <Link to="/Misoginia">Ir para a próxima página</Link>
                                    </p>
                                </div>
                            </div>
                            <div className={styles.caixas}>
                                <div className={styles.imagem}>
                                    <img src={racismo} alt="" />
                                </div>
                                <div className={styles.texto}>
                                    <p className={styles.sub_texto}>
                                        O racismo é uma forma de discriminação baseada na raça, cor da pele ou origem étnica de uma pessoa. 
                                        Ele pode causar exclusão, preconceito e desigualdade de oportunidades. Combater o racismo é fundamental 
                                        para construir uma sociedade mais justa, na qual todos sejam tratados com respeito e tenham seus direitos
                                         garantidos.
                                        <br />
                                        <br />
                                        Para mais informações, acesse nossa outra página 
                                        <br />
                                        <Link to="/Racismo">Ir para a próxima página</Link>
                                    </p>
                                </div>
                            </div>
                            <div className={styles.caixas}>
                                <div className={styles.imagem}>
                                    <img src={transfobia} alt="" />
                                </div>
                                <div className={styles.texto}>
                                    <p className={styles.sub_texto}>
                                        A transfobia é a discriminação ou o preconceito contra pessoas transgênero e travestis. 
                                        Ela pode se manifestar por meio de ofensas, exclusão e desrespeito à identidade de gênero. 
                                        Combater a transfobia é fundamental para garantir que todas as pessoas sejam tratadas com 
                                        dignidade, respeito e igualdade.
                                        <br />
                                        <br />
                                        Para mais informações, acesse nossa outra página 
                                        <br />
                                        <Link to="/Transfobia">Ir para a próxima página</Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
        </section>
    )
}

export default Informacoes