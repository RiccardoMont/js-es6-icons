console.log('mamma mia');

const livingBeing = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];

const container = document.querySelector('.container')
const row = document.querySelector('.row');
const select = document.createElement('select');
const filtra = document.createElement('button');

filtra.classList.add('btn', 'btn-primary', 'p-2', 'm-2');

filtra.append(`Filtra`);

container.append(filtra);

const options = [];


function creaBox(name, prefix, colore) {

    const boxMarkUp = `
    <div class = 'box'>
        <h4>${name}</h4>
        <i class="${prefix}solid ${prefix}${name}"
        style=" color: ${colore};">
        </i>
    </div>
    `;
    row.insertAdjacentHTML('beforeend', boxMarkUp);

}

livingBeing.forEach((item) => {

    creaBox(item.name, item.prefix, item.color);

    if (options.includes(item.type)){

        return false;

    } else {

        options.push(item.type);

        selection(item.type);

    }

})


function selection(tipo){

    const option = document.createElement('option');

    option.append(`${tipo}`);

    select.append(option);

    container.append(select);

}

filtra.addEventListener('click', function() {
  
    
    
})

