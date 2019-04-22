var row = null;

function totalPrice() {
  var unit = document.getElementById("quantity").value;
  var pup = document.getElementById("price").value;
  var res = unit * pup;

  if (!isNaN(res)) {
    document.getElementById("totalPrice").innerHTML = res;
  }
}

function netPrice() {
  var totalPrice = document.getElementById("totalPrice").innerHTML;
  var percentage = document.getElementById("percentage").value;
  var netTotal = totalPrice - (totalPrice * percentage) / 100;
  if (!isNaN(netTotal)) {
    document.getElementById("netPrice").innerHTML = netTotal;
  }
}

function onFormSubmit() {
  var formData = readFormData();
  if (row == null) insertNewRecord(formData);
  resetForm();
}

function readFormData() {
  var formData = {};
  formData["productName"] = document.getElementById("productName").value;
  formData["quantity"] = document.getElementById("quantity").value;
  formData["price"] = document.getElementById("price").value;
  formData["totalPrice"] = document.getElementById("totalPrice").innerHTML;
  formData["percentage"] = document.getElementById("percentage").value;
  formData["netPrice"] = document.getElementById("netPrice").innerHTML;
  formData["name"] = document.getElementById("name").value;
  formData["address"] = document.getElementById("address").value;
  return formData;
}

function insertNewRecord(data) {
  document.getElementById("this").style.display = "block";
  var table = document
    .getElementById("invoiceList")
    .getElementsByTagName("tbody")[0];
  var newRow = table.insertRow(table.length);
  cell1 = newRow.insertCell(0);
  cell1.innerHTML = table.rows.length;
  cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.productName;
  cell3 = newRow.insertCell(2);
  cell3.innerHTML = data.quantity;
  cell4 = newRow.insertCell(3);
  cell4.innerHTML = data.price;
  cell5 = newRow.insertCell(4);
  cell5.innerHTML = document.getElementById("totalPrice").innerHTML;
  cell5.innerHTML = data.quantity * data.price;
  cell6 = newRow.insertCell(5);
  cell6.innerHTML = data.percentage;
  cell7 = newRow.insertCell(6);
  cell7.innerHTML = document.getElementById("netPrice").innerHTML;
  cell7 = newRow.insertCell(7);
  cell7.innerHTML = `<a class="btn btn-sm btn-outline-danger" role="button" onclick="onDelete(this)">Remove</a>`;

  var table = document.getElementById("here");
  document.getElementById("cus_name").innerHTML = data.name;
  document.getElementById("cus_add").innerHTML = data.address;

  calcu();

  function calcu() {
    var totalAmount = 0;

    for (var i = 0; i < table.rows.length; i++) {
      totalAmount = totalAmount + parseInt(table.rows[i].cells[6].innerHTML);
    }

    document.getElementById("totalAmount").value = totalAmount;

    //discount = totalCost * 0.02;
    //finalTotalCost = totalCost - discount;

    //document.getElementById("val2").innerHTML = discount;
    //document.getElementById("val3").innerHTML = finalTotalCost;
  }
}

function resetForm() {
  document.getElementById("productName").value = "Choose Product...";
  document.getElementById("available").value = "";
  document.getElementById("quantity").value = "";
  document.getElementById("price").value = "";
  document.getElementById("totalPrice").innerHTML = "_";
  document.getElementById("percentage").value = "";
  document.getElementById("netPrice").innerHTML = "_";
  document.getElementById("name").value = document.getElementById("name").value;
  document.getElementById("address").value = document.getElementById(
    "address"
  ).value;
  row = null;
}

function onDelete(td) {
  if (confirm("Are you sure to delete?")) {
    row = td.parentElement.parentElement;
    document.getElementById("invoiceList").deleteRow(row.rowIndex);
    resetForm();
    var table = document.getElementById("here");
    //document.getElementById("numOfP").innerHTML = table.rows.length;

    if (table.rows.length == 0) {
      document.getElementById("this").style.display = "none";
    }
    if (table.rows.length > 0) {
      calcu();
      function calcu() {
        var totalAmount = 0;
        //var discount;
        //var finalTotalCost;

        for (var i = 0; i < table.rows.length; i++) {
          totalAmount =
            totalAmount + parseFloat(table.rows[i].cells[6].innerHTML);
        }
        document.getElementById("totalAmount").value = totalAmount;

        //discount = totalCost * 0.02;
        //finalTotalCost = totalCost - discount;

        //document.getElementById("val2").innerHTML = discount;
        //document.getElementById("val3").innerHTML = finalTotalCost;
      }
    }
  }
}
