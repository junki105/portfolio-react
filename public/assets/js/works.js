
function showWorksContent(id) {
    var content_id = "works_content_" + id.split("_")[2];
    var works_contents = document.getElementsByClassName("works_content");
    var works_tab_btns = document.getElementsByClassName("works_tab_btn");
    var i = 0;
    while (works_contents[i]) {
        works_contents[i].classList.remove("active");
        works_tab_btns[i].classList.remove("selected");
        i++;
    }
    document.getElementById(id).classList.add("selected");
    document.getElementById(content_id).classList.add("active");
}
