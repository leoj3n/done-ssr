
module.exports = function(){
	var main = document.createElement("main");
	var ul = document.createElement("ul");
	main.appendChild(ul);

	fetch("/api/todos").then(res => res.json()).then(todos => {
		todos.forEach(todo => {
			var li = document.createElement("li");
			li.textContent = todo;
			ul.appendChild(li);
		});
	})
	.then(null, err => console.log(err))

	document.body.appendChild(main);
};
