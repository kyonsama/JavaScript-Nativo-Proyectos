import './style.css'

// local reviews data
const reviews = [
  {
    id: 1,
    name: 'susan smith',
    job: 'web developer',
    img: 'https://www.course-api.com/images/people/person-1.jpeg',
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: 'anna johnson',
    job: 'web designer',
    img: 'https://www.course-api.com/images/people/person-2.jpeg',
    text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
  },
  {
    id: 3,
    name: 'peter jones',
    job: 'intern',
    img: 'https://www.course-api.com/images/people/person-4.jpeg',
    text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
  },
  {
    id: 4,
    name: 'bill anderson',
    job: 'the boss',
    img: 'https://www.course-api.com/images/people/person-3.jpeg',
    text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
  },
];

const img = document.getElementById('person-img')
const name = document.getElementById('person-name')
const job = document.getElementById('person-job')
const text = document.getElementById('person-text')

const prevBtn = document.getElementById('prev-review-left')
const nextBtn = document.getElementById('prev-review-right')
const randomBtn = document.querySelector('.btn-surprise')

let currentReview = 0

class CardReview {
  constructor(review){
    this.review = review[currentReview]
  }
  showPerson = () => {
    img.src = this.review.img
    name.textContent = this.review.name
    job.textContent = this.review.job
    text.textContent = this.review.text
  }
}

window.addEventListener('DOMContentLoaded', () => {
  const person = new CardReview(reviews)
  person.showPerson()
})

prevBtn.addEventListener('click', () => {
  currentReview--
  if(currentReview < 0){
    currentReview = reviews.length
  } 
  const person = new CardReview(reviews)
  person.showPerson() 
})
nextBtn.addEventListener('click', () => {
  currentReview++
  if(currentReview > reviews.length - 1){
    currentReview = 0
  }
  const person = new CardReview(reviews)
  person.showPerson()
})

