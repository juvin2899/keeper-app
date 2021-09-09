import React, { useState } from "react";

function CreateArea(props) {
  const [text, setText] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    if (
      (name == "title" && value.length < 20) ||
      (name == "content" && value.length < 100)
    )
      setText((prevText) => {
        return {
          ...prevText,
          [name]: value,
        };
      });
  }

  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <input
          name="title"
          placeholder="Title"
          onChange={handleChange}
          value={text.title}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          onChange={handleChange}
          value={text.content}
        />
        <button
          onClick={() => {
            if (text.content.length !== 0 && text.title.length !== 0) {
              props.addNote(text);
              setText({
                title: "",
                content: "",
              });
            }
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
