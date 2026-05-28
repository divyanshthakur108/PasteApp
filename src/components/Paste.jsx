

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { removeFromPastes } from "../redux/pasteslice";

const Paste = () => {
  const pastes = useSelector((state) => state.paste.pastes);

  const dispatch = useDispatch();

  // Search State
  const [searchTerm, setSearchTerm] = useState("");

  const handleDelete = (pasteId) => {
    dispatch(removeFromPastes(pasteId));
  };

  // Filter Pastes
  const filteredData = pastes.filter((paste) =>
    paste.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-5">All Pastes</h1>

      {/* Search Box */}
      <input
        type="search"
        placeholder="Search here..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border p-2 rounded w-full mb-5"
      />

      {filteredData.length > 0 ? (
        filteredData.map((paste) => (
          <div key={paste._id} className="border p-4 rounded mb-4">
            <h2 className="text-xl font-semibold">{paste.title}</h2>

            <p className="mt-2">{paste.content}</p>

            <div className="flex gap-3 mt-4">
              <button
                className="bg-red-500 text-white px-3 py-1 rounded"
                onClick={() => handleDelete(paste._id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))
      ) : (
        <p>No Pastes Found</p>
      )}
    </div>
  );
};

export default Paste;
