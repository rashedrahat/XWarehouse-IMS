var row = null;

function onFormSubmit() {
	var formData = readFormData();
	if (row == null)
		insertNewRecord(formData);
		else
			updateRecord(formData);
	resetForm();
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
	cell4.innerHTML = `<a class="btn btn-sm btn-outline-success" role="button" onclick="onEdit(this)" data-toggle="modal" data-target="#myModal">Edit</a>
					   <a class="btn btn-sm btn-outline-danger" role="button" onclick="onDelete(this)">Remove</a>`;
}

function resetForm() {
	document.getElementById("pName").value = "";
	document.getElementById("Quantity").value = "";
	document.getElementById("price").value = "";
	document.getElementById("Status").value = "Choose...";
	row = null;
}

function onEdit(td) {
	row = td.parentElement.parentElement;
	document.getElementById("pName").value = row.cells[0].innerHTML;
	document.getElementById("Quantity").value = row.cells[1].innerHTML;
	document.getElementById("price").value = row.cells[2].innerHTML;
	document.getElementById("Status").value = row.cells[3].innerHTML;
}

function updateRecord(formData) {
	row.cells[0].innerHTML = formData.pName;
	row.cells[1].innerHTML = formData.Quantity;
	row.cells[2].innerHTML = formData.price
	row.cells[3].innerHTML = formData.Status;
}

function onDelete(td) {
	if (confirm("Are you sure to delete?")) {
		row = td.parentElement.parentElement;
	    document.getElementById("ProductList").deleteRow(row.rowIndex);
	    resetForm();
	}
}
