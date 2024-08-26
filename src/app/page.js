import HeroSection from "@/components/HeroSection";
import Products from "@/components/Products";
import styles from "./page.module.css";

// The Home component is a Server Component in the `app` directory
export default async function Home() {
  let products = [];

  try {
    const response = await fetch('https://fakestoreapi.com/products');
    products = await response.json();
  } catch (error) {
    console.error('Error fetching products:', error);
    products = []; // Fallback to an empty array if there's an error
  }

  return (
    <main className={styles.main}>
      <HeroSection />
      {/* Pass the products directly to the Products component */}
      <Products initialProducts={products} />
    </main>
  );
}
