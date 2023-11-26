let button = document.getElementById('btn');

button.addEventListener('click', () => {
    const height = parseInt(document.getElementById('height').value);
    const width1 = parseInt(document.getElementById('width1').value);
    const width2 = parseInt(document.getElementById('width2').value);
    const result = document.getElementById('output');
    let height_status=false, width1_status=false, width2_status=false;

    if(height === '' || isNaN(height) || (height <= 0 )){
        document.getElementById('height_error').innerHTML = 'Please provide a valid height';
    }else{
        document.getElementById('height_error').innerHTML = '';
        height_status=true;
    }

    if(width1 === '' || isNaN(width1) || (width1 <= 0)){
        document.getElementById('width1_error').innerHTML = 'Please provide a valid width1';
    }else{
        document.getElementById('width1_error').innerHTML = '';
        width1_status=true;
    }
    if(width2 === '' || isNaN(width2) || (width2 <= 0)){
        document.getElementById('width2_error').innerHTML = 'Please provide a valid width2';
    }else{
        document.getElementById('width2_error').innerHTML = '';
        width2_status=true;
    }
    
    if(height_status && width1_status && width2_status){
            const bra = (((height*width1)+(height*width2))/((height*height)-width1*width2)).toFixed(2);
            
            if(bra >=0 && bra < 57.29){
                result.innerHTML = 'Cone Shape : ' + bra;
            }else if(bra >=-57.29 && bra < 0){
                result.innerHTML = 'Plate Shape : ' + bra;
            }else{
                result.innerHTML = 'Semicircle Shape : ' + bra;
            }

        }else{
            alert('The form has errors');
            result.innerHTML = '';
        }    
});