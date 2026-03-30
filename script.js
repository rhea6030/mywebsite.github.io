function generatePlan() {
  const city = document.getElementById("city").value;
  const days = document.getElementById("days").value;
  const budget = document.getElementById("budget").value;

  let places = [];
  let plan = "";

  if (city === "goa") {
    places = ["Baga Beach", "Fort Aguada", "Anjuna Market"];
  } else if (city === "mumbai") {
    places = ["Gateway of India", "Marine Drive", "Juhu Beach"];
  } else if (city === "jaipur") {
    places = ["Hawa Mahal", "Amber Fort", "City Palace"];
  }

  // Budget suggestion
  let dailyBudget = Math.floor(budget / days);

  plan += `<h2>📍 Trip Plan</h2>`;
  plan += `<p><b>City:</b> ${city.toUpperCase()}</p>`;
  plan += `<p><b>Daily Budget:</b> ₹${dailyBudget}</p>`;

  plan += `<h3>🗺 Suggested Places:</h3><ul>`;
  places.forEach(place => {
    plan += `<li>${place}</li>`;
  });
  plan += `</ul>`;

  plan += `<h3>📅 Day-wise Plan:</h3>`;

  for (let i = 1; i <= days; i++) {
    plan += `<div class="plan">
               <b>Day ${i}:</b> Visit ${places[i % places.length]}
             </div>`;
  }

  document.getElementById("result").innerHTML = plan;
}
