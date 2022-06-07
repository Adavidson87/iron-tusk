(function () {
  emailjs.init("nUqeD7kqFEtTTlzg5");
})();

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const serviceID = "service_ef0excg";
    const templateID = "template_qll60y8";

    // send the email here
    emailjs.sendForm(serviceID, templateID, this).then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("SUCCESS!");
      },
      (error) => {
        console.log("FAILED...", error);
        alert("FAILED...", error);
      }
    );
  });