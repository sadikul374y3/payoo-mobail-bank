document.getElementById('btn-login').addEventListener('click', function(e){
    e.preventDefault()
    const mobailNumber = 1326482143
    const pinNumber = 1234

    const number =document.getElementById('num').value
    const numberConverted =parseInt(number)


    const pin =document.getElementById('pin').value
    const picConverted = parseInt(pin)


    if(numberConverted === mobailNumber && picConverted === pinNumber){
       window.location.href="./home.html"
    }

    else{
        alert('invalid nunber & pin')
    }


})