//get references to html elements

const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

//function to add a new task
function addTask(){
	const taskText = taskInput.value.trim()
	if (taskText !== '') {
		//create a new list item
		const listItem = document.createElement('li');
		//assigning tasktext to the listItem
		listItem.innerText = taskText;

		//add a click event listener to mark as completed
		listItem.addEventListener('click', function() {
			//toggle the 'completed class'
			listItem.classList.toggle('completed');
		});
        //add a delete button to remove the task
		const deleteBtn = document.createElement('button');
		deleteBtn.innerText = 'delete';
		deleteBtn.addEventListener('click', function() {
			// body...
			listItem.remove();
		});
		listItem.appendChild(deleteBtn);

		taskList.appendChild(listItem);

		//clear the input field
		taskInput.value = '';

	}
}