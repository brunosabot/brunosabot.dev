export default function konami() {
  if (
    window.location.hostname !== "brunosabot.dev" &&
    window.location.hostname !== "localhost" &&
    window.location.hostname !== "127.0.0.1"
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
    if (document.body.style.filter === `invert(100%)`) {
      document.body.style.transition = "filter 1s cubic-bezier(0.4, 0, 0.6, 1)";
      document.body.style.filter = ``;
    } else {
      document.body.style.transition = "filter 1s cubic-bezier(0.4, 0, 0.6, 1)";
      document.body.style.filter = `invert(100%)`;
    }
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
    }

    timeout = setTimeout(() => {
      presses = [];
    }, PRESS_DELAY);
  };

  document.addEventListener("keyup", handler);

  () => {
    document.removeEventListener("keyup", handler);
  };
}
