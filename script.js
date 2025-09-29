const output = document.getElementById("output");

output.innerHTML = `
  <tr>
    <td colspan="2" class="text-center">Loading...</td>
  </tr>
`;


function createRandomPromise(name) {
  const delay = Math.random() * 2 + 1; 
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ name, time: delay });
    }, delay * 1000);
  });
}


const promises = [
  createRandomPromise("Promise 1"),
  createRandomPromise("Promise 2"),
  createRandomPromise("Promise 3"),
];


Promise.all(promises).then((results) => {
  output.innerHTML = "";

  results.forEach((res) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${res.name}</td>
      <td>${res.time.toFixed(3)}</td>
    `;
    output.appendChild(row);
  });

  const totalTime = Math.max(...results.map((r) => r.time));
  const totalRow = document.createElement("tr");
  totalRow.innerHTML = `
    <td>Total</td>
    <td>${totalTime.toFixed(3)}</td>
  `;
  output.appendChild(totalRow);
});
