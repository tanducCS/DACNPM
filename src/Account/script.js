const img = document.querySelector('#photo');
const file = document.querySelector('#file');
const uploadBtn = document.querySelector('#uploadBtn');

file.addEventListener('change', function(){

    const choosedFile = this.files[0];
    if (choosedFile){
        const reader = new FileReader();
        reader.addEventListener('load',function(){
            img.setAttribute('src',reader.result)
        });

        reader.readAsDataURL(choosedFile);
    }


});
const logout = document.getElementById('logout');
logout.onclick = function(){
    location.assign("../Login/index.html");
};