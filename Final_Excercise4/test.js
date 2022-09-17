var questions = document.getElementsByClassName("faqs");

for (var i=0;i<questions.length; i++) {
    questions[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var faq = this.nextElementSibling;
        if(faq.style.display === "block") {
            faq.style.display = "none";
        } else {
            faq.style.display = "block";
        }
    });
}