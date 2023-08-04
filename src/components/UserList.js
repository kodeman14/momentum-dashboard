import React, { useState } from "react";
import { FcApproval, FcCancel, FcSynchronize } from "react-icons/fc";
import { serverApi } from "../utils/config";
import Dialog from "./helpers/Dialog";

function UserList({ userData, setIsRefresh }) {
  const [userId, setUserId] = useState();
  const [userInfo, setUserInfo] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [fetchErr, setFetchErr] = useState();
  const [modalOpen, setModalOpen] = useState(false);

  const handleVisualClick = (user) => {
    console.log("opening pcd info for :", user.name);

    setModalOpen(true);
    setUserInfo(user);
  };

  const handleRefresh = (user) => {
    setIsLoading(true);
    const payload = {
      ...user,
      videoUploadStatus: Math.random() < 0.5,
      scoliosisPredictionStatus: Math.random() > 0.5,
    };
    setUserId(user.id);
    fetch(`${serverApi}/users/${user.id}`, {
      method: "PUT",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((res) => {
        setIsRefresh(true);
        setTimeout(() => setIsLoading(false), 2000);
      })
      .catch((err) => {
        setIsLoading(false);
        setFetchErr(err);
      });

    console.log("fetching new info for :", user.name);
  };

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
          {/* TODO : move this to new component */}
          <div className="flex flex-row">
            {isLoading && userId === user.id ? (
              <p className="my-5 mx-2 text-green-500">Fetching Latest.....</p>
            ) : fetchErr && userId === user.id ? (
              <span className="my-2 px-4 text-red-600 font-bold">
                Error Loading New Data, Try Again Later
              </span>
            ) : (
              <div className="grid grid-rows-1 text-center grid-cols-12 my-2 px-3">
                <div className="flex flex-col col-span-8">
                  <span className="flex">
                    Video Status:&nbsp;
                    {user.videoUploadStatus ? (
                      <button>
                        <FcApproval className="align-middle" />
                      </button>
                    ) : (
                      <button>
                        <FcCancel className="align-middle" />
                      </button>
                    )}
                  </span>
                  <span className="flex">
                    Scolio Status:&nbsp;
                    {user.scoliosisPredictionStatus ? (
                      <button>
                        <FcApproval className="align-middle" />
                      </button>
                    ) : (
                      <button>
                        <FcCancel className="align-middle" />
                      </button>
                    )}
                  </span>
                </div>
                <div className="flex col-span-4">
                  <button
                    className="m-auto rounded-2xl border-2 border-black p-1 bg-white"
                    disabled={isLoading}
                    onClick={() => handleRefresh(user)}>
                    <FcSynchronize className="align-middle" size="20px" />
                  </button>
                </div>
              </div>
            )}
          </div>
          <button
            className="bg-blue-500 text-white p-3 text-center hover:bg-blue-800 transition-all duration-500"
            onClick={() => handleVisualClick(user)}>
            Visual Model
          </button>
        </div>
      ))}
      {modalOpen && <Dialog userInfo={userInfo} setModalOpen={setModalOpen} />}
    </div>
  );
}

export default UserList;
