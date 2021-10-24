export const pageview = (url) => {
  window.gtag("config", "UA-2395369-1", {
    page_path: url,
  });
};

export const event = ({ action, params }) => {
  window.gtag("event", action, params);
};
