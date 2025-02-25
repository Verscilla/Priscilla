document.getElementById('yesButton').addEventListener('click', function() {

    showResponse("arigatouu Kirana... buatlah aku jadi lelaki yang kau mau  yaa!!");

});

document.getElementById('noButton').addEventListener('click', function() {

    showResponse("Aduh... maaf deh udah berharap lebih...");

});

function showResponse(message) {

    document.querySelector('.container').style.display = 'none';

    document.getElementById('responseText').textContent = message;

    document.getElementById('responseMessage').classList.remove('hidden');

}