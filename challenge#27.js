let user1 = {
    name: "soju",
    age: 24,
      childObj:{
          newName:"CR7",
          getDetails() {
              console.log(this.newName, "and" ,this.name); //CR7 and undefined
          }
      }
  };
  
  user1.childObj.getDetails()