import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import * as S from "../card-list/card-list.styled"

export const SkeletonForAdd = () => {
  return (
    <SkeletonTheme baseColor="#f1f1f1" highlightColor="#ffffff">
      <OneSkeleton />
      <OneSkeleton />
      <OneSkeleton />
      <OneSkeleton />
      <OneSkeleton />
      <OneSkeleton />
      <OneSkeleton />
      <OneSkeleton />
    </SkeletonTheme>
  );
};


export const OneSkeleton = () => {
    return (
        <S.CardsItem>
        <S.CardsCard>
            <S.CardImage>
              <Skeleton width={270} height={270} />
            </S.CardImage>
          <div className="card__content">
          <a href="" target="_blank">
              <S.CardTitle><Skeleton/></S.CardTitle>
            </a>
            <S.CardPrice><Skeleton/></S.CardPrice>
            <S.CardPlace><Skeleton/></S.CardPlace>
            <Skeleton/>
          </div>
        </S.CardsCard>
      </S.CardsItem>
    )
}