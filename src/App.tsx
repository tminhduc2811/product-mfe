import "./App.css";
import ProductItem from "./components/ProductItem";
import useStore from "./store";

const App = () => {
  const { products } = useStore();
  return (
    <div className="w-full p-8 flex items-center justify-center">
      <div className="w-full max-w-screen-xl grid grid-cols-[repeat(2,minmax(0,1fr))] md:grid-cols-[repeat(4,minmax(0,1fr))] gap-4">
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default App;
