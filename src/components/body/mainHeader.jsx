import React, { useState, useEffect } from 'react';
// import { mockData } from './mock';
import {useGlobalContext} from "../context"

const HeaderAndFilter = ({ categories, onCategoryChange }) => {
    const defaultCategory = 'Latest Articles';
    console.log(categories)
    
    const { articlesData } = useGlobalContext();
    const [searchCategory, setSearchCategory] = useState(defaultCategory);
    const [recentCategories, setRecentCategories] = useState([]);

    useEffect(() => {
        const categoryTimestamps = [];

        categories.forEach((category) => {
            const articlesInCategory = articlesData.filter((article) => article.category
            .toLowerCase() === category.toLowerCase());

            if (articlesInCategory.length > 0) {
                const mostRecentTimestamp = Math.max(...articlesInCategory
                    .map((article) => article.timestamp));
                categoryTimestamps[category] = mostRecentTimestamp;
            }
        });

        const sortedCategories = categories.sort((a, b) => {
            return categoryTimestamps[b] - categoryTimestamps[a];
        });

        // Use setRecentCategories to update the state with the sorted categories.
        setRecentCategories(sortedCategories.slice(0, 3));

        setSearchCategory(defaultCategory);
    }, [categories]);

    const handleCategoryChange = (category) => {
        setSearchCategory(category);
        onCategoryChange(category);
    };

    return (
        <div className="flex flex-col gap-4 md:flex-row font-sans items-center justify-between m-10 mb-8">
            <h1 className="text-3xl font-semibold">Latest Articles</h1>
            <div className="flex items-center">
                {recentCategories.map((category, index) => (
                    <button
                        key={index}
                        className={`px-2 py-1 border rounded mr-2 group hover:bg-cards-light transition duration-300 ${
                            searchCategory.toLowerCase() === category.toLowerCase() ? 'bg-blue-500 text-white' : ''
                        }`}
                        onClick={() => handleCategoryChange(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default HeaderAndFilter;