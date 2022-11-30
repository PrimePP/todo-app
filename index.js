//selecting elements
const addButton = document.querySelector(".addButton");
const toDoInput = document.querySelector(".input");
const toDoShow = document.querySelector(".container");


//adds and removes elements
addButton.addEventListener("click", function () {
  if (toDoInput.value === "") {
    alert("Todo's cannot be empty ❓❓❓");
  } else {
    console.log(toDoInput.value);
    const inputDiv = document.createElement("div");
    inputDiv.classList.add("input_div",'todo-input');
    const heading = document.createElement("h2");
    heading.classList.add("todoEle", "todo-text");
    heading.textContent = toDoInput.value + " 🏃🏻‍♂️";
    const btn = document.createElement("button");
    btn.classList.add("didBtn");
    btn.innerHTML = '<i class="fa-solid fa-check-double"></i>';
    inputDiv.appendChild(heading);
    inputDiv.appendChild(btn);
    console.log(inputDiv);
    toDoShow.appendChild(inputDiv);
    toDoInput.value = "";

    btn.addEventListener('click',function(){
        inputDiv.classList.add('hide');
    })
  }
});
