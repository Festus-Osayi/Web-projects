import Center from "../center/Center";
import ProductsGrid from "../reusable-styles/ProductsGrid";
import { Title } from "../reusable-styles/Title";

export default function NewProducts({ products }) {
  return (
    <Center>
      <Title>New Arrivals</Title>
      <ProductsGrid products={products} />
    </Center>
  );
}
