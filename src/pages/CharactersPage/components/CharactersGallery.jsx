import React from 'react';
import { Link} from 'react-router-dom';
import "./CharactersGallery.scss";
import roslin from '../../../assets/img/roslin.jpg'
import walder from '../../../assets/img/walderfrey.jpg'
import oberyn from '../../../assets/img/Oberyn.png'
import grenn from '../../../assets/img/grenn.jpg'

export function CharacterGallery(props){

    
    return(
        <div className="c-characters-gallery">
        <div className="row">
        
        {props.charactersGallery.map((item, i)=>
        
        <div key={i} className="c-characters-gallery__content col-12 col-sm-6 col-md-4 col-lg-2">
        <Link to={"/characters/" + item.name}>
        <figure>{
            item.name == 'Roslin Frey' ? <img className="c-characters-gallery__img" src={roslin} alt={item.name}></img>
            : <img className="c-characters-gallery__img" src={item.image} alt={item.name}></img>
            && item.name == 'Oberyn Martell' ? <img className="c-characters-gallery__img" src={oberyn} alt={item.name}></img>
            : <img className="c-characters-gallery__img" src={item.image} alt={item.name}></img>
            && item.name == '"Black Walder" Frey' ? <img className="c-characters-gallery__img" src={walder} alt={item.name}></img>
            : <img className="c-characters-gallery__img" src={item.image} alt={item.name}></img>
            && item.name == 'Grenn' ? <img className="c-characters-gallery__img" src={grenn} alt={item.name}></img>
            : <img className="c-characters-gallery__img" src={item.image} alt={item.name}></img>
        }
       <figcaption className="c-characters-gallery__name">{item.name}</figcaption>
        </figure>
        </Link>
        </div>
        )}
    
        </div>
        </div>
    )
}