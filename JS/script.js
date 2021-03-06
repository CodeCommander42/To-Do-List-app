function newItem()
{
  // adding new item to list.
  let li = $("<li></li>");
  let inputValue = $("#input").val();
  li.append(inputValue);
  

  if (inputValue === " ")
  {
    alert("you must type something!");
  }
    else 
    {
      $("list").append(li);
    }

  // crossing out an item from the list
  function crossOut() 
  {
    li.toggleClass("strike");
  }

  li.on("dblclick", crossOut())
 

  // adding the delete button "X"
  let crossOutButton = $("<crossOutButton></crossOutButton>");
  crossOutButton.append(document.createTextNode('X'));
  li.append(crossOutButton);

  crossOutButton.on("click", deleteListItem);

  // adding the delete class from css
  function deleteListItem()
  {
    li.addClass("delete");
  }

  $('#list').sortable();

}