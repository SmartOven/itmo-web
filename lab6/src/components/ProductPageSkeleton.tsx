import React from "react";
import {Outlet} from "react-router-dom";

const ProductPageSkeleton: React.FC = () => {
    return (
        <div id="content">
            <Outlet/>
        {/*  Может тут что-то будет  */}
        </div>
    )
}

export default ProductPageSkeleton;
