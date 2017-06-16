  /*xlsx = require('testx-xlsx-parser')
  xlsx.parse('test.xlsx', 'Sheet1', 'NL').then(function(){
      console.log(arguments);
  });*/

XLSX = require('xlsx');
var workbook = XLSX.readFile('test.xlsx');
var sheet = workbook.Sheets['Sheet1'];
console.log(workbook);
console.log(workbook.SheetNames);
console.log(workbook.Sheets);
console.log(sheet);
console.log(XLSX.utils.sheet_to_json(sheet));