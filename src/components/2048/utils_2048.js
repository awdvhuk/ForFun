const isNumeric = (n) => {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

export const getColor = (value) => {
  let background = 'white';
  let color = 'black';
  let borderColor = 'grey';
  if (value > 4) { color = 'white'; }

  switch (value) {
    case null:
      background = '#dedede';
      borderColor = '#c7c7c7';
      break;

    case 2:
      color = 'black';
      background = '#fff6ef';
      borderColor = '#e0d7d0';
      break;

    case 4:
      background = '#ffeed2';
      borderColor = '#e2d3bb';
      break;

    case 8:
      background = '#f4a973';
      borderColor = '#e49c69';
      break;

    case 16:
      background = '#f98c5e';
      borderColor = '#ec8356';
      break;

    case 32:
      background = '#fa7559';
      borderColor = '#ec7032';
      break;

    case 64:
      background = '#fc5638';
      borderColor = '#e04c31';
      break;

    case 128:
    case 256:
    case 512:
    case 1024:
      background = '#eec76f';
      borderColor = '#e0bc6a';
      break;

    case 2048:
      background = '#eeb02d';
      borderColor = '#d49c27';
      break;

    default:
      background = 'black';
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
  let score = 0;
  switch (key) {
    case 'ArrowUp':
      for (let x = 0; x < 4; x++) {
        for (let y = 0; y < 4; y++) {
          if (!arr[x][y] || arr[x][y + 1] === undefined) { continue; }
          if (arr[x][y] === arr[x][y + 1]) {
            changes = true;
            arr[x][y] *= 2;
            score += arr[x][y];
            arr[x][y + 1] = null;
          }
          else if (!arr[x][y + 1] && arr[x][y + 2] && arr[x][y] === arr[x][y + 2]) {
            changes = true;
            arr[x][y] *= 2;
            score += arr[x][y];
            arr[x][y + 2] = null;
          }
          else if (!!arr[x][y + 1] && !arr[x][y + 2] && arr[x][y + 3] && arr[x][y] === arr[x][y + 3]) {
            changes = true;
            arr[x][y] *= 2;
            score += arr[x][y];
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

          // console.log(x);
          // console.log(arr[2][y], arr[1][y]);

          if (!arr[x][y] || !arr[x - 1] || arr[x - 1][y] === undefined) { continue; }
          debugger;
          if (arr[x][y] === arr[x - 1][y]) {

            changes = true;
            arr[x][y] *= 2;
            score += arr[x][y];
            arr[x - 1][y] = null;
          }
          else if (arr[x - 2] && !arr[x - 1][y] && arr[x - 2][y] && arr[x][y] === arr[x - 2][y]) {
            changes = true;
            arr[x][y] *= 2;
            score += arr[x][y];
            arr[x - 2][y] = null;
          }
          else if (arr[x - 3] && !arr[x - 1][y] && !arr[x - 2][y] && arr[x - 3][y] && arr[x][y] === arr[x - 3][y]) {
            changes = true;
            arr[x][y] *= 2;
            score += arr[x][y];
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
            score += arr[x][y];
            arr[x][y - 1] = null;
          }
          else if (!arr[x][y - 1] && arr[x][y - 2] && arr[x][y] === arr[x][y - 2]) {
            changes = true;
            arr[x][y] *= 2;
            score += arr[x][y];
            arr[x][y - 2] = null;
          }
          else if (!arr[x][y - 1] && !arr[x][y - 2] && arr[x][y - 3] && arr[x][y] === arr[x][y - 3]) {
            changes = true;
            arr[x][y] *= 2;
            score += arr[x][y];
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
            score += arr[x][y];
            arr[x + 1][y] = null;
          }
          else if (arr[x + 2] && !arr[x + 1][y] && arr[x + 2][y] && arr[x][y] === arr[x + 2][y]) {
            changes = true;
            arr[x][y] *= 2;
            score += arr[x][y];
            arr[x + 2][y] = null;
          }
          else if (arr[x + 3] && !arr[x + 1][y] && !arr[x + 2][y] && arr[x + 3][y] && arr[x][y] === arr[x + 3][y]) {
            changes = true;
            arr[x][y] *= 2;
            score += arr[x][y];
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
      return { values: arr, score };
  }
  if (changes) { arr = arr.slice(); }
  return { values: arr, score };
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

export const getHist = () => {
  let history = JSON.parse(localStorage.getItem("awdvhuk_site-games/2048-history"));
  if (
    !history ||
    !Array.isArray(history) ||
    !Array.isArray(history[0]) ||
    !Array.isArray(history[0][0])
  ) { return []; }

  return history;
}

export const setHist = (history) => {
  localStorage.setItem("awdvhuk_site-games/2048-history", JSON.stringify(history));
}

export const getScore = () => {
  let score = JSON.parse(localStorage.getItem("awdvhuk_site-games/2048-score"));
  let record = JSON.parse(localStorage.getItem("awdvhuk_site-games/2048-record"));
  if (!score || !Array.isArray(score)) {
    score = [0];
    localStorage.setItem("awdvhuk_site-games/2048-score", JSON.stringify(score));
  }
  if (!record || !isNumeric(record)) {
    record = 0;
    localStorage.setItem("awdvhuk_site-games/2048-record", JSON.stringify(record));
  }
  return {
    score,
    record
  };
}

export const setScore = (score, record) => {
  if (score) {
    localStorage.setItem("awdvhuk_site-games/2048-score", JSON.stringify(score));
  }
  if (record) {
    localStorage.setItem("awdvhuk_site-games/2048-record", JSON.stringify(record));
  }
}

export const copy = (arr) => {
  if (!arr || !arr.length) { return arr; }
  return [
    arr[0].slice(),
    arr[1].slice(),
    arr[2].slice(),
    arr[3].slice()
  ];
}

export const random = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
}

export default null;
