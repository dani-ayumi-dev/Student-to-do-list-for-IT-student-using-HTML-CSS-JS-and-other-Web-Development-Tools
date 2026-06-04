// 1. add_task button
// Create a constant for my button

const button_to_add = document.getElementById("button-to-add-a-task");



// Add this new <p> to my div (in this case it's the check_tasks div) when button_to_add is clicked

button_to_add.addEventListener("click", (e) => {

    
    //  Create a new <p> element to receive the input text

    const new_p = document.createElement("p");


    // Create the button to check the task and add its atts

    const check_btn = document.createElement("input");
    check_btn.type = "button";
    check_btn.value = "Check";
    check_btn.id = "check_button";
    check_btn.className ="button_task_is_done";

    //  Get the text that is inside the input

    const task_text = document.querySelector("#task_input").value;

    // create new span and add class attribute

    const new_span = document.createElement("span");

    new_span.className = "span";

    // add task_text inside the span

    new_span.textContent = task_text;


    
    // put the button inside the p element
    new_p.append(new_span)
    new_p.append(check_btn)

    //  Select the div that contain all the tasks. Note: Class is an array, class[0] is the first element of the array

    const tasks_list = document.getElementsByClassName("check_tasks")[0];
    tasks_list.prepend(new_p);

    // add check event to the check_task btn

    check_btn.addEventListener("click", () => {
        // define the span text that will go to the tasks_done_div
        const new_p1 = document.createElement("p");
        const div_checked_tasks = document.getElementsByClassName("tasks_done")[0];
        new_span.style.fontSize = "150%"
        div_checked_tasks.append(new_span);
        check_btn.remove()


    }

    );
});

// 2. Add a check_button const


const check_buttons = document.querySelectorAll(".button-task-is-done");
check_buttons.forEach( function call_btn(button){
    // add an event listener for when the button is clicked

    button.addEventListener("click", () => {
        const span = button.parentElement.querySelector("span");

    // I want to get exactly the span and "transport" it to the div

    // Create a constant of the div where the tasks that are done are located

        const tasks_done = document.getElementsByClassName("tasks_done");



    // Insert the new_p to the div

        tasks_done[0].append(span);

        span.style.fontSize = "150%"

        button.remove()
        

    });
    
});

    




// 













