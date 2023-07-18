const progress = document.getElementById('progress');

const form = document.forms.form;
form.addEventListener('submit', e => {
    e.preventDefault();

    const xhr = new XMLHttpRequest();
    
    xhr.upload.addEventListener('progress', event => {
      progress.value = Math.round(event.loaded / event.total);
    });

    xhr.open("POST", 'https://students.netoservices.ru/nestjs-backend/upload');

    const formData = new FormData(form);

    xhr.send(formData);

});