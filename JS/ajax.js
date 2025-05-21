// let xhr = new XMLHttpRequest(); // Create the request object

// xhr.open("GET", "data.json", true); // Method, URL, async

// xhr.onload = function () {
//   if (xhr.status === 200) {
//     console.log(xhr.responseText); // Data from server
//   }
// };

// xhr.send(); // Send the request

//modern way
fetch("data.json")
  .then((response) => response.json()) // Convert response to JSON
  .then((data) => console.log(data)) // Use the data
  .catch((error) => console.error("Error:", error));

// fetch("submit.php", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify({ name: "John", age: 25 }),
// })
//   .then((res) => res.json())
//   .then((data) => console.log(data));
