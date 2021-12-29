export function checkForName(inputText) {
  console.log("::: Running checkForName :::", inputText);
  //     let names = [
  //         "Picard",
  //         "Janeway",
  //         "Kirk",
  //         "Archer",
  //         "Georgiou"
  //     ]

  //     if(names.includes(inputText)) {
  //         alert("Welcome, Captain!")
  //     }
  // }
  let regex = new RegExp(
    /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
  );
  return regex.test(inputText);
}
