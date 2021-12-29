export function handleSubmit(event) {
  event.preventDefault();

  // check what text was put into the form field
  let formText = document.getElementById("name").value;
  if (Client.checkForName(formText)) {
    let data = {
      url: formText,
    };

    console.log(data);
    console.log("::: Form Submitted :::");

    postData("http://localhost:8081/test", data)
      // fetch('http://localhost:8081/test', {
      //     method: 'POST',
      //     credentials: 'same-origin',
      //     mode: 'cors',
      //     headers: {

      //         "Content": "application/json"
      //     },
      //     body: JSON.stringify(data)

      // })

      .then(function (res) {
        document.getElementById(
          "agreement"
        ).innerHTML = `Agreement: ${res.agreement}`;
        document.getElementById(
          "confidence"
        ).innerHTML = `Confidence: ${res.confidence}`;
        document.getElementById("irony").innerHTML = `Irony: ${res.irony}`;
        document.getElementById("model").innerHTML = `Model: ${res.model}`;
        document.getElementById(
          "score_tag"
        ).innerHTML = `Score Tag: ${res.score_tag}`;
        console.log(res);
      });
  } else {
    alert("invalid url");
  }
}
const postData = async (url = "", data = {}) => {
  const response = await fetch(url, {
    method: "POST",
    credentials: "same-origin",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  try {
    const newData = await response.json();
    return newData;
  } catch (error) {
    console.log("error", error);
  }
};
