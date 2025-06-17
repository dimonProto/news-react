import withSkeleton from '../../helpers/hocs/withSkeleton';
import type { INews } from '../../interfaces';
import NewsBanner from '../NewsBanner/NewsBanner';
import styles from './styles.module.css'

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
