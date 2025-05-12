import clsx from 'clsx';
import css from './ImageGallery.module.css';

import ImageCard from "./ImageCard";

export default function ImageGallery({images, onImageClick}) {
    return (<ul className={clsx(css.list)}> {images.map(image => (<li className={clsx(css.item)} key={image.id} onClick={() => onImageClick(image)}><ImageCard image={image} /></li>))}
</ul>)
}