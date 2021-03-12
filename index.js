// const firstChair = document.querySelector('.section--chair--one')

// const chairs = [
// 	{
// 		title: 'Chair 1',
// 		price: '400',
// 		image: 'img/chair-1.jpg'
// 	},
// 	{
// 		title: 'Chair 2',
// 		price: '500',
// 		image: 'img/chair-2.jpg'
// 	},
// 	{
// 		title: 'Chair 3',
// 		price: '600',
// 		image: 'img/chair-3.jpg'
// 	}
// ]

// chairs.map(function (chair) {
// 	firstChair.insertAdjacentHTML('afterend', `<div class="section--chair--one">
// 		<div class="mbb">
// 			<img class="w-100" src="${chair.image}">
// 			</div>
// 			<div class="section--chair--title mbb">${chair.title}</div>
// 			<div class="section--chair--price mbb">${chair.price}</div>
// 			<div class="mbb">
// 			<button class="btn btn--first">Купить</button>
// 		</div>
// 		</div>`)
// })

//DOM DATA
const btnNames = document.querySelector('.click')

//LOGIC VARIABLES
let currentIndex = 0
let currentLimit = 3
//DATA
const names = [
{
	title: 'Name 2',
},
{
	title: 'Name 3',
},
{
	title: 'Name 4',
},
{
	title: 'Name 5',
},
{
	title: 'Name 6',
},
{
	title: 'Name 7',
},
{
	title: 'Name 8',
},
{
	title: 'Name 9',
},
{
	title: 'Name 10',
},
]
//APP	
btnNames.onclick = function () {	
	const [...blockNames] = document.querySelectorAll('.name1')
	const lastElementNames = blockNames[blockNames.length - 1]

	names.slice(currentIndex, currentIndex + currentLimit).reverse().map(function(name) {
		lastElementNames.insertAdjacentHTML('afterend', `<div class="name1">${name.title}</div>	`)
	})
	currentIndex = currentIndex + currentLimit
	
}


// for (let i = 0; i < chairs.length; i++) {
// 	const chairsList = document.createElement('div')
// 	chairsList.innerHTML = `<div class="section--chair--one">


// 					<div class="mbb">
// 						<img class="w-100" src="${chairs[i].image}">
// 					</div>
// 					<div class="section--chair--title mbb">${chairs[i].title}</div>
// 					<div class="section--chair--price mbb">${chairs[i].price}</div>
// 					<div class="mbb">
// 						<button class="btn btn--first">Купить</button>
// 					</div>
// 				</div>
// 	`
// 	firstChair.insertAdjacentElement('afterend', chairsList)
// }

