import Image from "next/image";
import MaxWidthWrapper from "./components/defaults/MaxWidthWrapper";
import StaggerList from "./components/StaggerList";
import ParagraphWrite from "./components/ParagraphWrite";
import SwiperCards from "./components/defaults/SwiperCards";
import Paragraph from "./components/defaults/Paragraph";
import GridContainer from "./components/GridContainer";
import Heading from "./components/defaults/Heading";
import Footer from "./components/Footer";
import Header from "./components/Header/Header";
import OurMission from "./components/OurMission";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main className=" bg-white ">
      <Header/>
      {/* <Nav/> */}
      <div className=" ">
      <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full  h-screen lg:h-[500px] object-cover"
        >
          <source src="/assets/vedio2.mp4" type="video/mp4"></source>
        </video>
        </div>
        <div id="aboutus" className="bg-gray-50 py-8">
  <MaxWidthWrapper
    sectionId="about"
    className="flex flex-col-reverse lg:flex-row-reverse gap-8 lg:gap-20 items-center justify-between"
  >
    <div className="flex flex-col items-start gap-4 w-full lg:w-1/2">
      <StaggerList
        text="من <b>نحن ؟"
        list={[
          `تؤمن الشركة بأن النمو يأتي من خلال رضا العملاء وقد وضعنا أهدافنا لتوفير منتج ذي قيمة مضافة لعملائنا .`,
          `وتلبية احتياجاتهم من خلال التركيز على "الجودة والتكنولوجيا والابتكار وخدمة العملاء."`,
        ]}
      >
        <Paragraph
          size="lg"
          className="ml-auto text-xl md:text-2xl lg:text-4xl"
          description="شركة المصنع السعودي لقطع غيار السيارات"
        />
      </StaggerList>
      <button className="ml-auto rounded-2xl w-fit py-2 px-4 bg-[#01A101] text-white">
        تواصل معنا
      </button>
    </div>

  
      <Image src={"/LOGO.jpeg"} className="" width={250} height={250} alt="logo"  />
  </MaxWidthWrapper>
</div>

   
      <div id="products" className=" bg-gray-50">

      <MaxWidthWrapper className="flex  overflow-hidden  items-center flex-col gap-4">
      {/* <Heading text="جميع المنتجات" /> */}
        {/* <ParagraphWrite
          text={"نحن نوفر قطع الغيار السيارات  تغطي منتجات هذه المصانع مجموعة واسعة من الأجزاء والملحقات  "}
        /> */}
        <br />
          <SwiperCards
            btns
            autoplay
            slidesPerView={3}
            items={[
              { image: "/pc/1.webp", name: "صدامات السيارات" },
              { image: "/pc/2.jpg", name: "الهوايات" },
              { image: "/pc/3.png", name: "النسافات" },
              { image: "/pc/4.webp", name: "مصابيح الانارة" },
              { image: "/pc/5.webp", name: "الهوايات" },
              { image: "/pc/6.jpeg", name: "لوحات" },
            ].map((item) => {
              return {
                card: (
                  <div className=" flex-col rounded-2xl items-center flex overflow-hidden bg-white">
                    <div className=" py-3 px-6 flex items-center flex-col gap-5">
                      <h3 className=" font-extrabold text-gray-700">{item.name}</h3>
                    </div>{" "}
                    <div className="  rounded-full  relative w-80 h-80  ">
                      <Image src={item.image} className=" object-contain object-center " alt="logo" fill />
                    </div>
                  </div>
                ),
              };
            })}
          />
        </MaxWidthWrapper>
     
      </div>
      <MaxWidthWrapper sectionId="services" className="flex flex-col gap-5 items-center  text-center">
        <Heading text="الموردين الرئيسيين" />
        <ParagraphWrite
          text={"نحن نؤمن بأهمية التعاون مع الموردين الرئيسيين لضمان تقديم منتجات عالية الجودة ومتفوقة"}
        />
        <MaxWidthWrapper>
          <GridContainer cols={4}>
            <div className="flex flex-col  items-center gap-3">
              <div className=" py-3 px-4 rounded-2xl w-52 h-52 relative">
                <Image src={"/SABIC_2093.png"} className=" object-contain " alt="logo" fill />
              </div>
              <Paragraph
                className=" text-center font-semibold"
                size="lg"
                description="SABIC"
              />
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className=" py-3 px-4 rounded-2xl w-52 h-52 relative">
                <Image src={"/LG-Symbol.jpg"} className=" object-contain " alt="logo" fill />
              </div>
              <Paragraph
                className=" text-center font-semibold"
                size="lg"
                description="LG KOREA"
              />
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className=" py-3 px-4 rounded-2xl w-52 h-52 relative">
                <Image src={"/Petro_Rabigh_-_Logo.svg.png"} className=" object-contain " alt="logo" fill />
              </div>
              <Paragraph
                className=" text-center font-semibold"
                size="lg"
                description="PETRO RABIGH"
              />
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className=" py-3 px-4 rounded-2xl w-52 h-52 relative">
                <Image src={"/1631339273981.jpeg"} className=" object-contain " alt="logo" fill />
              </div>
              <Paragraph
                className=" text-center font-semibold"
                size="lg"
                description="Qurin Petrochemical KUWAIT"
              />
            </div>
          </GridContainer>
        </MaxWidthWrapper>
      </MaxWidthWrapper> 
      <Contact/>
      <Footer />
    </main>
  );
}
    