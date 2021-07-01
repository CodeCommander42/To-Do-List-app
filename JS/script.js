function newItem()
{

  let li = $("<li></li>");
  let inputValue = $("#input");
  li.append(document.createTextNode('x'));

  if (inputValue === " ")
  {
    alert("you must type something!");
  }
    else 
    {
      let list = $("#list");
      list.append(li);
    }

  function crossOut() 
  {
    li.addClassToggle("strike");
  }

  $("li").on("click", crossOut())
 


  










}