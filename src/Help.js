export default {
  sayHi: function () {
    console.log("hi");
  },
  randomElement: function (arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  },
};
