document.addEventListener('DOMContentLoaded', function () {
    var searchBox = document.querySelector('#search-box input[type="text"]');
    var searchButton = document.querySelector('#search-box button');

    searchButton.addEventListener('click', function () {
        searchRedirect();
    });

    searchBox.addEventListener('keyup', function (event) {
        if (event.key === 'Enter') {
            searchRedirect();
        }
    });

    function searchRedirect() {
        var searchText = searchBox.value.toLowerCase();
        if (searchText === 'cyber security') {
            window.location.href = 'file:///D:/Project/TracksWebBrowser/cyper_security/index.html';
        }
        if (searchText === 'embedded systems') {
            window.location.href = 'file:///D:/Project/TracksWebBrowser/embedded_systems/index.html';
        }
        if (searchText === 'full stack') {
            window.location.href = 'file:///D:/Project/TracksWebBrowser/full_stack/index.html';
        }
        
    }
});