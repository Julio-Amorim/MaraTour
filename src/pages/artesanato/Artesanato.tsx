import Header from "../../ components/header/Header";
import Footer from "../../ components/footer/Footer";
import "./artesanato.css";

export const Artesanato = () => {
    return (
        <div>
            <Header />
            <main id='main-artesanato'>
                <h2>🖌️ • Nosso Artesanato</h2>
                <p>
                    O artesanato maranhense possui uma tradição de mais de 400
                    anos. Uma visita ao Centro Histórico de São Luís revela a
                    diversidade de artefatos originados da produção artesanal do
                    Maranhão, evidenciando a criatividade de uma tradição
                    popular que vem sendo aperfeiçoada desde a fundação da
                    capital.
                </p>
                <div className='div-flex'>
                    <p>
                        Entre as matérias-primas utilizadas no artesanato
                        maranhense, destacam-se o algodão, couro, madeira,
                        argila e fibras vegetais. A mais comum é a palha do
                        buriti, de onde se extrai uma fibra versátil e
                        resistente. Essa fibra é transformada em dezenas de
                        peças, que são comercializadas nas lojas e mercados dos
                        centros de artesanato.
                    </p>
                    <div className='div-img'>
                        <img src='/imagens-artesanato/img-1.png' alt='' />
                    </div>
                </div>
                <p>
                    Com cores fortes e vibrantes, os artesãos reproduzem em
                    azulejos desenhos detalhados das peças do conjunto
                    arquitetônico de São Luís, destacando a importância
                    histórica dessa região de São Luís do Maranhão.
                </p>
                <img src='/imagens-artesanato/img-2.png' alt='' />
                <p>
                    Os azulejos são as lembranças mais compradas pelos turistas
                    que visitam o Centro Histórico e os turistas saem encantados
                    com a beleza das peças.
                </p>
                <p>
                    As bonecas ‘namoradeiras’, apesar de não serem oriundas de
                    São Luís, também estão entre as peças mais vendidas para os
                    turistas que visitam a capital.
                </p>
                <p>
                    As esculturas em cerâmica são destaque pela delicadeza e
                    pelo contraste de cores que lembra casarões coloniais do
                    Centro Histórico.
                </p>
                <img src='/imagens-artesanato/img-3.png' alt='' />
            </main>
            <Footer />
        </div>
    );
};
