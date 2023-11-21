import React from "react";
import {Outlet} from "react-router-dom";

const ProductPageSkeleton: React.FC = () => {
    return (
        <div>
            <Outlet/>
        {/*  Может тут что-то будет  */}
        </div>
    )
}

export default ProductPageSkeleton;
