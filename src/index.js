module.exports = function toReadable(number) {


    let beforeTen = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    let beforeTwen = ['','eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    
    let tensNumbers = [" ","ten",'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    
     let str = String(number);
      let arr = str.split('');
      let words = '';
      var largeNum = 0;
      if (str == '0') {
        return 'zero';
    }
      for (var i = 0; i < str.length; i++) {
        if (str.length == 2 && arr[i] == str.charAt(i) && arr[i+1] == str.charAt(i+1) ){
           words = beforeTwen[Number(str.charAt(i+1))];
        }
        if (str.length == 1 && arr[i] == str.charAt(i)){
           words = beforeTen[Number(str.charAt(i))];
        }
        if (str.length == 2 && arr[i] == str.charAt(i) && arr[i+1] == "0" ){
           words = tensNumbers[Number(str.charAt(i))];
        }
        if (str.length == 2 && arr[i] == str.charAt(i) && arr[i+1] == str.charAt(i+1) && number>19){
           words = tensNumbers[Number(str.charAt(i))] +" " + beforeTen[Number(str.charAt(i+1))];
        }
        if (str.length == 3 && arr[i] == str.charAt(i) && arr[i+1] == "0"  && arr[i+2] == "0" ){
           words = beforeTen[Number(str.charAt(i))] +" "+ "hundred";
        }
        if (str.length == 3 && arr[i] == str.charAt(i) && arr[i+1] == str.charAt(i+1) && arr[i+2] == "0" ){
           words = beforeTen[Number(str.charAt(i))] +" "+ "hundred" + " " +tensNumbers[Number(str.charAt(i+1))];
        }
         if (str.length == 3 && arr[i] == str.charAt(i) && arr[i+1] == str.charAt(i+1) && arr[i+2] == str.charAt(i+2) && arr[i+1] != "1"){
           words = beforeTen[Number(str.charAt(i))] +" "+ "hundred" + " " +tensNumbers[Number(str.charAt(i+1))]+ " " + beforeTen[Number(str.charAt(i+2))];
        }

      }
    return words.trim();
    }
