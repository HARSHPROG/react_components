
function add(x, y) {
	return x + y
}

console.log(add(1,3));

// currying

function curryadd1(x) {
	return function curryadd2(y) {
		return x + y
	}
}

const add5 = curryadd1(5)
console.log(add5(2));