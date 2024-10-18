//ESTOU TENTANDO COLOCAR A FUNÇÃO DO BOTÃO "FA-BARS" E ELE CARALHOS NÃO QUER FUNCIONAR
//FALAR COM O PROFESSOR SOBRE O ABSURDO DESSA BOTÃO FDP.
//DEIXA PRA LA EU CONSEGUI.
$(document).ready(function() {
    $('#mobile_btn').on('click', function () {
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-x fa-bars');
    }); 
});


