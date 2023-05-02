<template>
  <div>
    <div>
      <main class="main-container">
        <div class="balance">
          <div>
            <p class="balance__title">My Balance</p>
            <p class="balance__total">$921.48</p>
          </div>
          <div>
            <img class="balance__logo" src="/images/logo.svg" alt="" />
          </div>
        </div>
        <div class="chart">
          <h2 class="chart__title">Spending - Last 7 days</h2>
          <div class="chart__bars-container">
            <!-- <div class="chart__bar">
        <div class="chart__bar--label">$35.20</div>
        <div class="chart__bar--day">mon</div>
      </div> -->
          </div>
          <div class="chart__analytics">
            <div>
              <p class="chart__total">Total this month</p>
              <p class="chart__total--value">478.33</p>
            </div>
            <div>
              <p class="chart__percent">+2.4%</p>
              <p class="chart__period">from last month</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import store from "@/store";

export default {
  data() {
    return {
      idUser: store.state.userData.idUser,
      values: [],
      charBarsContainer: document.querySelector(".chart__bars-container")
    }
  },
  mounted() {
    this.getPays();
  },
  methods: {
    getPays() {
      const options = {
        method: "GET",
        url: "http://localhost:8080/api/get-allpays-byid",
        params: { id: "49" },
      };
      axios
        .request(options)
        .then(function (response) {
          let datos = response.data;
          console.log(datos);
          this.generajs();
          datos.forEach((e) => {
              this.values.push(e.monto);
              this.charBarsContainer.innerHTML += `
              <div class="chart__bar">
                <div class="chart__bar--label">$${e.monto}</div>
              <div class="chart__bar--day">${e.dia}</div>
            </div>`;
        });
        })
        .catch(function (error) {
          console.error(error);
        });
    },
    generajs: function () {

// let values = [];

// datos.forEach((e) => {
//   values.push(e.monto);
//   charBarsContainer.innerHTML += `
//   <div class="chart__bar">
//     <div class="chart__bar--label">$${e.amount}</div>
//     <div class="chart__bar--day">${e.day}</div>
//   </div>`;
// });
// /*--------------------------------------------------------------
// # create the interactive labels
// --------------------------------------------------------------*/
let bars = document.querySelectorAll(".chart__bar");
bars = [...bars];

let maxHeightBar = 150;
let maxValue = Math.max(...this.values);

bars.forEach((bar) => {
let newValue = parseFloat(bar.childNodes[1].innerText.slice(1));

let actualHeight = (newValue * maxHeightBar) / maxValue;

bar.style.height = `${actualHeight}px`;

  if (newValue == maxValue) {
    bar.style.backgroundColor = '#76b5bc';
  }

  bar.addEventListener("mouseover", (e) => {
    if (e.target.className == 'chart__bar') {
      let labelElement = e.target.childNodes[1];
      labelElement.style.display = "block";
    }
  });
  bar.addEventListener("mouseout", (e) => {
    if (e.target.className == "chart__bar") {
      let labelElement = e.target.childNodes[1];
      labelElement.style.display = "none";
    }
  });
});
    }
  },
};

// http://localhost:8080/api/get-allpays-byid?id=49
// import data from "";
// /*--------------------------------------------------------------
// # Create Bars
// --------------------------------------------------------------*/
// let charBarsContainer = document.querySelector(".chart__bars-container");

// let values = [];

// datos.forEach((e) => {
//   values.push(e.monto);
//   charBarsContainer.innerHTML += `
//   <div class="chart__bar">
//     <div class="chart__bar--label">$${e.amount}</div>
//     <div class="chart__bar--day">${e.day}</div>
//   </div>`;
// });
// /*--------------------------------------------------------------
// # create the interactive labels
// --------------------------------------------------------------*/
// let bars = document.querySelectorAll(".chart__bar");
// bars = [...bars];

// let maxHeightBar = 150;
// let maxValue = Math.max(...values);

// bars.forEach((bar) => {
// let newValue = parseFloat(bar.childNodes[1].innerText.slice(1));

// let actualHeight = (newValue * maxHeightBar) / maxValue;

// bar.style.height = `${actualHeight}px`;

