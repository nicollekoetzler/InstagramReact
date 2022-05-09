export default function Sugestao(props){
    return(
        <div class="sugestao">
              <div class="usuario">
                {<img src={props.src} />}
                <div class="texto">
                  {props.title}
                  <div class="razao">Segue você</div>
                </div>
              </div>

              <div class="seguir">Seguir</div>
        </div>
    )
}