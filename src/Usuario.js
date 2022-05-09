export default function Usuario(props){
    return(
        <div class="usuario">
            <img src={props.image} />
            <div class="texto">
                <strong>{props.boldname}</strong>
                {props.name}
            </div>
        </div>
    )
  }