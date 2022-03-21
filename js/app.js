document.getElementById('add-row').addEventListener('click', function(){
    const items = document.getElementById('items');
    const div = document.createElement('div');
    div.innerHTML = ` <input class="course" type="text" placeholder="Course Name(optional)">
            <label for="cars">Grade:</label>
            <select name="cars" id="cars" class="grades1 grades">
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
            <input id="credit" class="credit credit1" type="text" placeholder="Credit">
            <br>`
            items.appendChild(div);
});

  let cgpa = 0;
  count = 2;
  let mapCount = 1;
document.getElementById('add-semester').addEventListener('click', function(){
    const items = document.getElementById('item');
    const section = document.createElement('section');
  
    section.innerHTML = `
            <div id="items">
            <h3 class="semester-title">SEMESTER - ${count}</h3>
            <input class="course" type="text" placeholder="Course Name(optional)">
            <label for="cars">Grade:</label>
            <select name="cars" id="cars" class="grades${count} grades">
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
            <input id="credit" class="credit${count} credit" type="text" placeholder="Credit">
            <br>
            <input class="course" type="text" placeholder="Course Name(optional)">
            <label for="cars">Grade:</label>
            <select name="cars" id="cars" class="grades${count} grades">
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
            <input id="credit" class="credit${count} credit" type="text" placeholder="Credit">
            <br>
            <input class="course" type="text" placeholder="Course Name(optional)">
            <label for="cars">Grade:</label>
            <select name="cars" id="cars" class="grades${count} grades">
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
            <input id="credit" class="credit${count} credit" type="text" placeholder="Credit">
            <br>
            <input class="course" type="text" placeholder="Course Name(optional)">
            <label for="cars">Grade:</label>
            <select name="cars" id="cars" class="grades${count} grades">
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
            <input id="credit${count}" class="credit${count} credit" type="text" placeholder="Credit">
            <br>
            <i id="add-row${count}" onclick="addRows(${count},id)" class="fa-solid fa-circle-plus"></i>
            </div>
            
            <button class="calculate-gpa" id="calculate-gpa${count}" onclick="calculateGPA(id)">Calculate Gpa</button>
            <p class="mygpa" id="gpa${mapCount+1}"></p>
            `
            ;
            
            mapCount =  count;
            count = count + 1;
        items.appendChild(section);
})

function addRows(count,id) {
    console.log(count);
    console.log(id);
    const parent = document.getElementById(id).parentNode;
    const div = document.createElement('div');
    div.innerHTML = `
    <input class="course" type="text" placeholder="Course Name(optional)">
            <label for="cars">Grade:</label>
            <select name="cars" id="cars" class="grades${mapCount} grades">
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
            <input id="credit" class="credit${mapCount} credit" type="text" placeholder="Credit">
            <br>`;
            parent.appendChild(div);
            console.log(count);
    
}
// document.getElementById('calculate-btn').addEventListener('click', function(){
//     //taking vlaues
//     let allGrades = [];
//     const grades = document.getElementsByClassName('grades');
//     for(const grade of grades){
//      allGrades.push(grade.value);
//     }
//     // console.log(allGrades);

//     let credits = [];
//     let sum = 0;
//     let multiply;
//     let creditSum = 0;
//     let gpa;
//    const credit = document.getElementsByClassName('credit');
//    for(let i = 0; i < credit.length; i++){
//        credits[i] = credit[i].value;
//        if(isNaN(credits[i]) || credits[i] == ''){
//            alert('Enter credits');
//            return;
//        }
//        if(credits[i] == 1 || credits[i] == 3){

//        }
//        else{
//            alert('Wrong credits given. Credits can be either 1 or either 3');
//            return;
//        }
//         if(allGrades[i] == 'A+'){
//            multiply = 4 * credits[i];
//            sum = sum + multiply;
//        }
//        else if(allGrades[i] == 'A'){
//            multiply = 3.75 * credits[i];
//            sum = sum + multiply;
//        }
//        else if(allGrades[i] == 'A-'){
//            multiply = 3.50 * credits[i];
//            sum = sum + multiply;
//        }
//        else if(allGrades[i] == 'B+'){
//            multiply = 3.25 * credits[i];
//            sum = sum + multiply;
//        }
//        else if(allGrades[i] == 'B'){
//            multiply = 3.00 * credits[i];
//            sum = sum + multiply;
//        }
//        else if(allGrades[i] == 'B-'){
//            multiply = 2.75 * credits[i];
//            sum = sum + multiply;
//        }
//        else if(allGrades[i] == 'C+'){
//            multiply = 2.50 * credits[i];
//            sum = sum + multiply;
//        }
//        else if(allGrades[i] == 'C'){
//            multiply = 2.25 * credits[i];
//            sum = sum + multiply;
//        }
//        else if(allGrades[i] == 'D'){
//            multiply = 2.00 * credits[i];
//            sum = sum + multiply;
//        }
//        else if(allGrades[i] == 'F'){
//            multiply = 0.00 * credits[i];
//            sum = sum + multiply;
//        }
//        creditSum = creditSum + parseInt(credits[i]);
//    }
//    gpa = sum / creditSum;
// //    console.log(sum);
// //    console.log(creditSum);
//    console.log('Your gpa is: ',gpa);
// })


//---------------------------
function calculateGPA(id){
    let allGrades = [];
    const gradeClass = `grades${mapCount}`;
    console.log('grade class = ',gradeClass);
    console.log(gradeClass);
    const grades = document.getElementsByClassName(gradeClass);
    if(allGrades.length != null){
        allGrades = [];
    }
    for(const grade of grades){
     allGrades.push(grade.value);
    }

    // console.log(allGrades);

    let credits = [];
    let sum = 0;
    let multiply;
    let creditSum = 0;
    let gpa;
    const value = `credit${mapCount}`;
   const credit = document.getElementsByClassName(value);
   console.log(value);
   for(let i = 0; i < credit.length; i++){
       credits[i] = credit[i].value;
       if(isNaN(credits[i]) || credits[i] == ''){
           alert('Enter credits');
           return;
       }
    //    if(credits[i] == 1 || credits[i] == 3){

    //    }
    //    else{
    //        alert('Wrong credits given. Credits can be either 1 or either 3');
    //        return;
    //    }
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
   cgpa = cgpa + gpa;
//    console.log('Your gpa is: ',gpa);
   const pid = `gpa${mapCount}`;
//    console.log(pid);
   document.getElementById(pid).innerText = `Your gpa of semester - ${mapCount} is = ${gpa}`;
//    console.log('cgpa is = ',cgpa);
}

document.getElementById('calculate-btn').addEventListener('click',()=>{
    const myCgpa = cgpa/mapCount;
    document.getElementById('cgpa').style.display = 'block';
    document.getElementById('cgpa').innerText = `GGPA = ${myCgpa}`;
    console.log(myCgpa);
})