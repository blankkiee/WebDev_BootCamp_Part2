import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  // const today = new Date("April 5, 2025 11:26:00");
  // const day = today.getDay();
  let bowl = ["mango", "grapes", "apple"];
  // let type = "It's weekdays";
  // let adv = "It's time to work hard";

  // if (day === 0 || day === 6) {
  //   type = "It's weekend";
  //   adv = "It's time to have some fun";
  // }

  // switch (day) {
  //   case 0:
  //     type = "Its weekend";
  //     adv = "It's time to have some fun";
  //     break;
  //   case 6:
  //     type = "Its weekend";
  //     adv = "It's time to have some fun";
  //     break;

  //   default:
  //     break;
  // }
  res.render("index.ejs", {
    fruits: bowl,
    // dayType: type,
    // advice: adv,
  });
});

app.listen(port, () => {
  console.log(`port running on ${port}`);
});
