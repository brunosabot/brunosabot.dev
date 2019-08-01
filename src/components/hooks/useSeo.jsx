import React from "react";

const useSeo = (title, description) => {
  React.useEffect(() => {
    document.title = title;
  }, [title]);

  React.useEffect(() => {
    document.querySelector('meta[name="description"]').setAttribute("content", description);
  }, [description]);
};

export default useSeo;
