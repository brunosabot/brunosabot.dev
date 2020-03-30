/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
exports.onClientEntry = () => {
  if (
    window.location.hostname !== "brunosabot.dev" &&
    window.location.hostname !== "localhost"
  ) {
    window.location.hostname = "brunosabot.dev";
  }

  const UP = 38;
  const DOWN = 40;
  const LEFT = 37;
  const RIGHT = 39;
  const B = 66;
  const A = 65;

  const PRESS_DELAY = 500;
  const KEY_COMBO = [UP, UP, DOWN, DOWN, LEFT, RIGHT, LEFT, RIGHT, B, A];

  let presses = [];
  let timeout;

  const onCodeEnter = () => {
    document.body.style.transition = "filter 1s cubic-bezier(0.4, 0, 0.6, 1)";
    document.body.style.filter = `invert(100%)`;
  };

  const handler = (event) => {
    clearTimeout(timeout);

    presses.push(event.keyCode);

    let valid = true;
    presses.forEach((press, index) => {
      if (KEY_COMBO[index] !== press) {
        valid = false;
        presses = [];
      }
    });

    if (KEY_COMBO.length === presses.length && valid) {
      onCodeEnter();

      document.removeEventListener("keyup", handler);
    }

    timeout = setTimeout(() => {
      presses = [];
    }, PRESS_DELAY);
  };

  document.addEventListener("keyup", handler);
};
