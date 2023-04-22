var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter= document.getElementById('filter');
// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup',filteritems);

// Add item
function addItem(e){
  e.preventDefault();

  // Get input value
  var newItem = document.getElementById('item').value;
  var newItems = document.getElementById('itemdescription').value;

  // Create new li element
  var li = document.createElement('li');
  // Add class
  li.className = 'list-group-item';
  // Add text node with input value
  var textNode = document.createTextNode(newItem +' '+ newItems);
  li.appendChild(textNode);

  // Create del button element
  var deleteBtn = document.createElement('button');
  var editBtn=document.createElement('button');
  // Add classes to del and edit button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
  editBtn.className = 'btn btn-danger btn-sm float-right edit';

  // Append text node
  deleteBtn.appendChild(document.createTextNode('X'));
  editBtn.appendChild(document.createTextNode('edit'));

  // Append button to li
  li.appendChild(deleteBtn);
  li.appendChild(editBtn);

  // Append li to list
  itemList.appendChild(li);
}

// Remove item
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

//filter items
function filteritems(e){
    var text=e.target.value.toLowerCase();
    var lists=document.getElementsByTagName('li');
    //here we usualluy get output in html collection and we need to convert it into the node list for that we can have following procedure
    Array.from(lists).forEach(function(item){
        var itemname=item.firstChild.textContent;
       if(itemname.toLowerCase().indexOf(text)!=-1)
       {
        item.style.display='block';
       }
       else
       {
        item.style.display='none';
       }

    });

   
}