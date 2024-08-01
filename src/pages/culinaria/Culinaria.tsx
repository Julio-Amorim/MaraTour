import Header from "../../ components/header/Header";
import Footer from "../../ components/footer/Footer";
import "./culinaria.css";

export const Culinaria = () => {
    return (
        <div>
            <Header />
            <main id='main-culinaria'>
                <h2>🥘 • culinária Maranhense</h2>
                <p>
                    A culinária maranhense é um fascinante reflexo da rica
                    diversidade cultural e histórica do Maranhão, um estado
                    localizado no Nordeste do Brasil. Influenciada por tradições
                    indígenas, africanas e europeias, a gastronomia maranhense
                    oferece uma experiência culinária única e autêntica que
                    encanta paladares de todo o país e do mundo.
                </p>
                <p>
                    No coração da culinária do Maranhão está a combinação de
                    ingredientes nativos e técnicas de preparo tradicionais. A
                    base de muitos pratos é composta por ingredientes locais,
                    como a mandioca, o arroz de cuxá, e o peixe, que são
                    preparados de maneiras que realçam suas características
                    distintas. A vinagreira, uma erva ácida e amarga, é um
                    exemplo de ingrediente local que confere ao arroz de cuxá
                    seu sabor inconfundível.
                </p>
                <p>
                    Outro destaque é a carne de sol, um prato típico da região
                    nordestina, preparado de diversas formas no Maranhão. Desde
                    a tradicional paçoca até a versão grelhada com manteiga de
                    garrafa, a carne de sol é frequentemente acompanhada de
                    mandioca frita, farofa e queijo coalho, além de banana
                    frita, arroz e feijão com legumes, criando combinações
                    saborosas e nutritivas.
                </p>

                <div className='div-flex'>
                    <div className='text'>
                        <h3>Arroz de Cuxá</h3>
                        <p>
                            O arroz de cuxá é preparado com vinagreira, também
                            conhecida como azedinha. Tradicionalmente servido
                            como acompanhamento para frutos do mar, peixes
                            fritos e ensopados, este arroz requer habilidade no
                            preparo. A vinagreira é uma erva ácida e amarga, o
                            que torna o seu uso desafiador e exige um controle
                            preciso das proporções para que o sabor do arroz não
                            fique desagradável. No entanto, quando bem
                            preparado, oferece uma experiência única para o
                            paladar!
                        </p>
                    </div>
                    <div className='div-img'>
                        <img src='/imagens-culinaria/img-1.png' alt='' />
                    </div>
                </div>

                <div className='div-flex flex-reverse'>
                    <div className='div-img'>
                        <img src='/imagens-culinaria/img-2.png' alt='' />
                    </div>
                    <div className="div-text">
                        <h3>Carne de Sol</h3>
                        <p>A carne de sol é um clássico da culinária nordestina, sendo parte integrante do dia-a-dia da região. No Maranhão, isso não é diferente, e há várias formas de prepará-la. Desde a paçoca de carne de sol até a versão grelhada com bastante manteiga de garrafa, o segredo da versão maranhense está nos acompanhamentos. Além da tradicional mandioca frita, farofa e queijo coalho, a carne de sol pode ser servida com banana frita, bastante arroz e feijão com legumes, tornando cada refeição uma experiência deliciosa e única.</p>
                    </div>
                </div>

                <div className="div-flex">
                    <div className="div-text">
                        <h3>Sururu ao leite de coco</h3>
                        <p>O sururu é um molusco muito consumido no litoral do Nordeste. Extremamente saboroso, permite várias combinações e na culinária maranhense ele se junta ao leite de coco para virar um ensopado parecido com uma moqueca, muito apetitoso e bem temperado com sabores típicos da região como dendê, coentro e pimenta-de-cheiro.</p>
                    </div>
                    <div className="div-img">
                        <img src="/imagens-culinaria/img-3.png" alt="" />
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};
