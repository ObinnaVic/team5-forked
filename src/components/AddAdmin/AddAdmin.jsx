import React, { useState, useMemo } from "react";
import Backdrop from "../../UI/Backdrop/Backdrop";
import images from "../../UI/constants/images";
import { useGlobalContext } from "../context";
import UserData from "../UserData/UserData";
import { updateDoc, doc, collection } from "firebase/firestore";
import { db } from "../../firebase";

const AddAdmin = () => {
  const [addAdmin, setAddAdmin] = useState("");
  const { adminModal, setAdminModal, usersList, updatedId } =
    useGlobalContext();

  const userCollection = collection(db, "Users");

  // const docRef = db.collection("Users").doc(updatedId);

  const inputAdmin = useMemo(() => {
    return (
      <input
        type="email"
        className="w-full p-2 border outline-none rounded-md"
        placeholder="Enter Your Email"
        value={addAdmin}
        onChange={(event) => setAddAdmin(event.target.value)}
      />
    );
  }, [addAdmin]);

  const user = usersList.filter((_user) => {
    return (
      _user.userEmail.toLowerCase().includes(addAdmin.trim().toLowerCase()) &&
      _user.role.length === 1
    );
  });

  console.log(user);
  const uEle = user.map((data) => {
    const { userName, userEmail, userId, id, role } = data;
    return (
      <UserData
        key={userId}
        id={id}
        role={role}
        name={userName}
        email={userEmail}
        uImage={images.avatar4}
        setAddAdmin={setAddAdmin}
      />
    );
  });

  const addAdminHandler = async () => {
    setAddAdmin("");
    const updateRole = { role: ["user", "admin"] };
    const userDoc = doc(db, "Users", updatedId);
    await updateDoc(userDoc, updateRole);
  };

  return (
    <>
      <Backdrop show={adminModal} clicked={() => setAdminModal(!adminModal)} />
      {adminModal && (
        <div className="fixed mx-auto flex flex-col items-center justify-center z-[999999] top-[30%] left-1/2 -translate-x-2/4  bg-cards-light p-4 w-[400px] lg:w-[500px] rounded-lg shadow-xl">
          <h5 className="font-sans mb-2">Add User To Admin List</h5>
          {inputAdmin}
          <div className="w-full overflow-y-scroll mt-3 p-2 max-h-[150px]">
            {addAdmin.trim() ? (
              user.length === 0 ? (
                <p>{addAdmin} does not exixt</p>
              ) : (
                uEle
              )
            ) : null}
          </div>
          <div className="w-full flex items-center justify-between p-4 flex-row-reverse">
            <button
              className="p-2 border rounded-md cursor-pointer hover:font-bold"
              onClick={addAdminHandler}
            >
              Add User
            </button>
            <button
              className="p-2 border rounded-md cursor-pointer hover:font-bold"
              onClick={() => setAddAdmin("")}
            >
              Clear
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default AddAdmin;
