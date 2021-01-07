//The Three Trials of the DOM: I

//#1: Select the section with an id of container without using querySelector.

	document.getElementById("container");

//#2: Select the section with an id of container using querySelector.

	document.querySelector("#container");

//#3: Select all of the list items with a class of "second".

	document.getElementsByClassName("second");

//#4: Select a list item with a class of third, but only the list item inside of the ol tag.

	document.querySelector("ol .third");

//#5: Give the section with an id of container the text "Hello!".

	let contHel = document.getElementById("container");
	contHel.innerText = "Hello";

//#6: Add the class main to the div with a class of footer.

	let addMain = document.getElementsByClassName("footer");
	addMain.classList.add("main");

//#7: Remove the class main on the div with a class of footer.

	let rmMain = document.getElementsByClassName("footer");
        rmMain.classList.remove("main");

//#8: Create a new li element.

	let createLi = document.createElement("li");

//#9: Give the li the text "four".

	createLi.innerText = "four";

//#10: Append the li to the ul element.

	let appLi = document.querySelector("ul");
	appLi.appendChild(createLi);

//#11: Loop over all of the lis inside the ol tag and give them a background color of "green". (Skipped #11 on document but I like counting correctly)

	let loopLi = document.querySelectorAll("ol li");
	for(let i = 0; i < loopLi.length; i++){
		loopLi[i].style.backgroundColor = "green";
	}

//#12: Remove the div with a class of footer.

	let rmDiv = document.getElementsByClassName("footer");
	rmDiv.remove();

//Trial I Complete

