import React from "react";
import Visualizing from "./Model";

function Dialog({ userInfo, setModalOpen }) {
  return (
    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
      <div className="relative w-auto my-6 mx-auto max-w-3xl">
        <div className="border-1 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
            <h3 className="text-2xl font-semibold">
              Model for {userInfo.name}
            </h3>
          </div>
          <div className="relative p-6 flex-auto">
            <Visualizing />
          </div>
          <div className="flex items-center justify-end p-3 border-t border-solid border-slate-200 rounded-b">
            <button
              className="bg-green-700 text-white font-bold uppercase text-sm px-3 py-3 rounded shadow outline-none mr-1"
              type="button"
              onClick={() => setModalOpen(false)}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dialog;
