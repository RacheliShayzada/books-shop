// פונקציה לפתיחת הטופס
function openForm(mode, bookIndex) {
    document.getElementById('formContainer').classList.remove('hidden');
    renderForm(mode, bookIndex);
}

// פונקציה לסגירת הטופס
function closeForm() {
    document.getElementById('formContainer').classList.add('hidden');
}