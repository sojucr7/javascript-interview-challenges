const a = function () {
  console.log(this); //window or global

  const b = {
    func1: function () {
      console.log(this); // object b
    }
  }

  const c = {
    func2: () => {
      console.log(this); //window or global
    }
  }

  b.func1();
  c.func2();
}

a();