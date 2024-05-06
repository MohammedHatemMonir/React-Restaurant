import React, { useState, useEffect } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

function CommentReviewAutocomplete() {
  const [completions, setCompletions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.datamuse.com/words?ml=keypad&max=10000000") // Fetch words related to "keyboard"
      .then((response) => response.json())
      .then((data) => {
        const words = data.map((item) => item.word);
        setCompletions(words);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching words:", error));
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ width: 300 }}>
      <Autocomplete
        options={completions}
        renderInput={(params) => (
          <TextField {...params} label="Leave a review" />
        )}
      />
    </div>
  );
}

export default CommentReviewAutocomplete;
