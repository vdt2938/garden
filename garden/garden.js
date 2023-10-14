function myFunction() {
  let table = document.getElementsByClassName("plant")[0];

  // let cell3 = row.insertCell(2);
  let plantname = document.getElementsByClassName('plantname')[0];
  let howmanyseed = document.getElementsByClassName('howmanyseed')[0];
  let whentosow = document.getElementsByClassName('date')[0];
  const value = [plantname.value, howmanyseed.value, whentosow.value]
  // let whentosow

  // cell3.innerHTML = "NEW CELL3";
  if (value[0] == '' || value[1] == '' || value[2] == ''){
    console.log('need more info');
  }else{
    let row = table.insertRow(1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    cell1.innerHTML = value[0];
    cell2.innerHTML = value[1];
    cell3.innerHTML = value[2];
  }
}


function darkmode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}
