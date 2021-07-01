function newItem()
{
  // adding new item to list.
  let li = $("<li></li>");
  let inputValue = $("#input").val();
  li.append(document.createTextNode('X'));
  

  if (inputValue === " ")
  {
    alert("you must type something!");
  }
    else 
    {
      let list = $("#list");
      list.append(li);
    }

  // crossing out an item from the list
  function crossOut() 
  {
    li.addClassToggle("strike");
  }

  $("li").on("dblclick", crossOut())
 

  // adding the delete button "X"
  let crossOutButton = $("<button class='crossOutButton'>");
  crossOutButton.append(document.createTextNode('X'));
  li.append(crossOutButton);

  $(crossOutButton).on("click", deleteListItem);

  // adding the delete class from css
  function deleteListItem()
  {
    li.addClass("delete");
  }

  $('#list').sortable();
 










}