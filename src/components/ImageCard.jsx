import clsx from 'clsx';
import css from './ImageCard.module.css';

export default function ImageCard({ image }) {
    return(<div>
  <img className={clsx(css.img)} src={image.urls.small} alt={image.alt_description}/>
</div>)
}