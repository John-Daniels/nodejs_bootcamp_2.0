// arrow functions
const square = (x) => x * x;
console.log(square(5));

// this binding

const _event = {
  name: "Birthday Party",
  guestList: ["John", "Paul", "Peter"],
  printGuestList() {
    console.log("Guest list for", this.name);
    this.guestList.forEach((guest) =>
      console.log(guest, "is attending the", this.name)
    );
  },
};

_event.printGuestList();

const day = "wednesday";
const time = "12:31pm";

const someInfo = {
  day,
  time,
};

console.log(someInfo);
