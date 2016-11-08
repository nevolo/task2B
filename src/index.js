import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.get('/', (req, res) => {
  res.json({
    hello: 'JS World',
  });
});

app.get('/task2B', (req, res) => {
  
  var Name;
  var SecondName;
  var lastName;
  var result;
  var reg = /[0-9_/]/g;
  
  const fullname = req.query.fullname;
  var ArrayFName = fullname.split(" ");

  for (var i = 0; i < ArrayFName.length; i++) {
	ArrayFName[i] = ArrayFName[i].toLowerCase();
	if (ArrayFName[i] == "") {  
		ArrayFName.splice(i, 1); 
		i--;
	}     
  }

	if (fullname == "") {				//если пришла пустая строка
		result = "Invalid fullname";	
	} else if (reg.exec(fullname) != null) {  //если строка содержит цифры
		result = "Invalid fullname";
	}
	 else if (ArrayFName.length == 3) {
	  lastName = ArrayFName[2] + " ";
	  Name = ArrayFName[0].substr(0, 1).toUpperCase() + ". ";
	  SecondName = ArrayFName[1].substr(0, 1).toUpperCase() + ".";
	  result = lastName.replace(lastName[0], lastName[0].toUpperCase()) + Name + SecondName;
	} else if (ArrayFName.length == 2) {
		lastName = ArrayFName[1] + " ";
		Name = ArrayFName[0].substr(0, 1).toUpperCase() + ".";
		result = lastName.replace(lastName[0], lastName[0].toUpperCase()) + Name;
	} else if (ArrayFName.length == 1){
		lastName = ArrayFName[0];
		result = lastName.replace(lastName[0], lastName[0].toUpperCase())
	} else result = "Invalid fullname";
 
  console.log(ArrayFName, result)
  res.send(result);
});

app.listen(3000, () => {
  console.log('Your app listening on port 3000!');
});
