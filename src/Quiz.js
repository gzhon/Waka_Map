function E_id(id) {
    return document.getElementById(id);
}

function SetQuiz(){

    let params = new URLSearchParams(window.location.search);
    let quiz_id = Number(params.get("id"));

    const title = document.getElementById("title");
    const select = document.getElementById("select");

    if(params.has("id") == false|| quizDate[quiz_id] == undefined){
        title.innerHTML  = "<span style='color:red'>データが存在していません</span>";

        let sublimt_btn = document.getElementById("sublimt");
        sublimt_btn.textContent = "マップへ戻る";
        sublimt_btn.addEventListener("click",()=>{
            window.location.href = "https://gzhon.github.io/Waka_Map/"
        });
    }
    else {

        title.innerHTML  = "<span style='color:red'><b>Q.</b></span>"+quizDate[quiz_id].question;

        for (let i=0;i<quizDate[quiz_id].options.length;i++){
            let select_btn = document.createElement("input");
            let select_label = document.createElement("label");

            select_label.htmlFor = i;

            description = document.createTextNode(quizDate[quiz_id].options[i]);
            select_label.appendChild(description);

            select_btn.id = i;
            select_btn.type = "radio";
            select_btn.name = "answer";
            select_btn.value = i;

            select.appendChild(select_btn)
            select.appendChild(select_label)
            select.appendChild(document.createElement("br"));
        }
        let sublimt_btn = document.getElementById("sublimt");

        sublimt_btn.addEventListener("click",()=>{
            ResultQuiz(quiz_id);
        });
    }
}

function ResultQuiz(quiz_id){

    let radio_btn = document.getElementsByName("answer");

    for (let i=0;i<radio_btn.length;i++){
        if(radio_btn[i].checked){
            if(radio_btn[i].value == quizDate[quiz_id].answer){
                Correct(quiz_id);
            }
            else NotCorrect(quiz_id);
        }
    }
}
function Correct(quiz_id) {

    const title = document.getElementById("title");
    title.innerHTML  = "<span class='Result-titleAC'><b>正解!</b></span>";
    ResultInfo(quiz_id);
}
function NotCorrect(quiz_id) {

    const title = document.getElementById("title");
    title.innerHTML  = "<span class='Result-titleNotAC'><b>残念...</b></span>";
    ResultInfo(quiz_id);
}
function ResultInfo (quiz_id){

    const select = document.getElementById("select");
    select.innerHTML = "正解は「"+quizDate[quiz_id].options[quizDate[quiz_id].answer]+"」"+quizDate[quiz_id].infos;

    let sublimt_btn = document.getElementById("sublimt");

    sublimt_btn.textContent = "マップへ戻る";
    sublimt_btn.addEventListener("click",()=>{
        window.location.href = "https://gzhon.github.io/Waka_Map/"
    });
}