import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import app from "../firebase";
import validator from "validator";
import { db } from "../firebase";
import { addDoc, collection, getDocs } from "firebase/firestore";

const AppContext = React.createContext();

export const ContextApp = ({ children }) => {
  // const [currentUser, setCurrentUser] = useState();
  const [message, setMessage] = useState("");
  const [emailValidMessage, setEmailValidMessage] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [name, setName] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  // const [adminDetail, setAdminDetail] = useState();
  const [isLoginIn, setIsLogin] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [articlesData, setArticlesData] = useState([]);
  const [selectedImg, setSelectedImg] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [displayedPost, setDisplayedPost] = useState([]);
  const [scroll, setScroll] = useState(false);
  const [adminModal, setAdminModal] = useState(false);
  const [usersList, setUsersList] = useState([]);
  const [updatedId, setUpdatedId] = useState(null);
  const [role, setRole] = useState(null);
  const [commentsAvailability, setCommentAvailability] = useState(true);
  const [textContent, setTextContent] = useState("");

  //  const [display, setDisplay] = useState("Add User");

  const navigate = useNavigate();

  const userCollection = collection(db, "Users");
  const posts = collection(db, "Posts");

  const addUser = async (user, id) => {
    await addDoc(userCollection, {
      userId: id,
      userName: name,
      userEmail: user,
      role: ["user"],
    });
  };

  const getUser = async () => {
    setIsAdmin(false);
    const data = await getDocs(userCollection);
    let userAdmin = data.docs.map((item) => {
      return { ...item.data(), id: item.id };
    });
    setUsersList(userAdmin);
    // setAdminDetail(userAdmin);
    let user = localStorage.getItem("user");
    user ? setIsLogin(true) : setIsLogin(false);
    for (const i of userAdmin) {
      if (i.userId === user) {
        setEmail(i.userEmail);
        setName(i.userName);
      }

      if (i.userId === user && i.role[1]) {
        setIsAdmin(true);
        break;
      }
    }
  };
  useEffect(() => {
    getUser();
  }, []);

  const getPosts = async () => {
    const data = await getDocs(posts);
    let postData = data.docs.map((item) => {
      return { ...item.data(), id: item.id };
    });
    setArticlesData(postData);
  };

  useEffect(() => {
    getPosts();
  }, []);

  // CREATE ACCOUNT FUNCTION FOR NEW USERS
  const auth = getAuth(app);

  const createAccount = () => {
    if (validator.isEmail(newEmail)) {
      setEmailValidMessage("Great!!");
    } else {
      setEmailValidMessage("Please, enter valid Email!");
    }
    if (!name) {
      alert("Please put a Name");
      return;
    }
    if (!confirmNewPassword || confirmNewPassword !== newPassword) {
      alert("confirm password should equal password");
      return;
    }
    createUserWithEmailAndPassword(auth, newEmail, newPassword)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        if (user) {
          navigate("/signin");
          setTimeout(() => {
            alert("Success, now you can Log in");
          }, 500);
          addUser(user.email, user.uid);
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        alert(errorCode);
      });
  };

  const signIn = () => {
    if (validator.isEmail(email)) {
      setMessage("Thank you");
    } else {
      setMessage("Please, enter valid Email!");
    }
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        if (user) {
          localStorage.setItem("user", user.uid);
          navigate("/");
          setTimeout(() => {
            alert("Success");
          }, 500);
        }
        getUser();
        setPassword("");
      })
      .catch((error) => {
        const errorCode = error.code;
        alert(errorCode);
      });
  };

  const addPost = async (articlesData) => {
    try {
      setLoading(true);
      await addDoc(posts, {
        ...articlesData,
        author: name,
        likes: 0,
        comments: [],
        thumbnail: selectedImg,
      });
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
      setError(true);
    }
  };

  return (
    <AppContext.Provider
      value={{
        getUser,
        message,
        setMessage,
        createAccount,
        signIn,
        setEmail,
        setPassword,
        email,
        password,
        newEmail,
        setNewEmail,
        newPassword,
        setNewPassword,
        name,
        setName,
        confirmNewPassword,
        setConfirmNewPassword,
        emailValidMessage,
        setIsLogin,
        isLoginIn,
        isAdmin,
        addPost,
        articlesData,
        setSelectedImg,
        selectedImg,
        displayedPost,
        setDisplayedPost,
        scroll,
        setScroll,
        error,
        loading,
        setLoading,
        adminModal,
        setAdminModal,
        usersList,
        updatedId,
        setUpdatedId,
        role,
        setRole,
        commentsAvailability,
        setCommentAvailability,
        textContent,
        setTextContent,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
