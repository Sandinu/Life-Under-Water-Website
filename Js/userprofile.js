let stepNum =document.getElementsByClassName('.stepNo');
let queTopic=document.querySelector('.step');
let queNum=document.querySelector('.que');
let question=document.querySelector('.subQus');
let inputArea=document.getElementsByClassName('.getInput');
const nextButton = document.querySelector('.nextBtn');


let topicArr=['Personal Details','Educational Qualifications','Contact Details'];
let currentTopicIndex=0;

const questionArr=['Full Name','Age','Gender','Agree with the privacy and terms','  '];
let currentQusIndex=0;

let answerArr=[null,null,null,null];
 
function updateTopic() {
   queTopic.innerHTML=`Step<span class="stepNo"> ${currentTopicIndex+1}</span> -<span id="questionType">${topicArr[currentTopicIndex]}</span> `
   queNum.innerHTML=`Question<span class="queNum"> ${currentQusIndex +1}/4</span>`
}
function updateQus(){
    question.innerHTML=`<h4 class="subQus">${questionArr[currentQusIndex]}</h4>`
}
function handleNextButtonClick() {
    answerArr[currentQusIndex]=inputArea.value;
    
    if(currentQusIndex===questionArr.length-1){
        currentTopicIndex = (currentTopicIndex + 1) % topicArr.length; // Cycle through topics
        currentQusIndex=0;
        updateQus();
        updateTopic();
    }
    else{
        currentQusIndex = (currentQusIndex + 1) % questionArr.length;
        updateQus();
        updateTopic();
    }
    

    

    
}
nextButton.addEventListener('click', handleNextButtonClick);

updateTopic();
