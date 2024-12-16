var _a;
// get refrences to the form and display area
(_a = document.getElementById('Resume-form')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault(); // prevent page reload
    // collect input values
    var name = document.getElementById('Name').value;
    var lastname = document.getElementById('Last name').value;
    var cnic = document.getElementById('CNIC').value;
    var email = document.getElementById('Email').value;
    var phone = document.getElementById('Phone No').value;
    var education = document.getElementById('Education').value;
    var Experience = document.getElementById('Experience').value;
    var Skills = document.getElementById('Skills').value;
    // check if all form elements are present
    if (name && lastname && cnic && email && phone && education && Experience && Skills) {
        //         alert("please fill all field");
        var fullName = "".concat(name).concat(lastname, ";\n");
        var Email = email;
        var Phone = phone;
        var Cnic = cnic;
        var Education = education;
        var experience = Experience;
        var skills = Skills;
    }
    // generate the resume content dynamically
    var resumeoutput = "\n    <h2><b>Resume</b></h2>\n    <h3> Personal Information</h3>\n    <p><b>Name:</b>".concat(name, "<p/>\n    <p><b>lastname:</b>").concat(lastname, "<p/>\n    <p><b>cnic:</b>").concat(cnic, "<p/>\n     <p><b>email:</b>").concat(email, "<p/>\n      <p><b>phone:</b>").concat(phone, "<p/>\n\n    <h3>Education</h3>\n    <p>").concat(education, "</p>\n\n    <h3>Experience</h3>\n    <p>").concat(Experience, "</p>\n    \n    <h3>Skills</h3>\n    <p>").concat(Skills, "</p>\n    \n    ");
    // Display the generated resume
    var resumeOutputElement = document.getElementById('resumeoutput');
    if (resumeOutputElement) {
        resumeOutputElement.innerHTML = resumeoutput;
    }
    else {
        console.error('The resume output element is missing');
    }
    // This else block is unnecessary here because it should be part of the form validation
    if (!name || !lastname || !cnic || !email || !phone || !education || !Experience || !Skills) {
        console.error('One or more input elements are missing');
    }
});
// // get refrences to the form and display area
// let resumeForm = document.querySelector('#Resume-form') as HTMLElement
// let resumeOutput = document.querySelector('#resumeoutput') as HTMLInputElement
// let editBtn = document.querySelector('#edit-btn') as HTMLElement
// const form =document.getElementById('Resume-form')?.addEventListener('submit' ,function(event: Event){
// event.preventDefault()
// resumeOutput.style.display = "block"
// //  get refrences to form elements using their ids 
//     const name = (document.getElementById('Name') as HTMLInputElement)
//     const lastname = (document.getElementById('Last name') as HTMLInputElement)
//     const cnic = (document.getElementById('CNIC') as HTMLInputElement)
//     const email = (document.getElementById('Email') as HTMLInputElement)
//     const phone = (document.getElementById('phone No') as HTMLInputElement)
//     const education = (document.getElementById('education') as HTMLTextAreaElement)
//     const experience= (document.getElementById('experience') as HTMLTextAreaElement)   
//     const Skills = (document.getElementById('Skills') as HTMLTextAreaElement)
//     // check if all form elements are present
//      if (!name || !lastname || !cnic || !email ||!phone || !education ||!experience || !Skills ) {
//         alert("please fill all field");
//         return;
//      }
//         (document.getElementById('resumeName') as HTMLInputElement).innerText =`Name: ${name.value}`;
//         (document.getElementById('resumeLast name') as HTMLInputElement).innerText =`Last name: ${ lastname.value}`;
//         (document.getElementById('resumephone No') as HTMLInputElement).innerText=`phone No:${phone.value}`;
//         (document.getElementById('Email') as HTMLInputElement).innerText =`email:${email.value}`;
//         (document.getElementById('resumeeducation') as HTMLTextAreaElement).innerText =`education:${education.value}`;
//         (document.getElementById('resumeexperience') as HTMLTextAreaElement).innerText =`experience:${experience.value}`;
//         (document.getElementById('resumeSkills') as HTMLTextAreaElement).innerText=`Skills:${Skills.value}`;
//         (document.getElementById('CNIC') as HTMLInputElement).innerText =`CNIC:${cnic.value}`;
//     })
//     //   edit Resume button functionality
//     editBtn?.addEventListener("click" ,() => {
//         resumeForm.style.display = "block"; // show the form again
//         resumeOutput.style.display ="none"; // hide the resume output
//         editBtn.style.display = "none"; // hide the edit button
//         // Repopulate the form with current resume data
//         const name = document.getElementById('resumeName')?.innerText.split(': ')[1];
//         const lastname = document.getElementById('resumeLast name')?.innerText.split(': ')[1];
//         const cnic = document.getElementById('CNIC')?.innerText.split(': ')[1];
//         const email = document.getElementById('Email')?.innerText.split(': ')[1];
//         const phone = document.getElementById('resumephone No')?.innerText.split('; ')[1];
//         const education =  document.getElementById('resumeeducation')?.innerText;
//         const experience = document.getElementById('resumeexperience')?.innerText;
//         const Skills =document.getElementById('resumeSkills')?.innerText;
//         // set the form inputs to these values
//         (document.getElementById('Name') as HTMLInputElement).value = name?? '';
//         (document.getElementById('Last name') as HTMLInputElement).value = lastname??'';
//         (document.getElementById('phone No') as HTMLInputElement).value = phone ??'';
//         (document.getElementById('CNIC') as HTMLInputElement).value = cnic??'';
//         (document.getElementById('Email') as HTMLInputElement).value= email??'';
//         (document.getElementById('education') as HTMLTextAreaElement).value= education??'';
//         (document.getElementById('experience') as HTMLTextAreaElement).value = experience??'';
//         (document.getElementById('Skills') as HTMLTextAreaElement).value= Skills??''; 
// });
