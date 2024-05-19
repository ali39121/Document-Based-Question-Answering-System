document.getElementById('fileInput').addEventListener('change', function(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function(event) {
        const imagePreview = document.getElementById('imagePreview');
        imagePreview.src = event.target.result;
        imagePreview.style.display = 'block';
    }

    reader.readAsDataURL(file);
});
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(event) {
        event.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});
function submitQuestion() {
    const question = document.getElementById('questionInput').value;
    const file = document.getElementById('fileInput').files[0];

    // Show loading spinner
    document.getElementById('result').innerHTML = '<div class="loader"></div>';

    // Perform asynchronous processing of question and file
    // Display result when ready
}
