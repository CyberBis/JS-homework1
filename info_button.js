class ourButtons {
  constructor(width, height, type, colour) {
    this.width = width;
    this.height = height;
    this.type = type;
    this.colour = colour;
    this.props = { width, height, type, colour };
  }
  onclick() {
    console.log(this.props);
  }
}
let goodButton = new ourButtons("300", "500", "button", "green");
let badButton = new ourButtons("700", "800", "box", "red");

goodButton.onclick();

function testButton(test) {
  if (test.props.type === "button") {
    console.log(`Your button correct`);
  } else {
    `Incorrect information`;
  }
}

testButton(goodButton);
