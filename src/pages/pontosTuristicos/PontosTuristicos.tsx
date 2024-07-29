import Header from "../../ components/header/Header";
import Footer from "../../ components/footer/Footer";
import "./pontosTuristicos.css";

export const PontosTuristicos = () => {
    return (
        <main>
            <Header />
            <article className="article_pontos_turisticos">
                <section className="article_pontos_turisticos_section">
                    <div className="article_pontos_turisticos_section_div_titulo">
                        <h1>&#x1F6E9; • Pontos Turísticos do Maranhão</h1>
                    </div>
                    <div className="article_pontos_turisticos_section_pontos">
                        <div className="article_pontos_turisticos_section_pontos_lencois">
                            <div>
                                <h2 className="h2_pontos_turisticos">Lençóis Maranhense</h2>
                                <p className="p_pontos_turisticos">O Parque Nacional dos Lençóis Maranhenses é uma área protegida na costa atlântica norte do Brasil. É conhecido pela sua vasta paisagem desértica de grandes dunas de areia branca e pelas lagoas sazonais de água da chuva. A Lagoa Azul e a Lagoa Bonita são duas das maiores lagoas. O ecossistema diversificado do parque inclui pântanos de mangais. As cidades vizinhas de Barreirinhas e Santo Amaro do Maranhão servem de porta de entrada para o parque.</p>
                                <div className="article_pontos_turisticos_section_pontos_lencois_div_img div_img_moba">
                                    <img src="https://i.ibb.co/gwvZgRZ/lencois-01.png" alt="Lençois Maranhense" />
                                    <img src="https://i.ibb.co/Q9ryRSv/lencois-02.png" alt="Lençois Maranhense" />
                                </div>
                            </div>
                        </div>
                        <div className="article_pontos_turisticos_section_pontos_chapada">
                            <div>
                                <h2 className="h2_pontos_turisticos">Chapada das Mesas</h2>
                                <p className="p_pontos_turisticos">Criado em 2005, o Parque Nacional da Chapada das Mesas é um dos mais novos parques nacionais do Brasil. Florestas de buritizais, sertões, relevo de chapadas vermelhas, compõem um estonteante conjunto de curiosas formações rochosas, cânions, cavernas e cachoeiras. São inúmeras as surpresas e aventuras que uma visita a esse parque pode revelar. <br/>Seu nome veio por conta de seus platôs, que lembram realmente o formato de mesas de pedra. Isso se deu devido aos paredões de rocha de arenito formados há milhões de anos.</p>
                                <div className="article_pontos_turisticos_section_pontos_chapada_div_img div_img_moba">
                                    <img src="https://i.ibb.co/qMvgSXS/chapada-01.png" alt="Chapada das Mesas" />
                                    <img src="https://i.ibb.co/9Yj7PXB/chapada-02.png" alt="Chapada das Mesas" />
                                </div>
                            </div>
                        </div>
                        <div className="article_pontos_turisticos_section_pontos_alcantara">
                            <div>
                                <h2 className="h2_pontos_turisticos">Alcântara</h2>
                                <p className="p_pontos_turisticos">Alcântara foi a primeira cidade maranhense tombada pelo Instituto do Patrimônio Histórico e Artístico Nacional, em 1948, como cidade-monumento. Cercada por praias, ilhas desertas, serena e tranquila, Alcântara pode se orgulhar de ser também a mais importante cidade histórica da Amazônia. Seu casario colonial preservado e imponente e o silêncio de suas ruínas guardam reminiscências de um passado glorioso, um tempo de riqueza, de fausto, de famílias nobres e numerosa população escrava. Os atrativos começam logo na descida do barco, no Porto do Jacaré e subindo a ladeira de mesmo nome, que conduz ao coração da cidade: o largo onde se encontram as ruínas da Igreja da Matriz, a antiga cadeia e o pelourinho, ícones máximos das sociedades coloniais e escravagistas brasileiras, as igrejas coloniais, fontes e os museus. Todo o centro antigo pode ser visitado a pé. Tão importante quanto apreciar os monumentos é ouvir dos moradores ou guias turísticos locais, as histórias que tornam Alcântara ainda mais encantadora.</p>
                                <div className="article_pontos_turisticos_section_pontos_chapada_div_img div_img_moba">
                                    <img src="https://i.ibb.co/ZSWqfHR/alcantara-01.png" alt="Alcântara" />
                                    <img src="https://i.ibb.co/2y8StM7/alcantara-02.png" alt="Alcântara" />
                                </div>
                            </div>
                        </div>
                        <div className="article_pontos_turisticos_section_pontos_poco_azul">
                            <div>
                                <h2 className="h2_pontos_turisticos">Poço Azul</h2>
                                <p className="p_pontos_turisticos">Poço Azul Ecoturismo é um atrativo turístico organizado, considerado um dos mais importantes empreendimentos da Chapada das Mesas, recebendo milhares de turistas de várias partes do Brasil e do mundo. Abriga um complexo de cachoeiras, nascentes e cânions que compõem cenários de raras belezas e obras da natureza, que por sua vez, proporcionam diversas e marcantes experiências para os visitantes que desfrutam e recebem os benefícios do contato direto com a natureza.</p>
                                <div className="article_pontos_turisticos_section_pontos_chapada_div_img div_img_moba">
                                    <img src="https://i.ibb.co/nmf3JGZ/poco-01.png" alt="Poço Azul" />
                                    <img src="https://i.ibb.co/h7cn7H3/poco-02.png" alt="Poço Azul" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="article_pontos_turisticos_section_div_videos">
                        <div className="article_pontos_turisticos_section_div_videos_div">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/skqm_wCOpDA?si=FVqpjL_j8oprO9Bx" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                        </div>
                    </div>
                </section>
            </article>
            <Footer />
        </main>
    )
}