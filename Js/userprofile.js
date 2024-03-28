let stepNum =document.getElementsByClassName('.stepNo');
let queTopic=document.querySelector('.step');
let queNum=document.querySelector('.que');
let question=document.querySelector('.subQus');
let inputArea=document.getElementsByClassName('.getInput');
const nextButton = document.querySelector('.nextBtn');
const skipButton=document.querySelector('.skipBtn')
const progressBar = document.querySelector('.progressBar');
const progressPer = document.getElementById('progressPer');



let topicArr=['Personal Details','Educational Qualifications','Contact Details'];
let currentTopicIndex=0;

const questionArr=['Full Name','Age','Gender','Agree with the privacy and terms','Area of study','Highest Degree','University','Completion Year','Min hours per week','Contact Number','Email','Address'];
let currentQusIndex=0;

let answerArr=[null,null,null,null,null,null,null,null];
 
function updateTopic() {
   queTopic.innerHTML=`Step<span class="stepNo"> ${currentTopicIndex+1}</span> -<span id="questionType">${topicArr[currentTopicIndex]}</span> `
   queNum.innerHTML=`Question<span class="queNum"> ${currentQusIndex %4+1}/4</span>`
}


function updateQus(){
    question.innerHTML=`<h4 class="subQus">${questionArr[currentQusIndex]}</h4>`
}

function handleNextButtonClick(){
    answerArr[currentQusIndex]=inputArea.value;
    let answeredQuestions=0;
    for(let i=0;i<answerArr.length;i++){
        if(answerArr[i]===null){
            
        }else{
            answeredQuestions++
        }
    }
    let totalQuestions = questionArr.length;

    let progress = Math.floor((answeredQuestions / totalQuestions) * 100);
    progressBar.style.width = `${progress}%`;
    progressPer.innerHTML = `${progress}%`;
    if (currentQusIndex === questionArr.length - 1 || currentTopicIndex === 3) {
        // Display completion message or perform final actions
        return;
    }
    
    if (currentQusIndex === questionArr.length - 1) {
        if(currentTopicIndex === 4){
            currentTopicIndex = (currentTopicIndex + 1) % topicArr.length; // Cycle through topics 
        }
        currentQusIndex = 0;
        updateQus();
        updateTopic();
    } else {
        currentQusIndex = (currentQusIndex + 1) % questionArr.length;
        if (currentQusIndex === 4 || currentQusIndex === 8) { // Change step to 2 after the 3rd index in questionArr
            currentTopicIndex = currentTopicIndex + 1; // Change to step 2
        }
        
        updateQus();
        updateTopic();    }
        
    
        updateQus();
        updateTopic();   
}
function handleSkipButtonClick() {
    if (currentQusIndex === questionArr.length - 1) {
        if (currentTopicIndex === 2) {
            currentTopicIndex = 0;
        } else {
            currentTopicIndex++;
        }
        currentQusIndex = 0;
    } else {
        currentQusIndex++;
    }

    updateQus();
    updateTopic();
}

skipButton.addEventListener('click', handleSkipButtonClick);

function printOutputdata(){

}
nextButton.addEventListener('click', handleNextButtonClick);

updateTopic();
