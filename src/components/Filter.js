'use client';
import React, { useState } from 'react';
import styles from './Filter.module.css';
import CustomDropdown from './CustomDropdown';

function Filter({ onFilterChange }) {
    const [selectedIdealFor, setSelectedIdealFor] = useState([]);
    const [selectedOccasion, setSelectedOccasion] = useState([]);
    const [selectedWork, setSelectedWork] = useState([]);
    const [selectedFabric, setSelectedFabric] = useState([]);
    const [selectedSegment, setSelectedSegment] = useState([]);
    const [selectedSuitableFor, setSelectedSuitableFor] = useState([]);
    const [selectedRawMaterials, setSelectedRawMaterials] = useState([]);

    const handleIdealForChange = (value, isChecked) => {
        const newFilters = isChecked
            ? [...selectedIdealFor, value]
            : selectedIdealFor.filter(filter => filter !== value);
        setSelectedIdealFor(newFilters);
        onFilterChange({ idealFor: newFilters });
    };

    const handleOccasionChange = (value, isChecked) => {
        const newFilters = isChecked
            ? [...selectedOccasion, value]
            : selectedOccasion.filter(filter => filter !== value);
        setSelectedOccasion(newFilters);
        onFilterChange({ occasion: newFilters });
    };

    const handleWorkChange = (value, isChecked) => {
        const newFilters = isChecked
            ? [...selectedWork, value]
            : selectedWork.filter(filter => filter !== value);
        setSelectedWork(newFilters);
        onFilterChange({ work: newFilters });
    };

    const handleFabricChange = (value, isChecked) => {
        const newFilters = isChecked
            ? [...selectedFabric, value]
            : selectedFabric.filter(filter => filter !== value);
        setSelectedFabric(newFilters);
        onFilterChange({ fabric: newFilters });
    };

    const handleSegmentChange = (value, isChecked) => {
        const newFilters = isChecked
            ? [...selectedSegment, value]
            : selectedSegment.filter(filter => filter !== value);
        setSelectedSegment(newFilters);
        onFilterChange({ segment: newFilters });
    };

    const handleSuitableForChange = (value, isChecked) => {
        const newFilters = isChecked
            ? [...selectedSuitableFor, value]
            : selectedSuitableFor.filter(filter => filter !== value);
        setSelectedSuitableFor(newFilters);
        onFilterChange({ suitableFor: newFilters });
    };

    const handleRawMaterialsChange = (value, isChecked) => {
        const newFilters = isChecked
            ? [...selectedRawMaterials, value]
            : selectedRawMaterials.filter(filter => filter !== value);
        setSelectedRawMaterials(newFilters);
        onFilterChange({ rawMaterials: newFilters });
    };

    return (
        <>
            <div className={styles.checkboxGroup}>
                <label>
                    <input type="checkbox" />
                    CUSTOMIZABLE
                </label>
            </div>
            <hr style={{ width: '100%', backgroundColor: '#ccc' }} />

            <h2 className={styles.filterTitle}>IDEAL FOR</h2>
            <CustomDropdown
                options={[
                    { value: 'Man', label: 'Man' },
                    { value: 'Women', label: 'Women' },
                    { value: 'Baby & Kits', label: 'Baby & Kits' }
                ]}
                selectedOptions={selectedIdealFor}
                onOptionChange={handleIdealForChange}
            />
            <hr style={{ width: '100%', backgroundColor: '#ccc' }} />

            <h2 className={styles.filterTitle}>OCCASION</h2>
            <CustomDropdown
                options={[
                    { value: 'option1', label: 'Option 1' },
                    { value: 'option2', label: 'Option 2' }
                ]}
                selectedOptions={selectedOccasion}
                onOptionChange={handleOccasionChange}
            />
            <hr style={{ width: '100%', backgroundColor: '#ccc' }} />

            <h2 className={styles.filterTitle}>WORK</h2>
            <CustomDropdown
                options={[
                    { value: 'option1', label: 'Option 1' },
                    { value: 'option2', label: 'Option 2' }
                ]}
                selectedOptions={selectedWork}
                onOptionChange={handleWorkChange}
            />
            <hr style={{ width: '100%', backgroundColor: '#ccc' }} />

            <h2 className={styles.filterTitle}>FABRIC</h2>
            <CustomDropdown
                options={[
                    { value: 'option1', label: 'Option 1' },
                    { value: 'option2', label: 'Option 2' }
                ]}
                selectedOptions={selectedFabric}
                onOptionChange={handleFabricChange}
            />
            <hr style={{ width: '100%', backgroundColor: '#ccc' }} />

            <h2 className={styles.filterTitle}>SEGMENT</h2>
            <CustomDropdown
                options={[
                    { value: 'option1', label: 'Option 1' },
                    { value: 'option2', label: 'Option 2' }
                ]}
                selectedOptions={selectedSegment}
                onOptionChange={handleSegmentChange}
            />
            <hr style={{ width: '100%', backgroundColor: '#ccc' }} />

            <h2 className={styles.filterTitle}>SUITABLE FOR</h2>
            <CustomDropdown
                options={[
                    { value: 'option1', label: 'Option 1' },
                    { value: 'option2', label: 'Option 2' }
                ]}
                selectedOptions={selectedSuitableFor}
                onOptionChange={handleSuitableForChange}
            />
            <hr style={{ width: '100%', backgroundColor: '#ccc' }} />

            <h2 className={styles.filterTitle}>RAW MATERIALS</h2>
            <CustomDropdown
                options={[
                    { value: 'option1', label: 'Option 1' },
                    { value: 'option2', label: 'Option 2' }
                ]}
                selectedOptions={selectedRawMaterials}
                onOptionChange={handleRawMaterialsChange}
            />
        </>
    );
}

export default Filter;