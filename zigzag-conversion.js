var zigzag_conversion = function(str, rows) {
    // self explanatory
    var length = str.length;
    if (rows <= 1 || !str || length < rows) {
        return str;
    }

    var result = '';
    
    var table = {};
    let row = 0;
    var is_reverse = false;

    for(let i = 0; i < length; i++) {
    	if(!table.hasOwnProperty(row))
    		table[row] = '';

        table[row] += str[i];
        if (row + 1 === rows) {
            is_reverse = true;
        } else if (row === 0) {
            is_reverse = false;
        }

        is_reverse ? row-- : row++;
    }

    for(let i = 0; i < rows; i++){
    	if(table.hasOwnProperty(row)){
    		result+= table[i];
    	}
    }

    console.log(result);
}