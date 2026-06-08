# HTML
## Head 
- title, IT to do list ✅
- H2 (date and day of week) ✅


## body
- Title: h1 All I gotta do for today
- label: add-task-input(what task to add) ✅
- input button (add the task) ✅

- title: tasks to do✅
- p task 1...✅
- check button (for each task)✅
- h2 all the tasks done for today✅
- p all the tasks that were done✅


# CSS

1. Centralize title and date 
--> change font and size✅

2. Centralize input tasks (tasks to add) and add button 
--> Change font and size✅

3. check_tasks container (with all the tasks to be done) should be the focus of the screen (in different color)
--> change font and size✅
--> input button add icon✅
--> change cursor hover when cursor touches add-task button✅
--> put tasks inside a span within the <p> element ✅
1. Centralize tasks_to_do_input to the center of general screen✅



# JavaScript

1. Button-add-task, when clicked, it sends the input data to the list of tasks to be done ✅
2. Button-task-is-done sends the task to the list of tasks done decorated with a line-through ✅
3. Today's date needs to show today's date
4. If the input box is empty, nothing should be added 👈

Bonus

1. Make a delete_item_button from the to-do-list
2. Dark-light toggle


# (the cause of my headaches) Fixing My check-task-button problem in Script

1. the value inside the span is not being displayed (span.textContent) and instead an "undefined" message is appearing ✅

Solution: when the page is loaded, the function I created to the check-button only works for the existing tasks and the created tasks's button don't receive this function.

To fix this problem, I created the function for the check-buttons immediately when the new task was added, so the new check-buttons receive this function and work accordingly.

2. The added <p> elements to the to-do list has a check-button that doesn't display any text in the tasks-done list✅



# formatting the page style dynamically

1. I noticed that the new tasks' check-buttons are too close to the task text (no left margin to the check buttons) ✅

2. The checked tasks should all have the same font size, but the new checked tasks are a bit smaller to the default tasks which is not ideal ✅

3. Checked tasks should have a line through and should be in italic to represent that the task was done✅

4. A - should be added before the task text like such -> "- Deploy system"
    Obs: if the user type "-" in the first index, the system should not include another "-". A conditional script should be done here to fix this issue.✅


