const reviews = [
    {
        id: 1,
        author: "Tanya Sinclair",
        profession: "UX Engineer",
        review: "“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”",
        image: "/04-coding-bootcamp-testimonials-slider/images/image-tanya.jpg"
    },
    {
        id: 2,
        author: "John Tarkpor",
        profession: "Web Developer",
        review: "“ If you want to lay the best foundation possible I’d recommend taking this course.The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”",
        image: "/04-coding-bootcamp-testimonials-slider/images/image-john.jpg"
    }
];

const image = document.getElementById('author-image')
const author = document.getElementById('author-name')
const profession = document.getElementById('author-profession')
const review = document.getElementById('author-review')
const nextBtn = document.getElementById('next-btn')
const prevBtn = document.getElementById('prev-btn')

let currentItem = 0;

window.addEventListener('load', function() {
    showPerson();
});

function showPerson() {
    let person = reviews[currentItem];
    image.src = person.image;
    author.textContent = person.author;
    profession.textContent = person.profession;
    review.textContent = person.review;
}

nextBtn.addEventListener('click', () => {
    currentItem++;
    if (currentItem > review.length -1) {
        currentItem = 0;
    }
    showPerson();
})