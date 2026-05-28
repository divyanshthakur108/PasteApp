import React, { useState } from "react";

import { useDispatch } from "react-redux";

import { useSearchParams } from "react-router-dom";

import { addToPastes, updateToPastes } from "../redux/pasteSlice";

const Home = () => {
  const [title, setTitle] = useState("");

  const [value, setValue] = useState("");

  const [searchParams, setSearchParams] = useSearchParams();

  const pasteId = searchParams.get("pasteId");

  const dispatch = useDispatch();

  // CREATE OR UPDATE PASTE
  function createPaste() {
    const paste = {
      title: title,
      content: value,
      _id: pasteId || Date.now().toString(),
      createdAt: new Date().toISOString(),
    };

    if (pasteId) {
      dispatch(updateToPastes(paste));
    } else {
      dispatch(addToPastes(paste));
    }

    // CLEAR INPUTS
    setTitle("");
    setValue("");

    setSearchParams({});
  }

  return (
    <div className="p-5">
      {/* TITLE + BUTTON */}
      <div className="flex gap-7 mt-2 items-center justify-center">
        <input
          className="p-2 rounded-2xl border border-black w-[400px]"
          type="text"
          placeholder="Enter title here"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <button
          onClick={createPaste}
          className="bg-blue-500 text-white px-4 py-2 rounded-xl"
        >
          {pasteId ? "Update My Paste" : "Create My Paste"}
        </button>
      </div>

      {/* TEXTAREA */}
      <div className="mt-8 flex justify-center">
        <textarea
          className="rounded-2xl mt-2 w-[700px] p-4 border border-black"
          value={value}
          placeholder="Enter content here"
          onChange={(e) => setValue(e.target.value)}
          rows={20}
        />
      </div>
    </div>
  );
};

export default Home;
