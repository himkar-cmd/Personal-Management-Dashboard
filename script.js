document.getElementById('add-task-btn').addEventListener('click', function() {
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
    if (taskInput.value.trim() !== "") {
      const newTask = document.createElement('li');
      newTask.textContent = taskInput.value;
      taskList.appendChild(newTask);
      taskInput.value = '';   
      const deleteBtn = document.createElement('button');  
      deleteBtn.textContent = 'Delete';  
      deleteBtn.addEventListener('click', function() {  
          taskList.removeChild(newTask);  
      }); 
      newTask.appendChild(deleteBtn);  
    }
  });
  
  document.getElementById('save-note-btn').addEventListener('click', function() {
    const noteInput = document.getElementById('note-input');
    const noteList = document.getElementById('note-list');
    if (noteInput.value.trim() !== "") {
      const newNote = document.createElement('li');
      newNote.textContent = noteInput.value;
      noteList.appendChild(newNote);
      noteInput.value = '';
      const deleteBtn = document.createElement('button');  
      deleteBtn.textContent = 'Delete'; 
      deleteBtn.addEventListener('click', function() {  
          noteList.removeChild(newNote);  
      });  
      newNote.appendChild(deleteBtn); 
    }
  });
  
  document.getElementById('add-goal-btn').addEventListener('click', function() {
    const goalInput = document.getElementById('goal-input');
    const goalList = document.getElementById('goal-list');
    if (goalInput.value.trim() !== "") {
      const newGoal = document.createElement('li');
      newGoal.textContent = goalInput.value;
      goalList.appendChild(newGoal);
      goalInput.value = ''; 
      const deleteBtn = document.createElement('button');  
      deleteBtn.textContent = 'Delete';  
      deleteBtn.addEventListener('click', function() {  
          goalList.removeChild(newGoal);  
      });  
      newGoal.appendChild(deleteBtn); 
    }
  });
  
  // You can later add functionality for fetching weather from an API, etc.
  