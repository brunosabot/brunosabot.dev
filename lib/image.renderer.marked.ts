const renderer = {
  image(href: string, title: string | null, text: string) {
    return `<img src="${href}" alt="${text}" decoding="async" loading="lazy" />`;
  },
};

export default renderer;
