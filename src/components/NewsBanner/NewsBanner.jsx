import { formatTimeAgo } from '../../helpers/formatTimeAgo';
import ImageBanner from '../ImageBanner/imageBanner';
import styles from './styles.module.css'

const NewsBanner = ({item}) => {
    if (!item) return null;
    
    return (
        <div className={styles.banner}>
            <ImageBanner image={item.image}/>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.extra}>{formatTimeAgo(item.published)} by {item.author}</p>
        </div>
    );
}


export default NewsBanner
