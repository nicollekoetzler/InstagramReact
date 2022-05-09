import Sugestao from "./Sugestao";
import Usuario from "./Usuario";


export default function Sidebar(){
    return(
        <div class="sidebar">
          <Usuario name="Catana" boldname="catanacomics" image="assets/img/catanacomics.svg"/>

          <div class="sugestoes">
            <div class="titulo">
              Sugestões para você
              <div>Ver tudo</div>
            </div>
                <Sugestao title="bad.vibes.memes" src="assets/img/bad.vibes.memes.svg" />
                <Sugestao title="chibirdart" src="assets/img/chibirdart.svg" />
                <Sugestao title="razoesparaacreditar" src="assets/img/razoesparaacreditar.svg" />
                <Sugestao title="adorable_animals" src="assets/img/adorable_animals.svg" />
                <Sugestao title="smallcutecats" src="assets/img/smallcutecats.svg" />
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