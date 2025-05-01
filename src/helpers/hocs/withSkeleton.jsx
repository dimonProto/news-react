import Skeleton from "../../components/Skeleton/Skeleton"

function withSkeleton(Component, type, count) {

    return function WithSkeleton(props) {
        const {isLoading, ...restProps} = props

        if(isLoading) {
            <Skeleton type={type} count={count}/>
        }

        return <Component {...restProps}/>
    }

}

export default withSkeleton