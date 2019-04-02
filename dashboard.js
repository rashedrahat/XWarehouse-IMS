function onFormSubmit() {
	var formData = readFormData();
	insertNewRecord(formData);
}

function readFormData() {
	var formData = {};
	formData["pName"] = document.getElementById('pName').value;
	formData["Quantity"] = document.getElementById('Quantity').value;
	formData["price"] = document.getElementById('price').value;
	formData["Status"] = document.getElementById('Status').value;
	return formData;
}

function insertNewRecord(data) {
	var table = document.getElementById('ProductList').getElementsByTagName('tbody')[0];
	var newRow = table.insertRow(table.length);
	cell1 = newRow.insertCell(0);
	cell1.innerHTML = data.pName;
	cell2 = newRow.insertCell(1);
	cell2.innerHTML = data.Quantity;
	cell3 = newRow.insertCell(2);
	cell3.innerHTML = data.price;
	cell4 = newRow.insertCell(3);
	cell4.innerHTML = data.Status;
	cell4 = newRow.insertCell(4);
	cell4.innerHTML = `<a class="btn btn-sm btn-outline-success" role="button">Edit</a>
					   <a class="btn btn-sm btn-outline-danger" role="button">Remove</a>`;

}