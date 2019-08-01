import React, { createContext, memo, useCallback, useMemo, useState } from "react";

export const AppContext = createContext();

const AppProvider = memo(props => {
  const urlPage = window.location.pathname.replace(/^\//, "");
  const [page, setPageState] = useState(urlPage || "about");

  if (urlPage === "") {
    window.history.replaceState({}, undefined, "/" + page);
  }

  const setPage = useCallback(
    page => {
      setPageState(page);
      window.history.pushState({}, undefined, "/" + page);
    },
    [setPageState]
  );

  const value = useMemo(
    () => ({
      actions: { setPage },
      values: { page }
    }),
    [setPage, page]
  );

  return <AppContext.Provider {...props} value={value} />;
});

export default AppProvider;
