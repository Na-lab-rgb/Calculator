	function plus(){
	var x,y,R;
	//x,y - числа, R - результат
	x = document.getElementById('n1').value;
    x = parseInt(x);

	y = document.getElementById('n2').value;
    y = parseInt(y);

    R = x+y; 
    document.getElementById('out').innerHTML = R;   
       }


        function minus(){
	var x,y,R;
	//x,y - числа, R - результат
	x = document.getElementById('n1').value;
    x = parseInt(x);

	y = document.getElementById('n2').value;
    y = parseInt(y);

    R = x-y; 
    document.getElementById('out').innerHTML = R;   
    }

    function umn(){
	var x,y,R;
	//x,y - числа, R - результат
	x = document.getElementById('n1').value;
    x = parseInt(x);

	y = document.getElementById('n2').value;
    y = parseInt(y);

    R = x*y; 
    document.getElementById('out').innerHTML = R;   
    }