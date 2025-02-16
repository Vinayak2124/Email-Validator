
let submitbtn = document.getElementById("submit")
let container = document.querySelector(".container2")

submitbtn.addEventListener("click", async(e) => {
    e.preventDefault()
    container.style.display = "block";

    let descript = document.getElementById("email-description");
    descript.innerHTML= `<img width="250" src="loader.svg" alt="loading" />`
    let email = document.querySelector("#email").value;

    let key = "ema_live_OUJ33ss2KmY66eI88SofF4wQhH5f1quVGtC101VY";
    let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`;

    const res = await fetch(url);
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
    let result = await res.json();
    
      if (result.state === "deliverable") {
          alert(`The email ${email} is deliverable!`);
        } else {
          alert(`The email ${email} is not deliverable. Reason: ${result.reason}`);
        }

let str = "";
    for (keys of Object.keys(result)) {
        if (result[keys] !== "" && result[keys] !== " ") {
            str = str + `<div>${keys}: ${result[keys]}</div>`;
        }
    }

descript.innerHTML = str;


}
)

