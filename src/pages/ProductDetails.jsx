import { useLocation, useParams } from "react-router-dom";
import { products } from "../data/data";

function ProductDetails() {
  const { productId } = useParams();
  // const location = useLocation();
  // const { products } = location.state || [];

  const product = products.find(
    (p) => parseInt(p.id) === parseInt(productId, 10)
  );

  return (
    <div className="px-6 py-10">
      {product ? (
        <>
          <h1 className="mb-6 lg:text-3xl md:text-2xl font-semibold text-center">
            Product Details
          </h1>
          <div className="flex flex-col items-center p-6 bg-white rounded-md">
            <h2 className="md:text-xl sm:text-lg font-semiboldmb-2">
              {product.name}
            </h2>
            <p className="md:text-lg sm:text-sm text-gray-700 mb-4">
              Price: {product.price}$
            </p>
            <img
              className="mb-4 rounded-md img__product"
              src={product.img}
              alt={product.name}
            />
          </div>
        </>
      ) : (
        <p className="text-xl font-bold text-center text-red-500">Not found</p>
      )}
    </div>
  );
}

export default ProductDetails;
