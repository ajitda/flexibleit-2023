import React, { useState } from "react";
import axios from "axios";

function DeleteButton() {
  const [confirm, setConfirm] = useState(false);

  function handleClick(id) {
    if (confirm) {
      axios.delete(`/api/categories/${id}`)
        .then(res => {
                console.log(res.data); //, 'Deleted Successfully.'
              })
        .catch((error) => {
          // handle error response
          console.log(error);
        });
    } else {
      setConfirm(true);
    }
  }

  return (
    <div>
      <button onClick={handleClick}>{confirm ? "Confirm" : "Delete"}</button>
      {confirm && (
        <div>
          <p>Are you sure you want to delete?</p>
          <button onClick={() => setConfirm(false)}>Cancel</button>
        </div>
      )}
    </div>
  );
}

export default DeleteButton;