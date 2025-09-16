import withSkeleton from '@/shared/hocs/withSkeleton';
import styles from './styles.module.css'
import { NewsBanner, type INews } from '@/entities/news';

interface Props {
    banners?: INews[] | null
}

const BannersList = ({banners}: Props) => {

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

const BannersListWithSkeleton = withSkeleton<Props>(BannersList, 'banner', 10, 'row')

export default BannersListWithSkeleton
