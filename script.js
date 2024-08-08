var factslist = [
  "The Fashion industry produces 97 million tons of waste annually. That’s the weight of 65 million cars!" /* 0 */,
  "3 million of the total waste produced by the fashion industry is due to packaging materials!" /* 1 */,
  "Some garment workers in Los Angeles get paid as little as $1.58 per hour, even though the minimum wage is $15.00 per hour." /* 2 */,
  "It takes 2’700 litres of water to produce one cotton shirt. That’s the same amount of water that a person can drink for 900 days!" /* 3 */,
  "The Fashion Industry is responsible for 10% of global carbon emissions." /* 4 */,
  "Only 1% of used clothes are recycled into new clothes!" /* 5 */,
  "On average people purchase 70 new garments per year, even though 80 garments are enough clothes for a four season climate." /* 6 */
]

var facts = document.getElementById("fact")
var myButton = document.getElementById("myButton")
var count = 0

if (myButton) {
  myButton.addEventListener("click", factgenerator)
}

function factgenerator() {
  console.log(factslist[count])
  facts.innerHTML = factslist[count]
  count ++
  if (count == factslist.length) {
    count = 0
  }
}
