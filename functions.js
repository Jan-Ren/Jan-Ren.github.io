var result; // GLOBAL VARIABLE OF THE JSON OBJECT

//This reads the uploaded jsonfile
document.getElementById('import').onclick = function() {
    var files = document.getElementById('selectFiles').files;
    console.log(files);
    if (files.length <= 0) {
        return false;
    }
    var fr = new FileReader();
    fr.onload = function(e) { 
        console.log(e);
        result = JSON.parse(e.target.result);
        var formatted = JSON.stringify(result);
        document.getElementById('result').value = formatted;
    }
    fr.readAsText(files.item(0));
};

// testing of json object
document.getElementById('sort').onclick = function(){
    var list = [];
    var count = Object.keys(result.burger_by_species).length; // counts the length of a json object
    document.getElementById('sorted').value = count;
}
//gets the burgersales data
var arrayBurger_sales = []

for(let i = 0; i < Object.keys(result.burger_sales).length; i++){
    arrayBurger_sales.push(Object.values(result.burger_sales)[i]);
};

console.log(arrayBurger_sales)
