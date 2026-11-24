//DOM(document object model)
//access the element and store in variable
var head1=document.getElementById('head1');
head1.style.textAlign='center';
head1.style.color='red';
head1.textContent='Heading changed!!!';
head1.innerText='Heading Changed!!!';
let group=document.getElementById('grp1');
group.innerHTML=`<p>I am a Paragraph</p>.`
let group1=document.getElementById('grp2');
group1.innerHTML=`<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGPW1fvwvQGzBcW9y9GpnBDsfDv0x_t1YXTPRd_6dN9g&s=10"></img>`
var list=document.getElementsByClassName('lichild');
list[0].textContent='Pineapple';
list[2].style.color='lightblue';
var par=document.getElementsByTagName('p');
par[0].style.fontFamily='calibri';
var query1=document.querySelector('input[type=date]');
query1.style.backgroundColor='brown';