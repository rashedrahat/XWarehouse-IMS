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
	return formData;
}

function insertNewRecord(data) {
	document.getElementById('this').style.display = "block";
	var table = document.getElementById('ProductList').getElementsByTagName('tbody')[0];
	var newRow = table.insertRow(table.length);
	cell1 = newRow.insertCell(0);
	cell1.innerHTML = data.pName;
	cell2 = newRow.insertCell(1);
	cell2.innerHTML = data.Quantity;
	cell3 = newRow.insertCell(2);
	cell3.innerHTML = data.price;
	cell4 = newRow.insertCell(3);
	cell4.innerHTML = data.Quantity * data.price;
	cell4 = newRow.insertCell(4);
	cell4.innerHTML = `<a class="btn btn-sm btn-outline-success" role="button" onclick="onEdit(this)" data-toggle="modal" data-target="#myModal">Edit</a>
					   <a class="btn btn-sm btn-outline-danger" role="button" onclick="onDelete(this)">Remove</a>`;

	var table = document.getElementById('here');
	document.getElementById('numOfP').innerHTML = table.rows.length;
    calcu();

    function calcu() {
        var totalCost = 0;
        var discount;
        var finalTotalCost;

        for (var i = 0; i < table.rows.length; i++) {
            totalCost = totalCost + parseInt(table.rows[i].cells[3].innerHTML);
        }
        document.getElementById('val').innerHTML = totalCost;
        
        discount = totalCost * .02;
        finalTotalCost = totalCost - discount;

        document.getElementById('val2').innerHTML = discount;
        document.getElementById('val3').innerHTML = finalTotalCost;
      }
}

function resetForm() {
	document.getElementById("pName").value = "";
	document.getElementById("Quantity").value = "";
	document.getElementById("price").value = "";
	row = null;
}

function onEdit(td) {
	row = td.parentElement.parentElement;
	document.getElementById("pName").value = row.cells[0].innerHTML;
	document.getElementById("Quantity").value = row.cells[1].innerHTML;
	document.getElementById("price").value = row.cells[2].innerHTML;
}

function updateRecord(formData) {
	row.cells[0].innerHTML = formData.pName;
	row.cells[1].innerHTML = formData.Quantity;
	row.cells[2].innerHTML = formData.price;
	row.cells[3].innerHTML = formData.Quantity * formData.price;

	var table = document.getElementById('here');
    calcu();

    function calcu() {
        var totalCost = 0;
        var discount;
        var finalTotalCost;

        for (var i = 0; i < table.rows.length; i++) {
            totalCost = totalCost + parseInt(table.rows[i].cells[3].innerHTML);
        }
        document.getElementById('val').innerHTML = totalCost;
        
        discount = totalCost * .02;
        finalTotalCost = totalCost - discount;

        document.getElementById('val2').innerHTML = discount;
        document.getElementById('val3').innerHTML = finalTotalCost;
      }
}

function onDelete(td) {
	if (confirm("Are you sure to delete?")) {
		row = td.parentElement.parentElement;
	    document.getElementById("ProductList").deleteRow(row.rowIndex);
	    resetForm();
	    var table = document.getElementById('here');
	    document.getElementById('numOfP').innerHTML = table.rows.length;

	    if (table.rows.length == 0) {
	    	document.getElementById('this').style.display = "none";
	    }
	    if (table.rows.length > 0) {
	    	calcu();

		    function calcu() {
		        var totalCost = 0;
		        var discount;
		        var finalTotalCost;

		        for (var i = 0; i < table.rows.length; i++) {
		            totalCost = totalCost + parseInt(table.rows[i].cells[3].innerHTML);
		        }
		        document.getElementById('val').innerHTML = totalCost;
		        
		        discount = totalCost * .02;
		        finalTotalCost = totalCost - discount;

		        document.getElementById('val2').innerHTML = discount;
		        document.getElementById('val3').innerHTML = finalTotalCost;
		      }
	    }
	}
}