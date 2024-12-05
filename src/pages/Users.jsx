import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const Users = () => {
  const { users, deleteUser, startEditingUser } = useContext(UserContext);
  const [modal, setModal] = useState({ show: false, userId: null });
  const navigate = useNavigate();

  const handleDelete = (id) => {
    setModal({ show: true, userId: id });
  };

  const confirmDelete = () => {
    deleteUser(modal.userId);
    setModal({ show: false, userId: null });
    alert("User deleted successfully!");
  };

  const handleEdit = (user) => {
    startEditingUser(user); // Set the user to edit
    navigate("/create"); // Navigate to Create User page
  };

  return (
    <div className="min-h-screen gap-6 bg-slate-500 p-1">
        <ul className="bg-[url('https://as1.ftcdn.net/v2/jpg/06/29/34/76/1000_F_629347615_CiS6R2AfVEaxllJSHoJ7FcQcXRhmNaVo.jpg')] bg-cover bg-center w-full grid grid-cols-4 gap-8 rounded-xl p-4 min-h-screen ">
          {users.map((user) => (
            <li
              key={user.id}
              className="flex flex-wrap h-72 flex-col items-center justify-around w-full bg-white rounded-xl p-5"
            >
              <div className=" w-full flex flex-wrap flex-col gap-2">
                <p className="text-lg font-semibold">
                  Name: {user.firstname} {user.lastname}
                </p>
                <p className="text-gray-600">Age: {user.age}</p>
                <p className="text-gray-600">Profession: {user.profession}</p>
                <p className="text-gray-600">Gender: {user.gender}</p>
              </div>
              <div className="flex justify-between gap-4 w-full">
                <button
                  onClick={() => handleEdit(user)}
                  className="bg-green-500 w-[45%] text-white px-6 py-2 rounded-lg hover:bg-green-800 transition"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(user.id)}
                  className="bg-red-500 text-white w-[45%] px-4 py-2 rounded-lg hover:bg-red-600 transition"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>

        {modal.show && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
              <p className="text-xl font-bold text-gray-800 mb-4 text-center">
                Are you sure?
              </p>
              <p className="text-gray-600 text-center mb-6">
                Do you agree to delete this user?
              </p>
              <div className="flex justify-between space-x-4">
                <button
                  onClick={() => setModal({ show: false, userId: null })}
                  className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition w-full"
                >
                  Cancel
                </button>
                <button
                  onClick={confirmDelete}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition w-full"
                >
                  Ok
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
  );
};

export default Users;
