// get refrences to the form and display area
document.getElementById('Resume-form')?.addEventListener('submit', function (event: Event) {
        event.preventDefault();  // prevent page reload

    // collect input values
    const name = (document.getElementById('Name') as HTMLInputElement).value;
    const lastname = (document.getElementById('Last name') as HTMLInputElement).value;
    const cnic = (document.getElementById('CNIC') as HTMLInputElement).value;
    const email = (document.getElementById('Email') as HTMLInputElement).value;
    const phone = (document.getElementById('Phone No') as HTMLInputElement).value;
    const education = (document.getElementById('Education') as HTMLTextAreaElement).value;
    const Experience= (document.getElementById('Experience') as HTMLTextAreaElement).value;
    const Skills = (document.getElementById('Skills') as HTMLTextAreaElement).value; 

// check if all form elements are present
    if (name && lastname && cnic && email && phone && education && Experience && Skills ) {
        //         alert("please fill all field");
        const fullName:string =`${name}${lastname};
` 
         const Email:string=email;
         const Phone: string=phone;
         const Cnic: string=cnic;
         const Education:string = education;
         const experience:string= Experience;
         const skills:string= Skills;
    }




    // generate the resume content dynamically
    const resumeoutput: string = `
    <h2><b>Resume</b></h2>
    <h3> Personal Information</h3>
    <p><b>Name:</b>${name}<p/>
    <p><b>lastname:</b>${lastname}<p/>
    <p><b>cnic:</b>${cnic}<p/>
     <p><b>email:</b>${email}<p/>
      <p><b>phone:</b>${phone}<p/>

    <h3>Education</h3>
    <p>${education}</p>

    <h3>Experience</h3>
    <p>${Experience}</p>
    
    <h3>Skills</h3>
    <p>${Skills}</p>
    
    `;

    
    // Display the generated resume
    const resumeOutputElement= document.getElementById
    ('resumeoutput');
    if (resumeOutputElement) {

        resumeOutputElement.innerHTML = resumeoutput;
    } else{

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
