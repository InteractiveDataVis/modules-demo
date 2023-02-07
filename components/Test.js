class TestClassComponent {

  // class fields
  something = "something"

  // constructor
  constructor(initialProps) {
    console.log(initialProps)
    this.method()
    this.method2()
  }

  // class methods
  method() {
    console.log("method1")
    console.log(this)
  }

}

export { TestClassComponent };
