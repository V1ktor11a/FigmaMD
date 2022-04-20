$(function () {
  $(".slider").slick({
    centerMode: true,
    centerPadding: "160px",
    slidesToShow: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "80px",
          slidesToShow: 1,
        },
      },
    ],
  });
});
