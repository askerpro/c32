import { useRouter } from "next/router";
import * as API from "api";
import * as E from "./elements";
import Modal from "components/modal";
import Carousel from "components/carousel";

const Page = ({ data, screenShots }) => {
  const [clickedSlide, setClickedSlide] = React.useState(null);
  return (
    <>
      <Modal
        open={clickedSlide !== null}
        onClose={() => {
          setClickedSlide(null);
        }}
      >
        <E.CarouselWrapper>
          {clickedSlide !== null && (
            <Carousel currentSlide={clickedSlide}>
              {screenShots.map((screenShot) => {
                return (
                  <E.Thumb src={screenShot.image} key={screenShot.image} />
                );
              })}
            </Carousel>
          )}
        </E.CarouselWrapper>
      </Modal>
      <E.Wrapper>
        <E.Content>
          <E.Name>{data.name}</E.Name>
          <E.Description>{data.description_raw}</E.Description>
          <E.Actions>
            <E.Label>Website</E.Label>
            <a href={data.website}>{data.website}</a>
          </E.Actions>
        </E.Content>
        <E.Media>
          {screenShots.map((screenShot, i) => {
            return (
              <E.ThumbWrapper
                key={screenShot.image}
                onClick={() => {
                  setClickedSlide(i);
                }}
              >
                <E.Thumb src={screenShot.image} />
              </E.ThumbWrapper>
            );
          })}
        </E.Media>
      </E.Wrapper>
    </>
  );
};

export async function getServerSideProps({ params }) {
  const data = await API.get(params.slug);
  const { results: screenShots } = await API.get(`${params.slug}/screenshots`);

  return { props: { data, screenShots } };
}

export default Page;
