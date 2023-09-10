import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import { mockData } from './mock';
import {useGlobalContext} from "../context"
import images from "../../UI/constants/images";
import SubHeaderAndFilter from './subArticlesHeader';

const SubArticles = () => {
    const { articlesData } = useGlobalContext();
    const [article, setArticle] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('Latest Articles');
    const [currentPage, setCurrentPage] = useState(1);
    const articlesPerPage = 16; // 4 rows * 4 columns = 16 articles per page

    useEffect(() => {
        setArticle(articlesData);
    }, []);

    // Calculate the total number of pages
    const totalPages = Math.ceil(article.length / articlesPerPage);

    // Update the filteredArticles array based on the current page
    const startIndex = (currentPage - 1) * articlesPerPage;
    const endIndex = startIndex + articlesPerPage;
    const filteredArticles = article.slice(startIndex, endIndex);

    const categories = ['Latest Articles', 'Javascript', 'Design', 'Algorithms', 'UI/UX', 'Security'];

    const truncateText = (text, maxLength) => {
        if (text.length <= maxLength) {
            return text;
        }
        return text.slice(0, maxLength);
    };

    // Function to handle previous page
    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    // Function to handle next page
    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    return (
        <>
            <SubHeaderAndFilter
                categories={categories}
                selectedCategory={selectedCategory}
                onCategoryChange={(category) => setSelectedCategory(category)}
            />     
            <div className="m-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {filteredArticles.length === 0 ? (
                    <div className="text-center text-gray-500">
                        No articles found for "{selectedCategory}".
                    </div>
                ) : (
                    filteredArticles.map((article, index) => (
                        <Link to={`/ArticlePost/${article.id}`} key={index} className="bg-light-body rounded-lg overflow-hidden">
                            <img src={article.thumbnail} alt="Banner" className="w-full h-40 object-cover" />                                      
                            <div className="p-4">
                                <div>
                                    <img
                                        className="rounded-full w-16 absolute left-0 right-0 m-auto top-20 ring-4 ring-light-body"
                                        src={images.avatar2}
                                        alt=""
                                    />
                                    <p className="text-sm text-gray-500">{article.author}</p>
                                </div><br/>
                                <h2 className="text-xl font-semibold">{article.title}</h2>
                                <p className="text-sm text-gray-500">{article.category}</p><br/>  
                                <p className="text-gray-600">{truncateText(article.content, 100)}</p>
                            </div> 
                        </Link>
                    ))
                )}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-4">
                <button
                    onClick={handlePrevPage}
                    disabled={currentPage === 1}
                    className={`px-4 py-2 bg-blue-500 hover:bg-blue-400 text-white rounded-l-lg ${currentPage === 1 ? 'disabled:opacity-50' : ''}`}
                >
                    Previous
                </button>
                <span className="px-4 py-2 text-blue-500">{currentPage} / {totalPages}</span>
                <button
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                    className={`px-4 py-2 bg-blue-500 hover:bg-blue-400 text-white rounded-r-lg ${currentPage === totalPages ? 'disabled:opacity-50' : ''}`}
                >
                    Next
                </button>
            </div>
        </>  
    );          
};

export default SubArticles;