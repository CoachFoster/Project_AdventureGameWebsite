function chooseItem(selectedItem) {
  var chosenItem;
  var choiceText;

  x = confirm("You have selected the " + selectedItem + ", please confirm.");
  
  if (x == true) {
    chosenItem = selectedItem;
    choiceText = "You have chosen to take the " + selectedItem + " with you on your hike.";
  }
  else {
    choiceText = "You canceled your item choice. Please make another selection."
  }
  document.getElementById("itemChoice").innerHTML = choiceText;
}