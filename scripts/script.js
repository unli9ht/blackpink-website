const btn = document.getElementById('btn-nav');

btn.addEventListener('click', (e) => {
    e.preventDefault();
    document.body.classList.toggle('show');
});

// Prevent Focus State when the user clicks on the
// previous and next buttons but keeps the focus state
// for keyboard users...
document.getElementById('prev')
        .addEventListener('mousedown', function(e){
            e.preventDefault();
        });
document.getElementById('next')
        .addEventListener('mousedown', function(e){
            e.preventDefault();
        });