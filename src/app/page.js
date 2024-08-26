import HeroSection from "@/components/HeroSection";
import Products from "@/components/Products";
import styles from "./page.module.css";
import Head from 'next/head';

// The Home component is a Server Component in the `app` directory
export default async function Home() {
  let products = [];

  try {
    const response = await fetch('https://fakestoreapi.com/products');
    products = await response.json();
  } catch (error) {
    console.error('Error fetching products:', error);
    products = []; 
  }

  return (
    <>
      <Head>
        <title>Shop the Best Products Online | FakeStore</title>
        <meta
          name="description"
          content="Browse through a wide selection of top-quality products at FakeStore. Find great deals on electronics, fashion, and more."
        />
        <meta
          property="og:title"
          content="Shop the Best Products Online | FakeStore"
        />
        <meta
          property="og:description"
          content="Browse through a wide selection of top-quality products at FakeStore. Find great deals on electronics, fashion, and more."
        />
        <meta
          property="og:url"
          content="https://appscrip-task-assignment.netlify.app"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.main}>
        <HeroSection />
        <Products initialProducts={products} />
      </main>
    </>
  );
}
