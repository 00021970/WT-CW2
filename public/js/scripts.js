document.addEventListener('DOMContentLoaded', function(){
    const form = document.querySelector('form');

    form.addEventListener('submit', function(e){
        e.preventDefault();

        const error = document.getElementById('error');
        if(error){
            error.textContent = '';
        };

        const listname = document.getElementById('listname').value;
        const items = document.querySelectorAll('input[name="items[]"]');

        if(!listname){
            showError('Please enter a valid name', form);
            return;
        };
        if(items.length === 0){
            showError('Please add at least one item', form);
            return;
        }

        form.submit();
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

function addItem(){
    const itemList = document.getElementById('items-list');
    const itemInput = document.createElement('input');
    itemInput.type = 'text';
    itemInput.name = 'items[]';
    itemInput.placeholder = `Item ${document.querySelectorAll('input[name="items[]"]').length + 1}`;
    itemList.appendChild(itemInput);
};