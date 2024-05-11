import Slider from "react-slick";

export default function ListSlider({children}) {
  var settings = {
    dots: false,
    infinite: true,
    lazyLoad:true,
    swipeToSlide: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
    centerPadding : "100px"
  };
  return (
    <Slider {...settings}>
      {children}
    </Slider>
  );
}