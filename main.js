
	nameOfTheStudentArray = [];
	
	function submit()
	{
        
        var name_1 = document.getElementById("nameOfTheStudent1").value;
        var name_2 = document.getElementById("nameOfTheStudent2").value;
        var name_3 = document.getElementById("nameOfTheStudent3").value;
        var name_4 = document.getElementById("nameOfTheStudent4").value;

        nameOfTheStudentArray.push(name_1);
        nameOfTheStudentArray.push(name_2);
        nameOfTheStudentArray.push(name_3);
        nameOfTheStudentArray.push(name_4);

		console.log(nameOfTheStudentArray);
		
        document.getElementById("displayName").innerHTML = nameOfTheStudentArray;

	}

