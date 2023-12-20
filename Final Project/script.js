const form = document.querySelector('#contact-form');
const question = document.querySelector('#question');
const comment = document.querySelector('#comment');
const hiring = document.querySelector('#hiring');
let rateLabel = document.querySelector('#rate-label');
let rate = document.querySelector('#rate');
let rateHidden = true;

window.onload = function(){
    hiring.addEventListener('click', function (){
        if (rateHidden){
            rateLabel.removeAttribute('hidden');
            rate.removeAttribute('hidden');
            rate.setAttribute('required', '');
            rateHidden = false;
        }
    });

    question.addEventListener('click', hideRate);
    comment.addEventListener('click', hideRate);

    form.addEventListener('submit', function(){
        let fullName = document.querySelector('#full-name').value.trim();
        let sentFullName = document.querySelector('#full-name');
        sentFullName.value = fullName;
        
        let organization = document.querySelector('#organization').value.trim();
        let sentOrganization = document.querySelector('#organization');
        sentOrganization.value = organization;

        let city = document.querySelector('#city').value.trim();
        let sentCity = document.querySelector('#city');
        sentCity.value = city;
        
        let message = document.querySelector('#message').value.trim();
        let sentMessage = document.querySelector('#message');
        sentMessage.value = message;
        
        let email = document.querySelector('#email').value.trim();
        let sentEmail = document.querySelector('#email');
        sentEmail.value = email;
    }); 

};


function hideRate() {
    if(!rateHidden){
        rate.removeAttribute('required');
        rate.setAttribute('hidden', '');
        rateLabel.setAttribute('hidden', '');
        rateHidden = true;
    }
}

function downloadResume() {
    var resumeURL = "personal/Tarandeep Kaur_Enrolment Services Assistant_Resume.pdf";
    var downloadLink = document.createElement("a");
    downloadLink.href = resumeURL;
    downloadLink.download = "Tarandeep_Kaur_Resume.pdf";

    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
}
