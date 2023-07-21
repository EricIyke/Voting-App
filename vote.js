document.addEventListener("DOMContentLoaded", function () {
  const accreditedUsersList = document.getElementById("accreditedUsersList");
  const votingOptions = document.querySelectorAll('input[name="voteOption"]');
  const voteButton = document.getElementById("voteButton");
  const addUserButton = document.getElementById("addUserButton");
  const viewResultsButton = document.getElementById("viewResultsButton");
  const resultList = document.getElementById("resultList");
  const eligibleCandidates = ["Eric Iyke", "Peter Obi", "Tinubu"]; // List of eligible candidates

  // Initialize votes and accreditation status from local storage
  let votes = JSON.parse(localStorage.getItem("votes")) || {};
  let accreditedUsers =
    JSON.parse(localStorage.getItem("accreditedUsers")) || [];

  // Update the UI with the initial vote count
  updateResults();

  voteButton.addEventListener("click", function () {
    // Check if the user is accredited
    const currentUser = prompt("Enter your username:");
    if (!currentUser || !accreditedUsers.includes(currentUser)) {
      alert("You are not accredited to vote.");
      return;
    }

    // Check which option is selected
    const selectedOption = document.querySelector(
      'input[name="voteOption"]:checked'
    );
    if (selectedOption) {
      const voteValue = selectedOption.value;

      // Check if the candidate is eligible to vote
      if (!eligibleCandidates.includes(voteValue)) {
        alert("You are trying to vote for an ineligible candidate.");
        return;
      }

      // Update vote count
      if (votes[voteValue]) {
        votes[voteValue]++;
      } else {
        votes[voteValue] = 1;
      }

      // Store the updated votes and accredited users in local storage
      localStorage.setItem("votes", JSON.stringify(votes));
      localStorage.setItem("accreditedUsers", JSON.stringify(accreditedUsers));

      // Update the UI with the new vote count
      updateResults();
    } else {
      alert("Please select an option before voting.");
    }
  });

  addUserButton.addEventListener("click", function () {
    const newUserName = prompt(
      "Enter the username of the new accredited user:"
    );
    if (newUserName) {
      accreditedUsers.push(newUserName);
      localStorage.setItem("accreditedUsers", JSON.stringify(accreditedUsers));
      updateAccreditedUsersList();
    }
  });

  viewResultsButton.addEventListener("click", function () { 
    alert("Results:\n" + JSON.stringify(votes, null, 2));
  });

  function updateResults() {
    // Clear existing results
    resultList.innerHTML = "";

    // Update the UI with the new vote count
    for (const option in votes) {
      // const listItem = document.createElement("li");
      // listItem.textContent = `${option}: ${votes[option]} votes`;
      // resultList.appendChild(listItem);
    }
  }

  function updateAccreditedUsersList() {
    accreditedUsersList.innerHTML = "";
    for (const user of accreditedUsers) {
      const listItem = document.createElement("li");
      listItem.textContent = user;
      accreditedUsersList.appendChild(listItem);
    }
  }

  // Initial update of the accredited users list
  updateAccreditedUsersList();
});
function clearResults() {
      resultList.innerHTML = "";
          localStorage.removeItem("votes")

}
logoutBtn.addEventListener("click", function () {
  window.location.href = "index.html";
});
let viewProfile = document
  .getElementById("viewProfile")
  .addEventListener("click", () => {
    let userDetails = localStorage.getItem("userDetails");
    // Use the retrieved userDetails for further processing
    let displayProfile = document.getElementById("displayProfile");
    displayProfile.innerHTML = userDetails;
  });
