const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) =>{
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('bodyPageshow');
        } else{
            entry.target.classList.remove('bodyPageshow');
        }
    });
},{
    threshold: .5
});

const elements = document.querySelectorAll('.bodyPage');
elements.forEach((el) => observer.observe(el));