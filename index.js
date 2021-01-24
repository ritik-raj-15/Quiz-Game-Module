var qNumber=0;
document.body.onload=()=>{ show(qNumber); }

var questions=[{
 ques:"A complete graph can have",
 ops:[
     "N^2 Spanning Trees",
     "N^(N-2) Spanning Trees",
     "N^(N+1) Spanning Trees",
     "N^N Spanning Trees"
 ],
 correct:"N^(N-2) Spanning Trees"
},
{
 ques:"What is full form of CSS",
 ops:[
    "Color Style Sheets",
    "Cascade Sheets Style",
    "Cascade Style Sheet",
    "Cascading Style Sheets"
 ],
 correct:"Cascading Style Sheets"
},
{
 ques:"How to include JavaScript in HTML document",
 ops:[
    "From javascript:encoding",
    "External file specified by the src attribute of a “script” tag",
    "By using a header tag",
    "By using body tag"
 ],
 correct:"External file specified by the src attribute of a “script” tag"
},
{
 ques:"How to declare variable in JavaScript",
 ops:[
    "var",
    "obj",
    "jvar",
    "None of these"
 ],
 correct:"var"
},
{
 ques:"What => means in JavaScript",
 ops:[
    "Immediately Invoked Function",
    "Named Function",
    "Arrow Function",
    "Anonymous Function"
 ],
 correct:"Arrow Function"
},
{
 ques:"Which of these is not a JavaScript framework",
 ops:[
    "Rico",
    "Meteor",
    "jQuery",
    "Django"
 ],
 correct:"Django"
},
{
 ques:"How do you define objects in JS",
 ops:[
    "[]",
    "{}",
    "()",
    "{()}"
 ],
 correct:"{}"
},
{
 ques:"Which of these is not a valid JS version",
 ops:[
    "EX19",
    "ES1",
    "ES6",
    "ECMAScript 2018"
 ],
 correct:"EX19"
},
{
 ques:"Whats the output of '2' + 2",
 ops:[
    "22",
    "4",
    "both a and b",
    "None of these"
 ],
 correct:"22"
},
{
 ques:"How to check if a value is NaN in javaScript",
 ops:[
    "nonNaN()",
    "NaN()",
    "isNaN(val)",//
    "None of the above"
 ],
 correct:"isNaN(val)"
}
];
var score=0;
var quiz= document.getElementById('quiz');//parent class
var form = document.getElementById("form");//maintaning the alignment
var divCorrect=document.getElementById("correct");
var divIncorrect=document.getElementById("incorrect");
divCorrect.setAttribute("hidden","true");
divIncorrect.setAttribute("hidden","true");
var subButton=document.getElementById("button");
var nextButton=document.getElementById("button2");
nextButton.setAttribute("hidden","true");
document.getElementById("aKey").setAttribute("style","display:none");
var reButton=document.getElementById("button3");
reButton.setAttribute("style","display:none");

function show(value)
{
   if(value<10)
   {
  var title=document.getElementById("title");//question title
  title.innerHTML=questions[qNumber].ques;//inserting the content

    var output="";
    var choices=document.getElementById("choices");
    questions[value].ops.forEach((element)=>{
           output+=`<div class="radio"><label><input type="radio" name="answer" value="${element}"> ${element}</label></div>`; 
    });
   choices.innerHTML=output;
   console.log(value);
   }
   else{
      var demo=document.getElementById("score");
      demo.innerHTML="Score: "+score;
      document.getElementById("aKey").removeAttribute("style");
      var finalOutput="<ul>";
      questions.forEach((item)=>{
            finalOutput+=`<li> ${item.ques} - <span class="badge badge-success text-white" >${item.correct}</span></li>`
      });
      finalOutput+="</ul>"
      quiz.innerHTML=finalOutput;
      reButton.removeAttribute("style");
   }
}

function check()
{
   let checkAns=document.querySelector('input[name="answer"]:checked');
    if(checkAns!=null){

            if(checkAns.value===questions[qNumber].correct)
               {  
                  score++;
                  toggleSubmit();
                  toggleResult(true);
                  toggleNext();
                  console.log("right and score is"+score);
               }
            else 
            {
               toggleSubmit();
               toggleResult(false);
               toggleNext();
               console.log(checkAns.value+" wrong ans");
            }
    }
    else{
        alert("Please select an option");
    }

}
function toggleSubmit()
{
   subButton.setAttribute("hidden","true");
}

function toggleResult(val)
{
   if(val)
   {
      divCorrect.removeAttribute("hidden");
   }
   else
   {
      divIncorrect.removeAttribute("hidden");
   }
}

function toggleNext()
{
   nextButton.removeAttribute("hidden");
}

function nextQuiz()
{   
   qNumber=qNumber+1;
   show(qNumber);
   subButton.removeAttribute("hidden");
   nextButton.setAttribute("hidden","true");
   divCorrect.setAttribute("hidden","true");
   divIncorrect.setAttribute("hidden","true");
}

function restart()
{
   qNumber=0;
   location.reload();
}