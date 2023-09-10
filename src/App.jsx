import "./App.css";
import SignUp from "./pages/SignUp";
import CreateAccount from "./pages/CreateAccount";
import Navbar from "./components/Navbar/Navbar";
import { useGlobalContext } from "./components/context";
import ArticlePost from "./pages/ArticlePost";
import Home from "./pages/Home";
import About from "./pages/about";
import SubArticles from "./components/body/subArticles";
import Profile from "./pages/profiles/Profile";
import UserProfile from "./pages/profiles/UserProfile";
import Footer from "./components/footer/footer";
import { Routes, Route } from "react-router-dom";
import CreateArticle from "./components/articlesPage/createPost";

const App = () => {
  const { articlesData } = useGlobalContext();
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signin" element={<SignUp />} />
        <Route path="/createaccount" element={<CreateAccount />} />
        <Route
          path="/ArticlePost/:post"
          element={<ArticlePost articles={articlesData} />}
        />
        <Route path="/subArticles" element={<SubArticles />} />
        <Route path="/jamesisrael" element={<Profile />} />
        <Route path="/jamesisrael" element={<UserProfile />} />
        <Route path="/admin/jamesisrael/new-post" element={<CreateArticle />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
