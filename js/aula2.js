console.log('\nCurrying');

function soma(a){
	return function(b){
		return a + b;
	}
}

const soma2 = soma(2);

console.log(soma2(2));
console.log(soma2(3));
console.log(soma2(4));
console.log(soma2(5));

console.log('\nHoisting ');
function fn(){
	function log(value){
			console.log(value);
	}
	log('Hoisting de funcao');
}

fn();

console.log('\nImutabilidade ');
const user={
	name:'Matheus',
	lastName: 'Voltane Mendonca'
};

function getUserWithFullName(user){
	return{
		...user,
		fullName: '${user.name} ${user.lastName}'
	}
}

const userWithFullName = getUserWithFullName(user);

console.log(userWithFullName);

console.log('\nImutabilidade 2');

const students =[
{
	name: 'Grace',
	grade: 6
},
{
	name: 'Jennifer',
	grade: 4
},
{
	name: 'Matheus',
	grade: 10
}
];

function getApprovedStudents(studentsList){
	return studentsList.filter(students => students.grade >= 7);
}

console.log('Alunos aprovados:');
console.log(getApprovedStudents(students));

console.log('\nLista de Alunos:');
console.log(students);