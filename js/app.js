document.getElementById('add-row').addEventListener('click', function(){
    const items = document.getElementById('items');
    const div = document.createElement('div');
    div.innerHTML = ` <input class="course" type="text" placeholder="Course Name(optional)">
            <label for="cars">Grade:</label>
            <select name="cars" id="cars" class="grades">
                <option value="A+">A+</option>
                <option value="A">A</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B">B</option>
                <option value="B-">B-</option>
                <option value="C+">C+</option>
                <option value="C">C</option>
                <option value="D">D</option>
                <option value="F">F</option>
            </select>
            <input id="credit" class="credit" type="text" placeholder="Credit">
            <br>`
            items.appendChild(div);
});

  count = 2;
document.getElementById('add-semester').addEventListener('click', function(){
    const items = document.getElementById('item');
    const div = document.createElement('div');
  
    div.innerHTML = `
            <div id="items">
            <h3 class="semester-title">SEMESTER - ${count}</h3>
            <input class="course" type="text" placeholder="Course Name(optional)">
            <label for="cars">Grade:</label>
            <select name="cars" id="cars" class="grades">
                <option value="A+">A+</option>
                <option value="A">A</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B">B</option>
                <option value="B-">B-</option>
                <option value="C+">C+</option>
                <option value="C">C</option>
                <option value="D">D</option>
                <option value="F">F</option>
            </select>
            <input id="credit" class="credit" type="text" placeholder="Credit">
            <br>
            <input class="course" type="text" placeholder="Course Name(optional)">
            <label for="cars">Grade:</label>
            <select name="cars" id="cars" class="grades">
                <option value="A+">A+</option>
                <option value="A">A</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B">B</option>
                <option value="B-">B-</option>
                <option value="C+">C+</option>
                <option value="C">C</option>
                <option value="D">D</option>
                <option value="F">F</option>
            </select>
            <input id="credit" class="credit" type="text" placeholder="Credit">
            <br>
            <input class="course" type="text" placeholder="Course Name(optional)">
            <label for="cars">Grade:</label>
            <select name="cars" id="cars" class="grades">
                <option value="A+">A+</option>
                <option value="A">A</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B">B</option>
                <option value="B-">B-</option>
                <option value="C+">C+</option>
                <option value="C">C</option>
                <option value="D">D</option>
                <option value="F">F</option>
            </select>
            <input id="credit" class="credit" type="text" placeholder="Credit">
            <br>
            <input class="course" type="text" placeholder="Course Name(optional)">
            <label for="cars">Grade:</label>
            <select name="cars" id="cars" class="grades">
                <option value="A+">A+</option>
                <option value="A">A</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B">B</option>
                <option value="B-">B-</option>
                <option value="C+">C+</option>
                <option value="C">C</option>
                <option value="D">D</option>
                <option value="F">F</option>
            </select>
            <input id="credit" class="credit" type="text" placeholder="Credit">
            <br>
            </div>
            <i id="add-row" class="fa-solid fa-circle-plus"></i>`;
            count = count + 1;
        items.appendChild(div);
})
document.getElementById('calculate-btn').addEventListener('click', function(){
    //taking vlaues
    let allGrades = [];
    const grades = document.getElementsByClassName('grades');
    for(const grade of grades){
     allGrades.push(grade.value);
    }
    // console.log(allGrades);

    let credits = [];
    let sum = 0;
    let multiply;
    let creditSum = 0;
    let gpa;
   const credit = document.getElementsByClassName('credit');
   for(let i = 0; i < credit.length; i++){
       credits[i] = credit[i].value;
        if(allGrades[i] == 'A+'){
           multiply = 4 * credits[i];
           sum = sum + multiply;
       }
       else if(allGrades[i] == 'A'){
           multiply = 3.75 * credits[i];
           sum = sum + multiply;
       }
       else if(allGrades[i] == 'A-'){
           multiply = 3.50 * credits[i];
           sum = sum + multiply;
       }
       else if(allGrades[i] == 'B+'){
           multiply = 3.25 * credits[i];
           sum = sum + multiply;
       }
       else if(allGrades[i] == 'B'){
           multiply = 3.00 * credits[i];
           sum = sum + multiply;
       }
       else if(allGrades[i] == 'B-'){
           multiply = 2.75 * credits[i];
           sum = sum + multiply;
       }
       else if(allGrades[i] == 'C+'){
           multiply = 2.50 * credits[i];
           sum = sum + multiply;
       }
       else if(allGrades[i] == 'C'){
           multiply = 2.25 * credits[i];
           sum = sum + multiply;
       }
       else if(allGrades[i] == 'D'){
           multiply = 2.00 * credits[i];
           sum = sum + multiply;
       }
       else if(allGrades[i] == 'F'){
           multiply = 0.00 * credits[i];
           sum = sum + multiply;
       }
       creditSum = creditSum + parseInt(credits[i]);
   }
   gpa = sum / creditSum;
//    console.log(sum);
//    console.log(creditSum);
   console.log('Your gpa is: ',gpa);
})