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
            const bra = (0.5*(width1+width2)*(height)).toFixed(2);
            
            result.innerHTML = '' + bra;

        }else{
            alert('The form has errors');
            result.innerHTML = '';
        }    
});