const renderer = {
  image(href: string, title: string, text: string) {
    return `<img src="${href}" alt="${text}" decoding="async" loading="lazy" />`;
  },
};

export default renderer;