//   if (newValue == maxValue) {
//     bar.style.backgroundColor = '#76b5bc';
//   }

//   bar.addEventListener("mouseover", (e) => {
//     if (e.target.className == 'chart__bar') {
//       let labelElement = e.target.childNodes[1];
//       labelElement.style.display = "block";
//     }
//   });
//   bar.addEventListener("mouseout", (e) => {
//     if (e.target.className == "chart__bar") {
//       let labelElement = e.target.childNodes[1];
//       labelElement.style.display = "none";
//     }
//   });
// });
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;700&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "DM Sans", sans-serif;
  background-color: hsl(27deg, 66%, 92%);
  font-size: 18px;
}

.main-container {
  width: 344px;
  margin: 68px auto;
}
@media (min-width: 600px) {
  .main-container {
    width: 540px;
  }
}

.balance {
  background-color: hsl(10deg, 79%, 65%);
  height: 100px;
  border-radius: 16px;
  padding: 24px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: hsl(33deg, 100%, 98%);
  margin-bottom: 16px;
}
.balance__title {
  font-size: 0.7em;
  margin-bottom: 6px;
}
.balance__total {
  font-weight: 700;
  font-size: 1.4em;
}
.balance__logo {
  width: 60px;
}
@media (min-width: 600px) {
  .balance {
    height: 126px;
  }
  .balance__title {
    font-size: 1em;
    margin-bottom: 12px;
  }
  .balance__total {
    font-size: 1.8em;
  }
  .balance__logo {
    width: 75px;
  }
}

.chart {
  background-color: hsl(33deg, 100%, 98%);
  color: hsl(28deg, 10%, 53%);
  border-radius: 16px;
  height: 424px;
  padding: 28px 20px;
}
.chart__title {
  color: hsl(25deg, 47%, 15%);
  font-size: 1.25em;
  margin-bottom: 10px;
}
.chart__bars-container {
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  margin-bottom: 30px;
  height: 220px;
}
.chart__bar {
  background-color: hsl(10deg, 79%, 65%);
  height: 200px;
  width: 32px;
  position: relative;
  border-radius: 4px;
}
.chart__bar--label {
  background-color: hsl(25deg, 47%, 15%);
  width: 38px;
  padding: 4px;
  font-size: 0.5em;
  color: hsl(33deg, 100%, 98%);
  border-radius: 4px;
  font-weight: 700;
  position: absolute;
  top: -24px;
  left: -4px;
  display: none;
}
.chart__bar--day {
  position: absolute;
  bottom: -16px;
  font-size: 0.6em;
  width: 32px;
  text-align: center;
}
.chart__bar:hover {
  cursor: pointer;
  filter: brightness(1.2);
}
.chart__analytics {
  display: flex;
  justify-content: space-between;
  padding: 24px;
  font-size: 0.8em;
  border-top: 3px solid hsl(27deg, 66%, 92%);
}
.chart__total {
  margin-bottom: 8px;
}
.chart__total--value {
  color: hsl(25deg, 47%, 15%);
  font-size: 1.4em;
  font-weight: 700;
}
.chart__percent {
  color: hsl(25deg, 47%, 15%);
  font-weight: 700;
  text-align: right;
  margin-top: 18px;
}
@media (min-width: 600px) {
  .chart {
    height: 512px;
    padding: 44px;
  }
  .chart__title {
    font-size: 2em;
  }
  .chart__bars-container {
    margin-bottom: 50px;
  }
  .chart__bar {
    width: 50px;
  }
  .chart__bar--label {
    width: 54px;
    font-size: 0.7em;
    top: -32px;
    left: 2px;
  }
  .chart__bar--day {
    width: 54px;
    bottom: -24px;
    font-size: 0.8em;
  }
  .chart__analytics {
    padding-top: 32px;
    font-size: 1em;
  }
  .chart__total-value {
    font-size: 2.4em;
  }
  .chart__percent {
    margin-top: 30px;
  }
}

.attribution {
  font-size: 11px;
  text-align: center;
}

.attribution a {
  color: hsl(228deg, 45%, 44%);
}

/*# sourceMappingURL=styles.css.map */
</style>
