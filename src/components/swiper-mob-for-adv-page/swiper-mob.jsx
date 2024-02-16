import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./swiper-mob.css";
import * as S from "./swiper-mob.styled";
import { Pagination } from "swiper/modules";
import Skeleton from "react-loading-skeleton";

export const ArticleImagesMob = ({ isLoading, data }) => {
  const imagesArr = data && data.images;
  return (
    <S.SwiperDiv>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        {isLoading ? (
          <Skeleton width={320} height={320} />
        ) : imagesArr.length > 0 ? (
          imagesArr.map((image, index) => {
            return (
              <SwiperSlide key={index}>
                <img
                  src={image.url ? `http://localhost:8090/${image.url}` : null}
                  alt="article-img"
                />
              </SwiperSlide>
            );
          })
        ) : null}
      </Swiper>
    </S.SwiperDiv>
  );
};
