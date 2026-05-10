import { useParams } from "react-router-dom";

const products = [
  { id: 1, name: "AC MILAN", price: 299 },
  { id: 2, name: "Argentina Home", price: 350 },
  { id: 3, name: "Arsenal Jersey", price: 299 },
  { id: 4, name: "Argentina Player Edition", price: 999 },
];

const ProductDetails = () => {
  const { id } = useParams();

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return <h2 className="p-10 text-red-500">Product Not Found</h2>;
  }

  return (
    <div className="p-10">

      <h1 className="text-3xl font-bold mb-4">
        {product.name}
      </h1>

      <p className="text-xl font-semibold text-gray-700">
        Price: {product.price}.00৳
      </p>

      <button className="mt-6 bg-black text-white px-6 py-3 rounded-xl">
        Buy Now
      </button>

    </div>
  );
};

export default ProductDetails;