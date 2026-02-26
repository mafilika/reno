function openModal(src){
document.getElementById("modal").style.display="block";
document.getElementById("modal-img").src=src;
}

function closeModal(){
document.getElementById("modal").style.display="none";
}

document.addEventListener("DOMContentLoaded",function(){
var form=document.getElementById("bookingForm");
if(form){
form.addEventListener("submit",function(e){
e.preventDefault();

var name=document.getElementById("name").value;
var phone=document.getElementById("phone").value;
var service=document.getElementById("service").value;
var details=document.getElementById("details").value;

var message=`Premium Renovation Enquiry - P&J Renovators
Name: ${name}
Phone: ${phone}
Service: ${service}
Project Details: ${details}`;

var url="https://wa.me/27621305411?text="+encodeURIComponent(message);
window.open(url,"_blank");
});
}
});
