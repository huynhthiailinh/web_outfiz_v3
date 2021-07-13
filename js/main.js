var posterOwl = $("#general .poster .owl-carousel");
posterOwl.owlCarousel({
  items: 1,
  loop: true,
  autoplay: true,
  autoplayTimeout: 2000,
  autoplayHoverPause: true,
});

var newSellingProductOwl = $("#general .new-selling-product .owl-carousel");
newSellingProductOwl.owlCarousel({
  items: 4,
  loop: true,
  dots: false,
  nav: true,
  autoplay: true,
  autoplayTimeout: 1000,
  navText: [
    '<img src="assets/images/left_border_arrow.svg" alt="left_border_arrow.svg"/>',
    '<img src="assets/images/right_border_arrow.svg" alt="right_border_arrow.svg"/>',
  ],
});

var shopOfWeekOwl = $("#shop-of-week .shop-products .owl-carousel");
shopOfWeekOwl.owlCarousel({
  items: 1,
  loop: true,
  dots: false,
  nav: true,
  autoplay: true,
  autoplayTimeout: 1000,
  navText: [
    '<img src="assets/images/left_border_arrow.svg" alt="left_border_arrow.svg"/>',
    '<img src="assets/images/right_border_arrow.svg" alt="right_border_arrow.svg"/>',
  ],
});

var shopOfWeekOwl = $("#suggestion .owl-carousel");
shopOfWeekOwl.owlCarousel({
  items: 5,
  loop: true,
  dots: false,
  nav: true,
  autoplay: true,
  autoplayTimeout: 1000,
  navText: [
    '<img src="assets/images/left_border_arrow.svg" alt="left_border_arrow.svg"/>',
    '<img src="assets/images/right_border_arrow.svg" alt="right_border_arrow.svg"/>',
  ],
});

var brandOwl = $("#brand .owl-carousel");
brandOwl.owlCarousel({
  items: 5,
  loop: true,
  dots: false,
  nav: true,
  autoplay: true,
  autoplayTimeout: 1000,
  navText: [
    '<img src="assets/images/left_arrow.svg" alt="left_arrow.svg" />',
    '<img src="assets/images/right_arrow.svg" alt="right_arrow.svg" />',
  ],
});

var recentlyOwl = $("#recently .owl-carousel");
recentlyOwl.owlCarousel({
  items: 4,
  loop: true,
  dots: false,
  nav: true,
  navText: [
    '<img src="assets/images/left_border_arrow.svg" alt="left_border_arrow.svg"/>',
    '<img src="assets/images/right_border_arrow.svg" alt="right_border_arrow.svg"/>',
  ],
});