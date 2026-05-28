// ViewPaste.jsx

import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const ViewPaste = () => {
  const { id } = useParams();

  const pastes = useSelector((state) => state.paste.pastes);

  const paste = pastes.find((item) => item._id === id);

  if (!paste) {
    return (
      <div className="p-5">
        <h1 className="text-2xl font-bold">Paste Not Found</h1>
      </div>
    );
  }

  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold mb-5">View Paste</h1>

      <div className="border p-5 rounded">
        <h2 className="text-2xl font-semibold mb-4">{paste.title}</h2>

        <textarea
          value={paste.content}
          disabled
          className="w-full border p-3 rounded h-60"
        />
      </div>
    </div>
  );
};

export default ViewPaste;
