import Header from "../../ components/header/Header";
import Footer from "../../ components/footer/Footer";
import "./sobre.css";

export const Sobre = () => {
    return (
        <div>
            <Header />
            <main id='main-sobre'>
                <h2>Conheça o Maranhão</h2>

                <div className='div-flex'>
                    <div className='text'>
                        <h3>A Fundação de São Luís</h3>
                        <p>
                            Em 1612, os franceses, liderados por Daniel de La
                            Touche, Senhor de La Ravardière, fundaram a cidade
                            de São Luís, nomeada em homenagem ao rei Luís XIII
                            da França. A colônia francesa, no entanto, não durou
                            muito. Em 1615, os portugueses, sob o comando de
                            Jerônimo de Albuquerque, derrotaram os franceses e
                            tomaram o controle da região, incorporando o
                            Maranhão ao território colonial português.
                        </p>
                    </div>
                    <div className='div-img'>
                        <img src='/imagens-sobre/img-1.png' alt='' />
                    </div>
                </div>

                <div className='div-flex'>
                    <div className='div-img'>
                        <img src='/imagens-sobre/img-2.png' alt='' />
                    </div>
                    <div className='text'>
                        <h3>Período Colonial</h3>
                        <p>
                            Durante o período colonial, o Maranhão
                            desenvolveu-se principalmente através da produção de
                            açúcar, tabaco e algodão. A economia do estado
                            baseava-se em grande parte no trabalho escravo. Em
                            1621, a região foi integrada ao Estado do Maranhão e
                            Grão-Pará, uma divisão administrativa do Império
                            Português que visava facilitar a gestão e o controle
                            do norte do Brasil.
                        </p>
                    </div>
                </div>

                <div className='div-flex'>
                    <div className='text'>
                        <h3>A Balaiada</h3>
                        <p>
                            No século XIX, o Maranhão foi palco de importantes
                            movimentos de resistência e revolta. A Balaiada, que
                            ocorreu entre 1838 e 1841, foi uma das mais
                            significativas. Este movimento teve origem nas
                            tensões sociais e econômicas entre as elites locais
                            e as classes populares, incluindo escravos,
                            camponeses e vaqueiros. A Balaiada representou um
                            dos maiores desafios à ordem imperial no Brasil,
                            sendo suprimida apenas após forte repressão militar.
                        </p>
                    </div>
                    <div className='div-img'>
                        <img src='/imagens-sobre/img-3.png' alt='' />
                    </div>
                </div>

                <div className='div-flex'>
                    <div className='div-img'>
                        <img src='/imagens-sobre/img-2.png' alt='' />
                    </div>
                    <div className='text'>
                        <h3>
                            A Abolição da Escravidão e o Período Republicano
                        </h3>
                        <p>
                            Com a abolição da escravidão em 1888 e a proclamação
                            da República em 1889, o Maranhão enfrentou novos
                            desafios e transformações. A economia do estado
                            passou por crises, especialmente devido à queda do
                            preço do algodão e à necessidade de adaptação a uma
                            nova ordem econômica e social. No entanto, ao longo
                            do século XX, o Maranhão começou a se diversificar
                            economicamente, com investimentos em infraestrutura,
                            educação e indústria.
                        </p>
                    </div>
                </div>
                <p>
                    A história do Maranhão é uma narrativa de resistência,
                    adaptação e diversidade. Desde os tempos pré-coloniais até
                    os dias atuais, o estado tem se destacado por sua capacidade
                    de enfrentar desafios e preservar sua rica herança cultural.
                    Hoje, o Maranhão continua a evoluir, buscando um equilíbrio
                    entre desenvolvimento econômico e preservação de seu
                    patrimônio histórico e ambiental.
                </p>
            </main>
            <Footer />
        </div>
    );
};
