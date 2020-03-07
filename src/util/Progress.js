function initPercentage(maxNum, increaseNum, timer) {
  setInterval(() => {
    if (this.percentage !== maxNum) {
      this.percentage += increaseNum;
    } else {
      return;
    }
  }, timer);
}

function initSuccessPercentage(maxNum, increaseNum, timer) {
  setInterval(() => {
    if (this.successPercentage !== maxNum) {
      this.successPercentage += increaseNum;
    } else {
      return;
    }
  }, timer);
}
function initWarningPercentage(maxNum, increaseNum, timer) {
  setInterval(() => {
    if (this.warningPercentage !== maxNum) {
      this.warningPercentage += increaseNum;
    } else {
      return;
    }
  }, timer);
}

export {
  initPercentage,
  initSuccessPercentage,
  initWarningPercentage
}