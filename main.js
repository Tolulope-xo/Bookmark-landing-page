const faqPage = document.querySelectorAll(".FAQ-container .faq-page");
faqPage.forEach((page, i) => {
    page.addEventListener("click", () => {
        page.nextElementSibling.classList.toggle("active");
    });
});

//tabbed content

const headings = document.querySelector('.headings');
const boxing = document.querySelectorAll('.boxing');
headings.addEventListener('click', function(e){
    // console.log(headings,boxing)
    if(e.target.tagName == "P"){
        const targetBoxing = e.target.dataset.target
        // console.log(boxing)
        // const targetBoxing = document.querySelector("."+e.target.dataset.target);
        boxing.forEach(function(boxing){
            if(boxing.classList[1] === targetBoxing){
            boxing.classList.add('active');
        } else {
            boxing.classList.remove('active');
        }
    })
    }
})
