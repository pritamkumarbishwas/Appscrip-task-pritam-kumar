'use client';
import React, { useState } from 'react';
import styles from './CustomDropdown.module.css'; // Adjust as needed

const CustomDropdown = ({ options, selectedOptions, onOptionChange }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOptionChange = (event) => {
        const { value, checked } = event.target;
        onOptionChange(value, checked);
    };

    const toggleDropdown = () => {
        setIsOpen(prevState => !prevState);
    };

    const selectedLabels = options
        .filter(option => selectedOptions.includes(option.value))
        .map(option => option.label)
        .join(', ') || 'Select Filters';

    return (
        <div className={styles.dropdown}>
            <button 
                onClick={toggleDropdown} 
                className={styles.dropdownButton} 
                aria-haspopup="true" 
                aria-expanded={isOpen}
            >
                {selectedLabels} <span>V</span>
            </button>
            {isOpen && (
                <div className={styles.dropdownContent}>
                    {options.map(option => (
                        <label key={option.value} className={styles.dropdownOption}>
                            <input
                                type="checkbox"
                                value={option.value}
                                checked={selectedOptions.includes(option.value)}
                                onChange={handleOptionChange}
                            />
                            {option.label}
                        </label>
                    ))}
                </div>
            )}
        </div>
    );
};

export default CustomDropdown;
