//navigation

let burger = document.querySelector(".icon1");
let menu = document.querySelector(".menu");
burger.addEventListener("click", function(){
    menu.classList.toggle("active")
})


// i want svg3 to show and svg1 to be hidden
// i want to change the icon to X
// background of nav should change to hsl(229, 31%, 21%)


//faqs
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

