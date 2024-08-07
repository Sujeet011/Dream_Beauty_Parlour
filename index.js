document.getElementById('menuToggle').addEventListener('click', function() {
    var lis = document.querySelectorAll('#menuList li');
    lis.forEach(function(li) {
        li.style.display = 'block';
    });
});