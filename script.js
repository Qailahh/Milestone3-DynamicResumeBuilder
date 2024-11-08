// Select the form and resume output elements
const form = document.getElementById('resume-form');
const resumeName = document.getElementById('resume-name');
const resumeEmail = document.getElementById('resume-email');
const resumeEducation = document.getElementById('resume-education');
const resumeWorkExperience = document.getElementById('resume-work-experience');
const resumeSkills = document.getElementById('resume-skills');

// Handle form submission and dynamically generate the resume
form.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the form from submitting and refreshing the page

    // Capture user input values from the form
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const education = document.getElementById('education').value;
    const workExperience = document.getElementById('work-experience').value;
    const skills = document.getElementById('skills').value;

    // Update resume sections dynamically
    resumeName.textContent = name ? name : 'Not filled';
    resumeEmail.textContent = email ? email : 'Not filled';
    resumeEducation.textContent = education ? education : 'Not filled';
    resumeWorkExperience.textContent = workExperience ? workExperience : 'Not filled';

    // Update the skills section (splitting by commas)
    resumeSkills.innerHTML = ''; // Clear any previous skills
    if (skills) {
        const skillList = skills.split(',').map(skill => skill.trim());
        skillList.forEach(skill => {
            const li = document.createElement('li');
            li.textContent = skill;
            resumeSkills.appendChild(li);
        });
    } else {
        const li = document.createElement('li');
        li.textContent = 'Not filled';
        resumeSkills.appendChild(li);
    }
});
