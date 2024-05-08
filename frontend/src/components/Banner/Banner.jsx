import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; 
import { Carousel } from 'react-responsive-carousel';
import './Banner.css'; 

const mainBanners = [
  {
    img: 'https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img/https://vanphong-pham.com/wp-content/uploads/2021/11/van-phong-pham-giare.png',
    alt: 'Văn phòng phẩm đa dạng - giá rẻ',
  },
  {
    img: 'https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img/https://vanphong-pham.com/wp-content/uploads/2021/11/AIO-GIAO-HANG-NHANH.png',
    alt: 'Giao hàng nhanh - Sản phẩm chất lượng',
  },
  {
    img: 'https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img/https://vanphong-pham.com/wp-content/uploads/2021/11/banner02.jpeg',
    alt: 'Sản phẩm đa dạng',
  },
];

const sideBanners = [
  {
    img: 'https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_380,h_115/https://vanphong-pham.com/wp-content/uploads/2021/11/vppaio.png',
    alt: 'Văn phòng phẩm AIO',
  },
  {
    img: 'https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_380,h_115/https://vanphong-pham.com/wp-content/uploads/2021/11/mua-don-lon.png',
    alt: 'Mua đơn lớn - Nhận ngay ưu đãi',
  },
];

const Banner = () => {
    return (
        <div className="banner-section">
          <div className="main-carousel">
            <Carousel
              showThumbs={false}
              autoPlay
              infiniteLoop
              interval={1500}
              showStatus={false}
              showIndicators
              swipeable
            >
              {mainBanners.map((banner, index) => (
                <div key={index} className="carousel-wrapper">
                  <img src={banner.img} alt={banner.alt} className="carousel-img" />
                </div>
              ))}
            </Carousel>
          </div>
          <div className="side-banners">
            {sideBanners.map((banner, index) => (
              <img
                key={index}
                src={banner.img}
                alt={banner.alt}
                className="side-banner-image"
              />
            ))}
          </div>
          <div className="elementor-decorative decorative-yellow"></div>
          <div className="elementor-decorative decorative-blue"></div>
        </div>
      );
};

export default Banner;