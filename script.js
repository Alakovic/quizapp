let questions = [
    {
        "question" : " Wer hat HTML erfunden?",
        "answer_1" : "Robbie Williams",
        "answer_2" : "Lady Gaga",
        "answer_3" : "Tim Berners-Lee",
        "answer_4" : "Justin Bieber",
        "right_answer" : "answer_3"
    },
    {
        "question" : "Was ist der Zweck von HTML?",
        "answer_1" : "Datenbanken zu verbinden",
        "answer_2" : "Die Struktur von Webseiten zu erstellen",
        "answer_3" : "Den Stil von Seiten zu gestalten",
        "answer_4" : "Die Geschwindigkeit von Webseiten zu optimieren",
        "right_answer" : "answer_2"
    },
    {
        "question" : " Welches HTML-Element wird zum Einfügen eines Bildes verwendet?",
        "answer_1" : "<img>",
        "answer_2" : "<image>",
        "answer_3" : "<src>",
        "answer_4" : "<picture>",
        "right_answer" : "answer_1"
    },
    {
        "question" : " Welches Attribut wird verwendet, um einem Element einen Link hinzuzufügen?",
        "answer_1" : "src",
        "answer_2" : "href",
        "answer_3" : "alt",
        "answer_4" : "link",
        "right_answer" : "answer_2"
    },
    {
        "question" : "Was bedeutet das <ul>-Element?",
        "answer_1" : "Eine nummerierte Liste",
        "answer_2" : "Eine ungeordnete Liste",
        "answer_3" : "Links auf der Seite",
        "answer_4" : "Einen Textabsatz",
        "right_answer" : "answer_2"
    },
    {
        "question" : "Was ist die richtige Syntax, um einen Kommentar in HTML einzufügen?",
        "answer_1" : "// Kommentar",
        "answer_2" : "<!-- Kommentar -->",
        "answer_3" : "/* Kommentar */",
        "answer_4" : "{ Kommentar }",
        "right_answer" : "answer_2"
    }
];

let currentQuestion = 0;

function init(){
    document.getElementById('all-questions').innerHTML=questions.length
    showQuestion();
}


function showQuestion(){


    if(currentQuestion >= questions.length){
       //TODO: Show End Screen
       document.getElementById('endScreen').style = 'display:flex';
       document.getElementById('questionBody').style = 'display:none';
    }else {

        let question=questions[currentQuestion];

        document.getElementById('question-number').innerHTML=currentQuestion + 1 ;
        document.getElementById('question').innerHTML=question.question;
        document.getElementById('answer_1').innerHTML=question.answer_1;
        document.getElementById('answer_2').innerHTML=question.answer_2;
        document.getElementById('answer_3').innerHTML=question.answer_3;
        document.getElementById('answer_4').innerHTML=question.answer_4;
    }
}


function answer(selection) {
    let question=questions[currentQuestion];
    let selectedAnswer=selection;
    let idOfRightAnswer=question.right_answer;

    if(selectedAnswer == question.right_answer) {
        document.getElementById(selection).parentNode.classList.add('bg-success');
    }else{
        document.getElementById(selection).parentNode.classList.add('bg-danger');    
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
    }
    
    document.getElementById('next-button').disabled= false;

}


function nextQuestion(){
    currentQuestion++; // nächste Frage ( 0 auf 1 )
    document.getElementById('next-button').disabled= true;
    resetAnswerButtons();
    showQuestion();

}

function resetAnswerButtons(){
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');
}