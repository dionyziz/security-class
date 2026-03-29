function loadMD(filename) {
    if (filename === '') {
        filename = 'main';
    }
    filename += '.md';
    document.querySelector('.content').innerHTML = 'Φόρτωση...';
    fetch(filename)
        .then(function(response) { return response.text(); })
        .then(function(md) {
            document.querySelector('.content').innerHTML = markdown.toHTML(md);
        });
}

function onHashChange() {
    loadMD(location.hash.replace('#', ''));
}

window.addEventListener('hashchange', onHashChange);
loadMD(location.hash.replace('#', ''));
