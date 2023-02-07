// import our components
import { Table } from "./components/Table.js";
import { Barchart } from "./components/Barchart.js";
import { Count } from "./components/Count.js";
import { TestClassComponent } from "./components/Test.js";

new TestClassComponent("prop");

let table, barchart, count;

// global state
let state = {
  data: [],
  domain: [],
  selectedState: null,
  selectedMetric: null,
};

d3.csv("./statePopulations.csv", d3.autoType).then(data => {
  console.log("data", data);
  state.data = data;
  state.domain = [
    0,
    d3.max(data
      .map(d => [d["Age < 20"], d["Age 20-65"], d["Age 65+"]])
      .flat()
    )]
  init();
});

function init() {
  
}

function draw() {
 
}

function setGlobalState(nextState) {
  
}
