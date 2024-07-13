"use-strict";
try
{
    if(document.querySelector('form#contactForm'))
        document.querySelector('form#contactForm').addEventListener('submit',(event)=>
        {
            event.preventDefault();
            document.querySelectorAll('p.error').forEach(element => element.innerText = '');

            let form = document.querySelector('#contactForm');
            let data = {
                fullname    :   form.fullname.value,
                email       :   form.email.value,
                tal         :   form.tal.value,
                msg         :   form.msg.value
            }

            let constraints =
            {
                fullname:
                {
                    presence: { allowEmpty: false, message: "^ Full name is required" },
                    format:
                    {
                        pattern: "^[A-Za-z ]+$",
                        message: "^ Full Name can only contain a to z letters and spaces"
                    }
                },
                email:
                {
                    presence: { allowEmpty: false, message: "^ Email is required" },
                    email: true
                },
                tal:
                {
                    presence: { allowEmpty: false, message: "^ Phone no is required" },
                    format:
                    {
                        pattern: "^[0-9]{10}$",
                        message: "^ Email must be exactly 10 digits and contain only numbers"
                    }
                },
                msg:
                {
                    presence: { allowEmpty: false,message: "^ Message is required" },
                    length:
                    {
                        maximum: 500,
                        message: "^ Message must be 500 characters or less"
                    },
                    format:
                    {
                        pattern: "^[A-Za-z0-9 .,\"\-']+$",
                        message: "^ Message can only contain letters, numbers, and certain special characters (.,\"-')"
                    }
                }
            };

            let errors = validate(data, constraints);
            
            if(!errors)
            {
                document.querySelector('#Contact div.contact_form button[type=submit]').innerText = 'Wait...';
                submitForm(data);
            }
            else
                for(key in errors)
                    if(document.querySelector(`#Contact div.contact_form [name='${key}']`).parentElement.querySelector('p.error'))
                        document.querySelector(`#Contact div.contact_form [name='${key}']`).parentElement.querySelector('p.error').innerText = errors[key][0];
        });
}
catch(e)
{
    console.log(e);
}

function submitForm(formData)
{
    return fetch('https://programmersquery.com/send-mail.php',
    {
        method: 'POST',
        headers:
        {
            'Content-Type': 'application/json'
        },
        body    :   JSON.stringify(formData)
    })
    .then(responce => responce.json())
    .then(({success,message}) =>
    {
        Swal.fire({
            text: message,
            icon: (success === true) ? 'success' : "error"
        });

        document.querySelector('#Contact div.contact_form button[type=submit]').innerText = 'Submit';
        document.querySelectorAll('#Contact input,#Contact textarea').forEach(element => element.value = '');
    })
    .catch(() =>
    {
        Swal.fire({
            title: "Opps!",
            text: "Somthing went wrong",
            icon: "error"
        });

        document.querySelector('#Contact div.contact_form button[type=submit]').innerText = 'Submit';
    });
}