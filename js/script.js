function newItem() {

  //javascript
  //1. Adding a new item to the list of items:

  let li = $('<li></li>'); // create new items
  let inputValue = $('#input').val();
  li.append(inputValue);


  if (inputValue === '') {
    alert("Empty!");
  } else {
    $('#list').append(li);
  } // alert message or new list item

  //2. Crossing out an item from the list of items:
  function crossOut() {
    li.toggleClass("strike");
  }

  li.on("dblclick", function crossOut() {
    li.toggleClass("strike");
  })
  //3(i). Adding the delete button "X":

  let crossOutButton = $('<crossOutButton></crossOutButton>');
  crossOutButton.append(document.createTextNode('X'));
  li.append(crossOutButton);


  // crossOutButton.addEventListener("click", deleteListItem);
  // //3(ii). Adding CLASS DELETE (DISPLAY: NONE) from the css:

  crossOutButton.on("click", deleteListItem);

  function deleteListItem() {
    li.addClass("delete")
  }

  // 4. Reordering the items:
  $('#list').sortable();


}

$('#input').keypress((event) => {
  var keycode = (event.keyCode ? event.keyCode : event.which);
  if (keycode === '13') {
    newitem();
  }
});
