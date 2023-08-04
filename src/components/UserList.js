import React, { useState } from "react";
import { FcApproval, FcCancel, FcSynchronize } from "react-icons/fc";
import { serverApi } from "../utils/config";

function UserList({ userData, setIsRefresh }) {
  const [userId, setUserId] = useState();
  const [userInfo, setUserInfo] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [fetchErr, setFetchErr] = useState();
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className="flex flex-wrap justify-center w-3/4 mx-auto">
      {userData?.map((user) => (
        <div
          className="flex flex-col bg-gray-200 rounded-lg shadow-md m-6 w-50 overflow-hidden border-2 border-yellow-500"
          key={user.id}>
          <h2 className="text-center px-2 pb-2 font-semibold text-lg">
            {user.name}
          </h2>
          <div className="flex flex-col my-2">
            <span>
              <u>Age</u>: {user.age} years
            </span>
            <span>
              <u>Gender</u>: {user.gender}
            </span>
          </div>
          <hr className="border-black border-dashed" />
        </div>
      ))}
