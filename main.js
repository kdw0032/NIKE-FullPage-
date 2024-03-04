new Pageable(".container", {
    childSelector: '.page',
    animation: 700,
    onInit: function() {
        console.log("Pageable initialized");
    }
});