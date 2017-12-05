class Storage {
  name="";
  constructor(a){
    this.name=a;
  }
  keep(){
    console.log(this.name);
  }
}

module.exports = Storage;