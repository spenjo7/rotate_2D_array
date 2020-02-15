//The purpose of this function is to rotate a 2 dimensional array so that
// rows become columns and columns become rows
rotate_2d_array = (arr) => {
	let depth = arr.length;
	let width = Math.max( ... arr.map( el => el.length ) ); //Math.max takes a spread, not an array

	let out = [];

	for(let c = 0; c < width; c++ ){

		if(out.length <= c){
			out.push([]);
		}

		for( let r = 0; r < depth; r++){

			out[c].push( arr[r][c] || null );

		}

	}

	return out;

}