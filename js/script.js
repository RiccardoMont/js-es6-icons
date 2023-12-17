//Array iniziale
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

//Dichiarazioni globali
const container = document.querySelector('.container');
const select = document.createElement('select');
const h2 = document.createElement('h2');

//Posizionamento titolo al di sopra del Select
h2.classList.add('text-center', 'w-100', 'fw-bold');
h2.append('Filter your items');
container.append(h2);

//Array di appoggio per dinamicizzare le option del Select
const options = [];


//Richiamo funzione 'selection' per aggiungere l'option 'All'
selection('All');


//Funzione per creare le singole Card
function creaCard(name, prefix, colore, type) {

	const row = document.querySelector('.row');

    const boxMarkUp = `
    <div class='col-3 ${type}'>
        <div class ='card d-flex align-items-center mt-3 py-3 bg-primary-subtle'>
            <h4>${name}</h4>
            <i class="${prefix}solid ${prefix}2x ${prefix}${name}"
            style=" color: ${colore};">
            </i>
        </div>
    </div>
    `;
    row.insertAdjacentHTML('beforeend', boxMarkUp);

}

//Iterazione per creare le Cards e per capire quanti Type differenti ci sono senza creare doppioni
livingBeing.forEach((item) => {

    creaCard(item.name, item.prefix, item.color, item.type);

    if (options.includes(item.type)){

        return false;

    } else {

        options.push(item.type);

        selection(item.type);

    }

})

//Creazione del Select e delle options in maniera dinamica 
function selection(tipo){

    const option = document.createElement('option');

    option.append(`${tipo}`);

    select.append(option);

    select.classList.add("text-center", "w-25", "form-select", "bg-primary-subtle");

    container.append(select);

}

//addEventListener direttamente sulle options
select.addEventListener('change', function() {

	const col3 = document.querySelectorAll('.col-3');

	const filtrati = Array.from(col3).filter(elem => {

		if (elem.classList.contains(select.value)){

			elem.classList.remove('d-none');
			
		} else if (select.value === 'All'){

			elem.classList.remove('d-none');

		} else {

			elem.classList.add('d-none');

		}

		return elem;
	})

	console.log(filtrati);	

})

console.log(options);
