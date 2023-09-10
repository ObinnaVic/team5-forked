import React, { useState } from 'react';

const SubHeaderAndFilter = ({ categories, onCategoryChange }) => {
    const [searchCategory, setSearchCategory] = useState('Latest Articles');

    const handleCategoryChange = (e) => {
        setSearchCategory(e.target.value);
        onCategoryChange(e.target.value);
    };

    return (
        <div className="flex items-center justify-between m-10 mb-8">
            <h1 className="text-3xl font-semibold">{searchCategory}</h1>
            <div className="flex items-center">
                <label htmlFor="category" className="mr-2">Filter by Category:</label>
                <select
                    id="category"
                    className="px-2 py-1 border rounded"
                    value={searchCategory}
                    onChange={handleCategoryChange}
                >
                    {categories.map((category, index) => (
                        <option key={index} value={category}>
                            {category}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export default SubHeaderAndFilter;