document.addEventListener('DOMContentLoaded', function(){
    const form = document.querySelector('form');

    form.addEventListener('submit', function(e){
        e.preventDefault();

        const error = document.getElementById('error');
        if(error){
            error.textContent = '';
        };

        const listname = document.getElementById('listname').value;
        const item = document.getElementById('item').value;

        if(!listname){
            showError('Please enter a valid name', form);
            return;
        };
        if(!item){
            showError('Please an item', form);
            return;
        }
    });
});

function showError(message, form){
    let error = document.getElementById('error');
    if(!error){
        error = document.createElement('div');
        error.id = 'error';
        error.style.color = 'red';
        form.appendChild(error);
    };
    error.textContent = message;
};