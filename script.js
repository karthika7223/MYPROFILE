// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form Validation and Display Thank You Message
document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        // Success message after form submission
        document.getElementById('formMessage').innerText = 'Thank you for contacting me, ' + name + '! I will get back to you soon.';
        document.getElementById('formMessage').style.color = 'green';

        // Reset the form
        document.getElementById('contactForm').reset();
    } else {
        // Display error message if validation fails
        document.getElementById('formMessage').innerText = 'Please fill out all fields.';
        document.getElementById('formMessage').style.color = 'red';
    }
});

// Modal for Project Details (Optional, add if you have modals for projects)
function openModal(projectNumber) {
    const modal = document.getElementById('modal');
    const title = document.getElementById('modal-title');
    const description = document.getElementById('modal-description');
    const link = document.getElementById('modal-link');

    if (projectNumber === 1) {
        title.innerText = "Content Based Video Retrieval Using RNN-DNN";
        description.innerText = "Content-Based Video Retrieval (CBVR) is a method for searching and retrieving video content based on the actual visual and auditory content of the videos rather than metadata. This approach leverages advanced machine learning techniques, particularly Recurrent Neural Networks (RNNs) and Deep Neural Networks (DNNs).";
        link.href = "https://github.com/your-repo/project-1";
    } else if (projectNumber === 2) {
        title.innerText = "Predicting Future Poverty Level Using Socioeconomic Indicator";
        description.innerText = "The goal of this project is to predict future poverty levels using socioeconomic indicators. By leveraging historical data, we aim to develop predictive models that can assist policymakers in designing effective poverty alleviation strategies.";
        link.href = "https://github.com/your-repo/project-2";
    }

    modal.style.display = 'flex';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function (event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};
