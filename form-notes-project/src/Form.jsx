import React, { useState } from "react";

const Form = () => {
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  const [task, setTask] = useState([]);

  return (
    <>
      <form
        className="flex flex-col gap-5"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          className="rounded border-2 py-5 px-2"
          type="text"
          placeholder="Note Title"
          value={title}
        />
        <input
          onChange={(e) => {
            setDetail(e.target.value);
          }}
          className="h-30 rounded border-2 py-5 px-2"
          type="text"
          placeholder="Note Details"
          value={detail}
        />
        <button
          onClick={() => {
            const copyTask = [...task];
            copyTask.push({ title, detail });
            setTitle("");
            setDetail("");
            setTask(copyTask);
            task.map((x, id) => {
              console.log(id);
              console.log(x.title);
              console.log(x.detail);
            });
          }}
          className="bg-amber-50 font-bold text-black p-2 rounded-xl active:bg-gray-300"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default Form;
