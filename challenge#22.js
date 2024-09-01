let count = 0;
(function immediate() {
  if (count === 0) {
    let count = 1;
    console.log(count); //1 blocked scope
  }
  console.log(count); //0 blocked scope
})();