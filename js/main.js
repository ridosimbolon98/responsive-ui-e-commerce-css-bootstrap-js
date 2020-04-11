// Auto play modal video profil youtube
$(function() {
  $(".video").click(function () {
    var theModal = $(this).data("target"),
    videoSRC = $(this).attr("data-video"),
    videoSRCauto = videoSRC + "?modestbranding=1&rel=0&controls=0&showinfo=0&html5=1&autoplay=1";
    $(theModal + ' iframe').attr('src', videoSRCauto);
    $(theModal + ' button.close').click(function () {
      $(theModal + ' iframe').attr('src', videoSRC);
    });
  });
});

// lighbox gambar barang
$(document).on('click', '[data-toggle="lightbox"]', function(event){
  event.preventDefault();
  $(this).ekkoLightbox();
});

$('.slider').slick({
  infinite: true,
  slideToShow:1,
  slideToScroll:1
});

//scrool halaman, header jadi transparan 0.8%
var nav = document.getElementById('nav');
window.onscroll = function() {
  if (window.pageYOffset > 80) {
    $(nav).addClass("navAfter");
    $(nav).removeClass("navBefore");
  } else {
    $(nav).removeClass("navAfter");
    $(nav).addClass("navBefore");
  }
}

// event untuk detail, add to wistlist dan add to cart produk
const btnDetailProduk = document.getElementById('detailProduk'); 
const btnAddWishlist = document.getElementById('addToWishlist'); 
const btnAddCart = document.getElementById('addToCart'); 
$(function(){
  $(btnDetailProduk).on('click', function(event){
    var idProduk = $(this).attr('data-produk');
    window.location = "produk.html?id="+idProduk;
  });
});
