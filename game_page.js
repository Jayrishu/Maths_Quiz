player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");
player1_score = 0;
player2_score = 0;
document.getElementById("player1_name").innerHTML = player1_name+" : ";
document.getElementById("player2_name").innerHTML = player2_name+" : ";
document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;
document.getElementById("question_turn").innerHTML = "Question Turn : "+player1_name;
document.getElementById("answer_turn").innerHTML = "Answer Turn : "+player2_name;
function send(){
    no1 = document.getElementById("no1").value;
    console.log(no1);
    no2 = document.getElementById("no2").value;
    console.log(no2);
    answer = parseInt(no1) * parseInt(no2);
    console.log(answer);
    question = "<h4>"+ no1 + " X "+ no2 +"</h4><br>";
    input = "Answer : <input type='text' id='input' placeholder='Type your answer here'><br>";
    button = "<br><button class='btn btn-info' onclick='check()'>Check</button>"
    together = question+input+button;
    document.getElementById("output").innerHTML = together;
    document.getElementById("no1").value ="";
    document.getElementById("no2").value ="";
}