import withSkeleton from '../../helpers/hocs/withSkeleton';
import NewsBanner from '../NewsBanner/NewsBanner';
import styles from './styles.module.css'

const BannersList = ({banners}) => {

    
    return (
        <ul className={styles.banners}>
            {banners?.map((baner) => {
                return (
                    <NewsBanner key={baner.id} item={baner}/>
                )
            })}
        </ul>
    );
}

const BannersListWithSkeleton = withSkeleton(BannersList, 'baner', 10, 'row')

export default BannersListWithSkeleton
