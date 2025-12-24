function openFull(el) {
  var modal = document.getElementById("fullImageModal");
  var modalImg = document.getElementById("fullImage");
  modal.style.display = "block";
  modalImg.src = el.src;
}
