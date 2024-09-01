const b = {
  name: "Vivek",
  f: function () {
    var self = this;
    console.log(this.name); //vivek
    (function () {
      console.log(this.name); //window or global
      console.log(self.name); //vivek
    })();
  }
}
b.f();

//Only in the IIFE inside the function f, this keyword refers to the global/window object