import Sugestao from "./Sugestao";
import Usuario from "./Usuario";


export default function Sidebar(){


    const itemsUsuario = [
      {
        name: "Catana",
        boldname: "catanacomics",
        image: "assets/img/catanacomics.svg",
      }
    ]


    const itemsSugestao = [
      {
        title: "bad.vibes.memes",
        src: "assets/img/bad.vibes.memes.svg"
      },
      {
        title: "chibirdart",
        src: "assets/img/chibirdart.svg"
      },
      {
        title: "razoesparaacreditar",
        src: "assets/img/razoesparaacreditar.svg"
      },
      {
        title: "adorable_animals",
        src: "assets/img/adorable_animals.svg"
      },
      {
        title: "smallcutecats",
        src: "assets/img/smallcutecats.svg"
      },
    ]


    return(
        <div class="sidebar">
          {itemsUsuario.map(item => <Usuario name={item.name} boldname={item.boldname} image={item.image} />)}

          <div class="sugestoes">
            <div class="titulo">
              Sugestões para você
              <div>Ver tudo</div>
            </div>
                {itemsSugestao.map(itemsug => <Sugestao title={itemsug.title} src={itemsug.src} />)}
          </div>

          <div class="links">
            Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
          </div>

          <div class="copyright">
            © 2021 INSTAGRAM DO FACEBOOK
          </div>
        </div>
    )
}