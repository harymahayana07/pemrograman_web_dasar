
// menambahkan element baru di html yaitu > p
newElement.innerHtml = 'Anda menekan gambar kucing sebanyak<span id="count">0</span> kali'
document.body.appendChild(newElement);

const catImage = document.querySelector("#catImage");
catImage.addEventListener('cilck', function(event) {
    document.querySelector('#count').innerText++;
});