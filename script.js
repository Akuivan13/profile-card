document.addEventListener("DOMContentLoaded", function () {
    fetch('isi.json')
        .then(response => response.json())
        .then(data => {
            const buttonsContainer = document.getElementById('buttons-container');
            data.buttons.forEach(button => {
                const a = document.createElement('a');
                a.href = button.link;
                a.className = 'btn btn-outline-danger';
                a.innerHTML = `<i class="${button.icon}"></i> ${button.title}`;
                buttonsContainer.appendChild(a);
            });
        })
        .catch(error => console.error('Error fetching the JSON:', error));
});