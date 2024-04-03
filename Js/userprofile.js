let stepNum =document.getElementsByClassName('.stepNo');
let queTopic=document.querySelector('.step');
let queNum=document.querySelector('.que');
let question=document.querySelector('.subQus');
let inputArea=document.querySelector('.inputtext');
const nextButton = document.querySelector('.nextBtn');
const skipButton=document.querySelector('.skipBtn')
const progressBar = document.querySelector('.progressBar');
const progressPer = document.getElementById('progressPer');



let topicArr=['Personal Details','Educational Qualifications','Contact Details'];
let currentTopicIndex=0;

const questionArr=['Full Name','Age','Gender','Agree with the privacy and terms','Area of study','Highest Degree','University','Completion Year','Min hours per week','Contact Number','Email','Address'];
let currentQusIndex=0;

let answerArr=[null,null,null,null,null,null,null,null,null,null,null,null];
 
function updateTopic() {
   queTopic.innerHTML=`Step<span class="stepNo"> ${currentTopicIndex+1}</span> -<span id="questionType">${topicArr[currentTopicIndex]}</span> `
   queNum.innerHTML=`Question<span class="queNum"> ${currentQusIndex %4+1}/4</span>`
}


function updateQus(){
    question.innerHTML=`<h4 class="subQus">${questionArr[currentQusIndex]}</h4>`
}

function saveAnswer(){
    let answer = inputArea.value;
    console.log(answer);
    answerArr[currentQusIndex]=answer;
    
}
function updateProgressBar() {
    const answeredQuestions = answerArr.filter(answer => answer !== null).length;
    const progress = (answeredQuestions / questionArr.length) * 100;
    progressBar.style.width = `${progress}%`;
    progressPer.textContent = `${progress.toFixed(1)}%`;
}
function validationEmail(Email) {
    const reg = /\S+@\S+\.\S+/;
    return reg.test(Email);
}
function validationContact(contactNumber) {
        const access = /^\+?(\d[\d\-\s\(\)]{8,20}\d|\(\d{2,}\)[\d\-\s]{6,20}\d)$/;
        return access.test(contactNumber);
}



function handleNextButtonClick(contactNumber){
    if (!inputArea.value.trim()) {
        alert('Please enter answer before next');
        inputArea.value = '';
        return;
    }
    if(currentQusIndex===10 && !validationEmail(inputArea.value.trim())){
        alert("Invalid emailEnter email again");
        return;
    }
    
     saveAnswer();
    printOutputdata(questionArr[currentQusIndex],answerArr[currentQusIndex]);
    updateProgressBar();
    inputArea.value = '';
   

    if (currentQusIndex === questionArr.length - 1) {
        if (currentTopicIndex === topicArr.length - 1) {
            nextButton.style.display = 'none';
            skipButton.style.display = 'none';
            return;

        } else {
            currentTopicIndex++;
        }
        currentQusIndex = 0;
    } else {
        currentQusIndex++;
        if (currentQusIndex === 4 || currentQusIndex === 8 ) { // Change topic after the 4rd and 8th question
            currentTopicIndex++;
        }
        
    }
    
    updateQus();
    updateTopic();

    
}  
function printOutputdata(question, answer){
    let output = `<p><strong>${question}:</strong> ${answer}</p>`;
    document.querySelector('.outputBox').innerHTML += output;
}
function handleSkipButtonClick() {
    
    if (currentQusIndex === questionArr.length - 1) {
        if (currentTopicIndex === topicArr.length - 1) {
            //currentTopicIndex = 0; // Start from the first step
            skipButton.style.display='none';
            nextButton.style.display='none';
            return;
        } else {
            currentTopicIndex++;
        }
        //currentQusIndex = 0; // Start from the first question of the next step
    } else {
        currentQusIndex++; // Move to the next question
        if (currentQusIndex === 4) { // After first 4 questions, update topic and step
            currentTopicIndex++;
            currentQusIndex=4;
        }
        else if (currentQusIndex === 8) { // Change question after the 3rd and 7th index in questionArr
            currentTopicIndex++;
            currentQusIndex=8;
        }
        
    }
    updateQus();
    updateTopic();
}
function tabx(tabIndex) {
    switch(tabIndex) {
        case 0:
            currentTopicIndex = 0;
            currentQusIndex = 0;
            break;
        case 1:
            currentTopicIndex = 1;
            currentQusIndex = 4;
            break;
        case 2:
            currentTopicIndex = 2;
            currentQusIndex = 8;
            break;
        default:
            break;
    }
    updateQus();
    updateTopic();
}
document.querySelectorAll('.tab').forEach((tab, index) => {
    tab.addEventListener('click', () => {
        tabx(index);
    });
});

skipButton.addEventListener('click', handleSkipButtonClick);


nextButton.addEventListener('click', handleNextButtonClick);

updateTopic();
