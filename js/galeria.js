document.addEventListener("DOMContentLoaded", function() {

    const modal = document.getElementById("modalGaleria");
    const modalImg = document.getElementById("imgModal");
    const fechar = document.querySelector(".fechar");

    document.querySelectorAll(".item-galeria img").forEach(img => {
        img.addEventListener("click", function() {
            modal.style.display = "block";
            modalImg.src = this.src;
        });
    });

    fechar.onclick = function() {
        modal.style.display = "none";
    }

    modal.onclick = function(e) {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    }

});