function E_id(id) {
    return document.getElementById(id);
}

function SetQuiz(id){
    console.log(quizDate[id]);
    const title = document.getElementById("title");
    const select = document.getElementById("select");

    title.innerHTML  = "<span style='color:red'><b>Q.</b></span>"+quizDate[id].question;

    for (let i=0;i<quizDate[id].options.length;i++){
        let select_btn = document.createElement("input");
        let select_label = document.createElement("label");

        select_label.htmlFor = i;

        description = document.createTextNode(quizDate[id].options[i]);
        select_label.appendChild(description);

        select_btn.id = i;
        select_btn.type = "radio";
        select_btn.name = "answer";
        select_btn.value = i;

        select.appendChild(select_btn)
        select.appendChild(select_label)
        select.appendChild(document.createElement("br"));
    }
}

function ResultQuiz(id){

}