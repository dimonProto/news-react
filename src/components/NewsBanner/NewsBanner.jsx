import { formatTimeAgo } from '../../helpers/formatTimeAgo';
import withSkeleton from '../../helpers/hocs/withSkeleton';
import ImageBanner from '../imageBanner/imageBanner';
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

const NewsBannerWithSkeleton = withSkeleton(NewsBanner, 'baner', 1)

export default NewsBannerWithSkeleton
