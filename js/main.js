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
  loop: true,
  margin: 10,
  dots: false,
  nav: true,
  autoplay: true,
  autoplayTimeout: 1000,
  autoplayHoverPause: true,
  navText: [
    '<img src="assets/images/left_border_arrow.svg" alt="left_border_arrow.svg"/>',
    '<img src="assets/images/right_border_arrow.svg" alt="right_border_arrow.svg"/>',
  ],
  responsive: {
    // breakpoint from 0 up
    0: {},
    // breakpoint from 375 up
    375: {
      items: 2,
    },
    // breakpoint from 740 up
    740: {
      items: 2,
    },
    // breakpoint from 1024 up
    1024: {
      items: 4
    },
  },
});

var shopOfWeekOwl = $("#shop-of-week .owl-carousel");
shopOfWeekOwl.owlCarousel({
  items: 1,
  loop: true,
  dots: false,
  nav: true,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  navText: [
    '<img src="assets/images/left_border_arrow.svg" alt="left_border_arrow.svg"/>',
    '<img src="assets/images/right_border_arrow.svg" alt="right_border_arrow.svg"/>',
  ],
});

var suggestionOwl = $("#suggestion .owl-carousel");
suggestionOwl.owlCarousel({
  loop: true,
  dots: false,
  nav: true,
  autoplay: false,
  autoplayTimeout: 1000,
  autoplayHoverPause: true,
  navText: [
    '<img src="assets/images/left_border_arrow.svg" alt="left_border_arrow.svg"/>',
    '<img src="assets/images/right_border_arrow.svg" alt="right_border_arrow.svg"/>',
  ],
  responsive: {
    // breakpoint from 0 up
    0: {
      items: 1,
    },
    // breakpoint from 375 up
    375: {
      items: 2,
    },
    // breakpoint from 740 up
    740: {
      items: 3,
    },
    // breakpoint from 1024 up
    1025: {
      items: 5,
    },
  },
});

var brandOwl = $("#brand .owl-carousel");
brandOwl.owlCarousel({
  items: 5,
  loop: true,
  dots: false,
  nav: true,
  autoplay: true,
  autoplayTimeout: 1000,
  autoplayHoverPause: true,
  navText: [
    '<img src="assets/images/left_arrow.svg" alt="left_arrow.svg" />',
    '<img src="assets/images/right_arrow.svg" alt="right_arrow.svg" />',
  ],
  responsive: {
    // breakpoint from 0 up
    0: {
      items: 1,
    },
    // breakpoint from 375 up
    375: {
      items: 1,
    },
    // breakpoint from 740 up
    740: {
      items: 2,
    },
    // breakpoint from 1024 up
    1024: {
      items: 5,
    },
  },
});

var recentlyOwl = $("#recently .owl-carousel");
recentlyOwl.owlCarousel({
  items: 4,
  loop: true,
  dots: false,
  nav: true,
  margin: 10,
  navText: [
    '<img src="assets/images/left_border_arrow.svg" alt="left_border_arrow.svg"/>',
    '<img src="assets/images/right_border_arrow.svg" alt="right_border_arrow.svg"/>',
  ],
  responsive: {
    // breakpoint from 0 up
    0: {
      items: 1,
    },
    // breakpoint from 375 up
    375: {
      items: 2,
    },
    // breakpoint from 740 up
    740: {
      items: 2,
    },
    // breakpoint from 1024 up
    1024: {
      items: 5,
    },
  },
});
