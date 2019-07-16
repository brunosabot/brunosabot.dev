import React, { createContext, memo, useCallback, useMemo, useState } from "react";

export const AppContext = createContext();

const AppProvider = memo(props => {
  const defaultPage = window.location.hash.replace("#", "") || "about";
  const [page, setPageState] = useState(defaultPage);

  const setPage = useCallback(
    page => {
      setPageState(page);
      window.history.pushState({}, undefined, "#" + page);
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
