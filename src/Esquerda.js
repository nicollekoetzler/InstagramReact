import Stories from "./Stories"
import Posts from "./Posts"

export default function Esquerda(){

    const items = [
        {
          postowner: "meowed",
          icon: "assets/img/meowed.svg",
          image: "assets/img/gato-telefone.svg",
          likedicon: "assets/img/respondeai.svg",
          liked: "respondeai",
          other: "outras 101.523 pessoas",
        },
        {
          postowner: "barked",
          icon: "assets/img/barked.svg",
          image: "assets/img/dog.svg",
          likedicon: "assets/img/adorable_animals.svg",
          liked: "adorable_animals",
          other: "outras 99.159 pessoas",
        }
    ]


//    let items = [
//      <Posts postowner="meowed" icon="assets/img/meowed.svg" image="assets/img/gato-telefone.svg" likedicon="assets/img/respondeai.svg" liked="respondeai" other="outras 101.523 pessoas" />,
//
//     <Posts postowner="barked" icon="assets/img/barked.svg" image="assets/img/dog.svg" likedicon="assets/img/adorable_animals.svg" liked="adorable_animals" other="outras 99.159 pessoas" />
//  ]
    

    return(
        <div class="esquerda">
          <Stories />
          {items.map(item => <Posts postowner={item.postowner} icon={item.icon} image={item.image} likedicon={item.likedicon} liked={item.liked} other={item.other} />)}
          
        </div>
    )
}