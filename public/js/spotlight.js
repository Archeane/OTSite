function showSpotlight(n, length) {
    console.log(document.getElementById('spotlight-page-' + n.toString()));
    for (i = 1; i <= length; i++) {
        //console.log(($('#spotlight-text > #' + i.toString())).text())
        document.getElementById('spotlight-page-' + i.toString()).style.display = 'none';
    }
    document.getElementById('spotlight-page-' + n.toString()).style.display = 'block';
    
}