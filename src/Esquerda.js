import Stories from "./Stories"
import Posts from "./Posts"

export default function Esquerda(){
    return(
        <div class="esquerda">
          <Stories />
          <Posts postowner="meowed" icon="assets/img/meowed.svg" image="assets/img/gato-telefone.svg" likedicon="assets/img/respondeai.svg" liked="respondeai" other="outras 101.523 pessoas" />
          <Posts postowner="barked" icon="assets/img/barked.svg" image="assets/img/dog.svg" likedicon="assets/img/adorable_animals.svg" liked="adorable_animals" other="outras 99.159 pessoas" />
        </div>
    )
}