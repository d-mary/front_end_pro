function initGallery() {
  const $galleryItems = $(".js--gal_item");
  const $modal = $(".js--modal");
  const $modalImage = $modal.find("img");
  const $closeBtn = $(".js--modal__close");
  const $prevBtn = $(".js--modal__prev");
  const $nextBtn = $(".js--modal__next");

  let currentImageIndex = 0;

  function openModal(index) {
    const imageSrc = $galleryItems.eq(index).find("img").attr("src");

    $modalImage.attr("src", imageSrc);
    $modal.show();
    currentImageIndex = index;
  }

  $galleryItems.on("click", function () {
    const index = $(this).index();
    openModal(index);
  });
  $closeBtn.on("click", function () {
    $modal.hide();
  });

  $prevBtn.on("click", function () {
    currentImageIndex =
      (currentImageIndex - 1 + $galleryItems.length) % $galleryItems.length;
    openModal(currentImageIndex);
  });

  $nextBtn.on("click", function () {
    currentImageIndex = (currentImageIndex + 1) % $galleryItems.length;
    openModal(currentImageIndex);
  });
}
$(document).ready(function () {
  initGallery();
});
