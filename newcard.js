document.getElementById("generateCard").addEventListener("click", function () {
    let name = document.getElementById("name").value.trim();
    let theme = document.getElementById("theme").value;
  
    if (name === "") {
      alert("Please enter a name.");
      return;
    }
  
    let cardTitle = document.getElementById("cardTitle");
    let cardMessage = document.getElementById("cardMessage");
    let card = document.getElementById("card");
  
    let themeMessages = {
      Eid: `🎉 Eid Mubarak, ${name}! 🌙 May this Eid bring you joy, peace, and blessings! 🌟`,
      Appology: `🙏 Dear ${name}, I'm truly sorry. Please accept my sincere apology. 🤍 Saha Eidek 🌙`,
      Invite: `💌 Hey ${name}, you're invited! 📩 Let's celebrate Eid together! 🎊`,
      Eidiyah: `🤑 ${name}, where is my Eidiyah? 💰 CCP or cash! 😉`,
    };
    
  
    cardTitle.innerText = `💌 ${
      theme.charAt(0).toUpperCase() + theme.slice(1)
    } Card`;
    cardMessage.innerText = themeMessages[theme];
  
    card.style.display = "block";
  });
  
  //download Card as an Image
  document.getElementById("downloadCard").addEventListener("click", function () {
    html2canvas(document.getElementById("card")).then((canvas) => {
      let link = (document = document.createElement("a"));
      link.href = canvas.toDataURL("image/png");
      link.download = "greeting_card.png";
      link.click();
    });
  });
  