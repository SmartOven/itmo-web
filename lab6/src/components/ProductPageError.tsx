import { Link, useRouteError } from "react-router-dom"

// FIXME Улучшить UI
const ProductPageError = () => {
    const error = useRouteError() as Error;
    console.log(error)
    return (
        <div>
            <p>{error.message}</p>
            <Link to='/'>Back to home page</Link>
        </div>
    )
}

export default ProductPageError
