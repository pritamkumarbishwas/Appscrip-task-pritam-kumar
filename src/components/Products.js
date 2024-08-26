'use client';
import React, { useState, useEffect } from 'react';
import styles from './Products.module.css';
import Card from './Card';
import Filter from './Filter';

const Products = ({ initialProducts }) => {
    const [showFilter, setShowFilter] = useState(true);
    const [products, setProducts] = useState(initialProducts);
    const [filteredProducts, setFilteredProducts] = useState(initialProducts);
    const [sortOption, setSortOption] = useState('RECOMMENDED');
    const [filters, setFilters] = useState({});

    useEffect(() => {
        let filtered = [...products];

        //  filers
        if (filters.idealFor && filters.idealFor.length > 0) {
            filtered = filtered.filter(product => {
                return filters.idealFor.some(filter => {
                    if (filter === 'Man' && product.category === "men's clothing") {
                        return true;
                    }
                    if (filter === 'Women' && product.category === "women's clothing") {
                        return true;
                    }
                    if (filter === 'Baby & Kits' && product.category === "electronics") {
                        return true;
                    }
                    return false;
                });
            });
        }



        //  sorting
        switch (sortOption) {
            case 'NEWEST FIRST':
                filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
                break;
            case 'POPULAR':
                filtered.sort((a, b) => b.rating.count - a.rating.count);
                break;
            case 'PRICE: High to Low':
                filtered.sort((a, b) => b.price - a.price);
                break;
            case 'PRICE: Low to High':
                filtered.sort((a, b) => a.price - b.price);
                break;
            default:
                break;
        }

        setFilteredProducts(filtered);
    }, [sortOption, filters, products]);

    const toggleFilterVisibility = () => {
        setShowFilter(prevShowFilter => !prevShowFilter);
    };

    const handleSortChange = (e) => {
        setSortOption(e.target.value);
    };

    const handleFilterChange = (newFilters) => {
        setFilters(prevFilters => ({ ...prevFilters, ...newFilters }));
    };

    return (
        <>
            <hr style={{ width: '100%', backgroundColor: '#ccc' }} />
            <div className={styles.filterTitle}>
                <div className={styles.leftSection}>
                    <span>{filteredProducts.length} ITEMS</span>
                    <button onClick={toggleFilterVisibility} className={styles.hideFilter}>
                        {showFilter ? 'HIDE FILTER' : 'SHOW FILTER'}
                    </button>

                </div>
                <div className={styles.leftMobileSection}>
                    <button onClick={toggleFilterVisibility} className={styles.mobileFilter}>
                        FILTER
                    </button>
                </div>

                <div className={styles.rightSection}>
                    <select className={styles.dropdown} onChange={handleSortChange} value={sortOption}>
                        <option value="RECOMMENDED">RECOMMENDED</option>
                        <option value="NEWEST FIRST">NEWEST FIRST</option>
                        <option value="POPULAR">POPULAR</option>
                        <option value="PRICE: High to Low">PRICE: High to Low</option>
                        <option value="PRICE: Low to High">PRICE: Low to High</option>
                    </select>
                </div>
            </div>
            <hr style={{ width: '100%', backgroundColor: '#ccc' }} />
            <div className={styles.productsContainer}>
                {showFilter && (
                    <aside className={styles.filterContainer}>
                        <Filter onFilterChange={handleFilterChange} />
                    </aside>
                )}
                <div className={styles.productList}>
                    <div className={styles.gridContainer}>
                        {filteredProducts.map((product) => (
                            <Card
                                key={product.id}
                                id={product.id}
                                name={product.title}
                                image={product.image}
                                price={product.price}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Products;
