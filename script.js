let closeBtn = document.querySelector('.close-btn');
let openBtn = document.querySelector('.open-btn');
let sidebar = document.querySelector('.side-bar');

closeBtn.addEventListener('click', closeSidebar);
openBtn.addEventListener('click', openSidebar);

let main = document.querySelector('.main');
function closeSidebar() {
  sidebar.style.display = 'none';
  openBtn.style.display = 'block';
}
function openSidebar() {
  sidebar.style.display = 'block';
  openBtn.style.display = 'none';
}

let Coursename = ["undergoing ug programme", "senior secondary", "secondary"];
let Instituition_name=  ["puducherry technologocal university", "achariya siksha mandir", "bonne nehru higher secondary school"];
let Degree_program =[ "btech cse", "12th", "10th"];
let Field_of_study = ["computer science engineering", "math+biology", "science"];
let Dates =  ["2021-2025", "2021", "2019"];
let Gpa_or_achievements = ["9.21", "95.21%", "94.5"];

let Course_name = document.querySelector("#Course_name p");
let Ins_name = document.querySelector("#Instituition_name p");
let degree = document.querySelector("#Degree_program p");
let field = document.querySelector("#Field_of_study p");
let date = document.querySelector("#Dates p");
let gpa = document.querySelector("#Gpa_or_achievements p");

let next = document.querySelector(".next button");
let prev = document.querySelector(".prev button");
let i = 0;
next.addEventListener('click', nextSlide);
prev.addEventListener('click', previousSlide);
function nextSlide() {
  console.log(i);
  Course_name.textContent=Coursename[i];
  Ins_name.textContent=Instituition_name[i];
  degree.textContent=Degree_program[i];
  field.textContent = Field_of_study[i];
  date.textContent=Dates[i];
  gpa.textContent = Gpa_or_achievements[i];
  i = (i + 1) % 3;
};
function previousSlide() {
  console.log(i);
  Course_name.textContent=Coursename[i];
  Ins_name.textContent=Instituition_name[i];
  degree.textContent=Degree_program[i];
  field.textContent = Field_of_study[i];
  date.textContent=Dates[i];
  gpa.textContent = Gpa_or_achievements[i];
  if (i != 0) {
    i--;
  }
  else {
    i = 2;
  }
};

nextSlide(0);