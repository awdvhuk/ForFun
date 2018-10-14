export const tick = (size, current, sound) => {
  if (current === 1 && +size.top === 1) {
    new Audio(sound.strong).play()
    return 1;
  }
  if (current === 1) {
    new Audio(sound.strong).play()
    return ++current;
  }
  if (current === size.top) {
    new Audio(sound.weak).play()
    return 1;
  }
  new Audio(sound.weak).play()
  return ++current;
};

export default null;