export const getColor = (value) => {
  let background = 'white';
  let color = 'black';
  let borderColor = 'grey';

  switch (value) {
    case null:
      background = '#dedede';
      borderColor = '#c1c1c1';
      break;

    case 2:
      background = '#fffae0';
      borderColor = '#d4ca95';
      break;

    case 4:
    case 8:
      background = '#ffef92';
      break;

    case 16:
    case 32:
      break;

    case 64:
    case 128:
      break;

    case 256:
    case 512:
      break;

    case 1024:
    case 2048:
      break;

    default:
      background = 'black';
      color = 'white';
      break;
  }

  return { background, color, borderColor }
}

export const defaultValues = () => {
  let arr = [];
  for (let i = 0; i < 4; i++) {
    arr.push([null, null, null, null]);
  }
  return arr;
};

export const move = (arr, key) => {
  let changes = false;
  switch (key) {
    case 'ArrowUp':
      for (let x = 0; x < 4; x++) {
        for (let y = 0; y < 4; y++) {
          if (!arr[x][y] || arr[x][y + 1] === undefined) { continue; }
          if (arr[x][y] === arr[x][y + 1]) {
            changes = true;
            arr[x][y] *= 2;
            arr[x][y + 1] = null;
          }
          else if (!arr[x][y + 1] && arr[x][y + 2] && arr[x][y] === arr[x][y + 2]) {
            changes = true;
            arr[x][y] *= 2;
            arr[x][y + 2] = null;
          }
          else if (!arr[x][y + 2] && arr[x][y + 3] && arr[x][y] === arr[x][y + 3]) {
            changes = true;
            arr[x][y] *= 2;
            arr[x][y + 3] = null;
          }
        }
        for (let x = 0; x < 4; x++) {
          for (let y = 0; y < 4; y++) {
            if (arr[x][y]) { continue; }
            if (arr[x][y + 1]) {
              changes = true;
              arr[x][y] = arr[x][y + 1];
              arr[x][y + 1] = null;
            }
            else if (arr[x][y + 2]) {
              changes = true;
              arr[x][y] = arr[x][y + 2];
              arr[x][y + 2] = null;
            }
            else if (arr[x][y + 3]) {
              changes = true;
              arr[x][y] = arr[x][y + 3];
              arr[x][y + 3] = null;
            }
          }
        }
      }
      break;

    case 'ArrowRight':
      for (let x = 3; x > 0; x--) {
        for (let y = 0; y < 4; y++) {
          if (!arr[x][y] || !arr[x - 1] || arr[x - 1][y] === undefined) { continue; }
          if (arr[x][y] === arr[x - 1][y]) {
            changes = true;
            arr[x][y] *= 2;
            arr[x - 1][y] = null;
          }
          else if (arr[x - 2] && !arr[x - 1][y] && arr[x - 2][y] && arr[x][y] === arr[x - 2][y]) {
            changes = true;
            arr[x][y] *= 2;
            arr[x - 2][y] = null;
          }
          else if (arr[x - 3] && !arr[x - 2][y] && arr[x - 3][y] && arr[x][y] === arr[x - 3][y]) {
            changes = true;
            arr[x][y] *= 2;
            arr[x - 3][y] = null;
          }
        }
        for (let x = 3; x > 0; x--) {
          for (let y = 0; y < 4; y++) {
            if (arr[x][y]) { continue; }
            if (arr[x - 1] && arr[x - 1][y]) {
              changes = true;
              arr[x][y] = arr[x - 1][y];
              arr[x - 1][y] = null;
            }
            else if (arr[x - 2] && arr[x - 2][y]) {
              changes = true;
              arr[x][y] = arr[x - 2][y];
              arr[x - 2][y] = null;
            }
            else if (arr[x - 3] && arr[x - 3][y]) {
              changes = true;
              arr[x][y] = arr[x - 3][y];
              arr[x - 3][y] = null;
            }
          }
        }
      }
      break;

    case 'ArrowDown':
      for (let x = 0; x < 4; x++) {
        for (let y = 3; y >= 0; y--) {
          if (!arr[x][y] || arr[x][y - 1] === undefined) { continue; }
          if (arr[x][y] === arr[x][y - 1]) {
            changes = true;
            arr[x][y] *= 2;
            arr[x][y - 1] = null;
          }
          else if (!arr[x][y - 1] && arr[x][y - 2] && arr[x][y] === arr[x][y - 2]) {
            changes = true;
            arr[x][y] *= 2;
            arr[x][y - 2] = null;
          }
          else if (!arr[x][y - 2] && arr[x][y - 3] && arr[x][y] === arr[x][y - 3]) {
            changes = true;
            arr[x][y] *= 2;
            arr[x][y - 3] = null;
          }
        }
        for (let x = 0; x < 4; x++) {
          for (let y = 3; y >= 0; y--) {
            if (arr[x][y]) { continue; }
            if (arr[x][y - 1]) {
              changes = true;
              arr[x][y] = arr[x][y - 1];
              arr[x][y - 1] = null;
            }
            else if (arr[x][y - 2]) {
              changes = true;
              arr[x][y] = arr[x][y - 2];
              arr[x][y - 2] = null;
            }
            else if (arr[x][y - 3]) {
              changes = true;
              arr[x][y] = arr[x][y - 3];
              arr[x][y - 3] = null;
            }
          }
        }
      }
      break;

    case 'ArrowLeft':
      for (let x = 0; x < 4; x++) {
        for (let y = 0; y < 4; y++) {
          if (!arr[x][y] || !arr[x + 1] || arr[x + 1][y] === undefined) { continue; }
          if (arr[x][y] === arr[x + 1][y]) {
            changes = true;
            arr[x][y] *= 2;
            arr[x + 1][y] = null;
          }
          else if (arr[x + 2] && !arr[x + 1][y] && arr[x + 2][y] && arr[x][y] === arr[x + 2][y]) {
            changes = true;
            arr[x][y] *= 2;
            arr[x + 2][y] = null;
          }
          else if (arr[x + 3] && !arr[x + 2][y] && arr[x + 3][y] && arr[x][y] === arr[x + 3][y]) {
            changes = true;
            arr[x][y] *= 2;
            arr[x + 3][y] = null;
          }
        }
        for (let x = 0; x < 4; x++) {
          for (let y = 0; y < 4; y++) {
            if (arr[x][y]) { continue; }
            if (arr[x + 1] && arr[x + 1][y]) {
              changes = true;
              arr[x][y] = arr[x + 1][y];
              arr[x + 1][y] = null;
            }
            else if (arr[x + 2] && arr[x + 2][y]) {
              changes = true;
              arr[x][y] = arr[x + 2][y];
              arr[x + 2][y] = null;
            }
            else if (arr[x + 3] && arr[x + 3][y]) {
              changes = true;
              arr[x][y] = arr[x + 3][y];
              arr[x + 3][y] = null;
            }
          }
        }
      }
      break;

    default:
      return arr;
  }
  if (changes) { return [...arr]; }
  return arr;
};

export const failCheck = (arr) => {
  for (let x = 0; x < 4; x++) {
    for (let y = 0; y < 4; y++) {
      if (
        !arr[x][y] ||
        (arr[x + 1] && arr[x][y] === arr[x + 1][y]) ||
        (arr[x - 1] && arr[x][y] === arr[x - 1][y]) ||
        arr[x][y] === arr[x][y + 1] ||
        arr[x][y] === arr[x][y - 1]
      ) { return false; }
    }
  }
  return true;
}

export const random = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
}

export default null;
