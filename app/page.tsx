import Image from "next/image";
import { FloatingNav } from "./components/NavBar";
import { NAV_ITEMS } from "./constants";
import MaxWidthWrapper from "./components/defaults/MaxWidthWrapper";
import TextReveal from "./components/TextReveal";
import MotionItem from "./components/defaults/MotionItem";
import StaggerList from "./components/StaggerList";
import ParagraphWrite from "./components/ParagraphWrite";
import { AnimatedTestimonialsDemo } from "./components/AnimatedTestimonials";
import SwiperCards from "./components/defaults/SwiperCards";
import Paragraph from "./components/defaults/Paragraph";
import GridContainer from "./components/GridContainer";
import Icon1 from "./components/Icon1";
import Heading from "./components/defaults/Heading";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className=" bg-white ">
      <FloatingNav navItems={NAV_ITEMS} />
      {/* <Nav/> */}
      <div className=" mt-32 w-full h-[80vh] relative">
        <video src="/video.mp4" loop muted autoPlay className=" w-full absolute inset-0 h-full object-cover" />
      </div>
      {/* <MaxWidthWrapper sectionId="products" className="flex flex-col gap-5 items-center">
        <h2 className=" font-bold text-blue-500 text-3xl lg:text-5xl "> المنتجات</h2>
        <AnimatedTestimonialsDemo />
      </MaxWidthWrapper> */}
      {/* <MaxWidthWrapper className="flex min-h-screen items-center justify-center flex-col gap-2">
        <TextReveal text="Auto Parts Body" />
        <MotionItem
          nohover
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 }, delay: 0.5 }}
          className=" text-muted-foreground text-center text-base lg:text-xl"
        >
          شركة المصنع السعودي لقطع غيار السيارات
        </MotionItem>
        <MotionItem
          nohover
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 }, delay: 1 }}
          className=" w-full h-52 relative my-5"
        >
          <Image src="/car.jpg" className=" object-cover rounded-full" alt="logo" fill />
        </MotionItem>
      </MaxWidthWrapper> */}
      <div className=" bg-gray-50">
        <MaxWidthWrapper sectionId="about" className="flex flex-row-reverse gap-20  items-center justify-between">
          <div className="flex flex-col items-start gap-4">
            <StaggerList
              text="من <b>نحن ؟"
              list={[
                `يعتبر المصنع احد اكبر مصنعي قطع غيار السيارات في الشرق الاوسط .`,
                `متخصصة في صناعة قطع غيار هياكل السيارات وذلك حسب احتياج السوق السعودي والدول العربية المجاورة.`,
                `تأسست شركة المصنع السعودي لقطع غيار السيارات عام 1998م بمدينة الرياض وهي شركة ذات مسئولية محدودة وبراس مال
              4,500,00.00 ريال سعودي.`,
              ]}
            >
              <Paragraph
                size="lg"
                className=" ml-auto text-2xl lg:text-4xl"
                description="بوادر الثقة الدولية المحدودة"
              />
            </StaggerList>
            <button className=" ml-auto rounded-2xl w-fit py-2 px-4 bg-orange-400 text-white" href="/contact-us">
              تواصل معنا
            </button>
          </div>

          <MotionItem
            initial={{ x: -300 }}
            whileInView={{ x: 0 }}
            nohover
            className="  rounded-2xl overflow-hidden h-64 w-1/2 relative"
          >
            <Image src={"/Picture2-1.png"} className=" object-cover " alt="logo" fill />
          </MotionItem>
        </MaxWidthWrapper>
        <MaxWidthWrapper>
          <GridContainer cols={3}>
            <div className="flex flex-col items-center gap-3">
              <div className="flex flex-col gap-1 items-center">
                <h3 className=" lg:text-2xl text-xl italic">OUR</h3>
                <h2 className=" lg:text-4xl font-bold text-2xl">MISION</h2>
              </div>
              <Icon1 />
              <Paragraph
                className=" text-center font-semibold"
                size="lg"
                description="To enhance its ability to provide high-quality solutions in the domestic aftermarket services market through strategic plans and a wide range of product offerings."
              />
            </div>{" "}
            <div className="flex flex-col items-center gap-3">
              <div className="flex flex-col gap-1 items-center">
                <h3 className=" lg:text-2xl text-xl italic">OUR</h3>
                <h2 className=" lg:text-4xl font-bold text-2xl">MISION</h2>
              </div>
              <Icon1 />
              <Paragraph
                className=" text-center font-semibold"
                size="lg"
                description="To enhance its ability to provide high-quality solutions in the domestic aftermarket services market through strategic plans and a wide range of product offerings."
              />
            </div>{" "}
            <div className="flex flex-col items-center gap-3">
              <div className="flex flex-col gap-1 items-center">
                <h3 className=" lg:text-2xl text-xl italic">OUR</h3>
                <h2 className=" lg:text-4xl font-bold text-2xl">MISION</h2>
              </div>
              <Icon1 />
              <Paragraph
                className=" text-center font-semibold"
                size="lg"
                description="To enhance its ability to provide high-quality solutions in the domestic aftermarket services market through strategic plans and a wide range of product offerings."
              />
            </div>
          </GridContainer>
        </MaxWidthWrapper>
      </div>

      <MaxWidthWrapper sectionId="services" className="flex flex-col gap-5 items-center  text-center">
        <Heading text="الشهادات" />
        <ParagraphWrite
          text={`تؤمن الشركة بأن النمو يأتي من خلال رضا العملاء وقد وضعنا أهدافنا لتوفير منتج ذي قيمة مضافة لعملائنا ، وتلبية  احتياجاتهم من خلال التركيز على "الجودة والتكنولوجيا والابتكار وخدمة العملاء"`}
        />{" "}
        <MaxWidthWrapper>
          <GridContainer cols={3}>
            <div className="flex flex-col items-center gap-3">
              <div className="flex flex-col gap-1 items-center">
                <h3 className=" lg:text-2xl text-xl italic">OUR</h3>
                <h2 className=" lg:text-4xl font-bold text-2xl">MISION</h2>
              </div>
              <div className=" bg-gray-700 py-3 px-4 rounded-2xl w-52 h-52 relative">
                <Image src={"/Vectordsw.svg"} className=" object-contain " alt="logo" fill />
              </div>
              <Paragraph
                className=" text-center font-semibold"
                size="lg"
                description="To enhance its ability to provide high-quality solutions in the domestic aftermarket services market through strategic plans and a wide range of product offerings."
              />
            </div>{" "}
            <div className="flex flex-col items-center gap-3">
              <div className="flex flex-col gap-1 items-center">
                <h3 className=" lg:text-2xl text-xl italic">OUR</h3>
                <h2 className=" lg:text-4xl font-bold text-2xl">MISION</h2>
              </div>
              <div className=" bg-gray-700 py-3 px-4 rounded-2xl w-52 h-52 relative">
                <Image src={"/Vectordsw.svg"} className=" object-contain " alt="logo" fill />
              </div>
              <Paragraph
                className=" text-center font-semibold"
                size="lg"
                description="To enhance its ability to provide high-quality solutions in the domestic aftermarket services market through strategic plans and a wide range of product offerings."
              />
            </div>{" "}
            <div className="flex flex-col items-center gap-3">
              <div className="flex flex-col gap-1 items-center">
                <h3 className=" lg:text-2xl text-xl italic">OUR</h3>
                <h2 className=" lg:text-4xl font-bold text-2xl">MISION</h2>
              </div>
              <div className=" bg-gray-700 py-3 px-4 rounded-2xl w-52 h-52 relative">
                <Image src={"/Vectordsw.svg"} className=" object-contain " alt="logo" fill />
              </div>
              <Paragraph
                className=" text-center font-semibold"
                size="lg"
                description="To enhance its ability to provide high-quality solutions in the domestic aftermarket services market through strategic plans and a wide range of product offerings."
              />
            </div>
          </GridContainer>
        </MaxWidthWrapper>
      </MaxWidthWrapper>
      <div className=" bg-gray-50">
        <MaxWidthWrapper className="flex  overflow-hidden  items-center flex-col gap-4">
          {" "}
          <Heading text="DENSO " />
          <MaxWidthWrapper sectionId="about" className="flex flex-col lg:flex-row-reverse gap-20  items-center justify-between">
            <MotionItem
              initial={{ x: 300 }}
              whileInView={{ x: 0 }}
              nohover
              className="  rounded-2xl overflow-hidden h-80 w-full lg:w-1/2 relative"
            >
              <Image src={"/denso-img.png "} className=" object-cover " alt="logo" fill />
            </MotionItem>
            <div className="flex flex-col items-start gap-4">
              <h2 className=" lg:text-5xl text-3xl  text-gray-600 flex items-center">
                Why <b className="  text-orange-600 m-1 font-extrabold">DENSO?</b>
              </h2>
              <Paragraph
                size="sm"
                className=" ml-auto text-sm"
                description="DENSO primarily aims to excel in the automotive parts industry, whether by supplying original equipment manufacturers (OEM) around the world or by developing aftermarket parts with competitive standard specifications. Quality and reliability have always been the foundation of the DENSO brand, so you can always rely on genuine DENSO parts."
              />
            </div>
          </MaxWidthWrapper>
          <MaxWidthWrapper sectionId="about" className="flex flex-col lg:flex-row-reverse gap-20  items-center justify-between">
            <div className="flex flex-col items-start gap-4">
              <h2 className=" lg:text-5xl text-3xl  text-gray-600 flex items-center">
                Why <b className="  text-orange-600 m-1 font-extrabold">DENSO?</b>
              </h2>
              <Paragraph
                size="sm"
                className=" ml-auto text-sm"
                description="DENSO primarily aims to excel in the automotive parts industry, whether by supplying original equipment manufacturers (OEM) around the world or by developing aftermarket parts with competitive standard specifications. Quality and reliability have always been the foundation of the DENSO brand, so you can always rely on genuine DENSO parts."
              />
            </div>
            <MotionItem
              initial={{ x: -300 }}
              whileInView={{ x: 0 }}
              nohover
              className="  rounded-2xl overflow-hidden h-80 w-full lg:w-1/2 relative"
            >
              <Image src={"/DENSO-horizontal-family-1.png"} className=" object-cover " alt="logo" fill />
            </MotionItem>
          </MaxWidthWrapper>
          <SwiperCards
            btns
            autoplay
            slidesPerView={3}
            items={[
              { image: "/Ignition-Wires-web.png", name: "SABIC KSA" },
              { image: "/Ignition-Wires-web.png", name: "SABIC EUROPE" },
              { image: "/Ignition-Wires-web.png", name: "SABIC EUROPE" },
              { image: "/Ignition-Wires-web.png", name: "SABIC EUROPE" },
            ].map((item) => {
              return {
                card: (
                  <div className=" flex-col rounded-2xl items-center flex overflow-hidden bg-white">
                    <div className=" py-3 px-6 flex items-center flex-col gap-5">
                      <h3 className=" font-extrabold text-gray-700">{item.name}</h3>
                    </div>{" "}
                    <div className="  rounded-full bg-gray-300 relative w-80 h-80  ">
                      <Image src={item.image} className=" object-contain object-center " alt="logo" fill />
                    </div>
                  </div>
                ),
              };
            })}
          />
        </MaxWidthWrapper>
        <div
          style={{
            backgroundImage: `url("/denso-quality.jpg")`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
          className="special h-96 relative w-full"
        >
          <MaxWidthWrapper>
            <div className=" z-30 px-20 py-20 flex  flex-wrap justify-center gap-10 absolute">
              <div className=" w-32 h-32 relative">
                <Image src={"/banner-map.svg"} className=" object-contain object-center " alt="logo" fill />
              </div>
              <div className="flex flex-col items-start ">
                {" "}
                <h2 className=" text-2xl lg:text-6xl  font-extrabold text-white">DENSO</h2>
                <h3 className=" text-2xl lg:text-7xl font-thin text-gray-200 ">SERVICE</h3>
              </div>
              <Paragraph
                className=" lg:block hidden  max-w-md text-xl lg:text-2xl text-white font-semibold"
                description="We have a DENSO trained Service Network equipped with DENSO special tools & equipment’s to ensure quality of repair using DENSO genuine spares.
"
              />
            </div>
          </MaxWidthWrapper>
        </div>
        <MaxWidthWrapper className="flex flex-col items-center">
          <Heading text="BRANDS" />
          <div className=" grid gap-5 lg:grid-cols-2 grid-cols-1 mt-10" >
            <div className="flex flex-col  items-center py-10 px-20 bg-gray-200 border-2 border-t-blue-500">
              <div className=" lg:w-96 lg:h-96 w-64 h-64 relative">
                <Image src={"/Suspensionpartsj.png"} className=" object-contain object-center " alt="logo" fill />
              </div>
              <h2 className=" font-bold text-4xl text-black">DENSO</h2>
              <Paragraph
                className=" text-center"
                description="DENSO primarily aims to excel in the automotive parts industry, whether by supplying original equipment manufacturers (OEM) around the world or by developing aftermarket parts."
              />
            </div>
            <div className="flex flex-col  items-center py-10 px-20 bg-gray-200 border-2 border-t-blue-500">
              <div className=" lg:w-96 lg:h-96 w-64 h-64 relative">
                <Image src={"/Suspensionpartsj.png"} className=" object-contain object-center " alt="logo" fill />
              </div>
              <h2 className=" font-bold text-4xl text-black">DENSO</h2>
              <Paragraph
                className=" text-center"
                description="DENSO primarily aims to excel in the automotive parts industry, whether by supplying original equipment manufacturers (OEM) around the world or by developing aftermarket parts."
              />
            </div>
            <div className="flex flex-col  items-center py-10 px-20 bg-gray-200 border-2 border-t-blue-500">
              <div className=" lg:w-96 lg:h-96 w-64 h-64 relative">
                <Image src={"/Suspensionpartsj.png"} className=" object-contain object-center " alt="logo" fill />
              </div>
              <h2 className=" font-bold text-4xl text-black">DENSO</h2>
              <Paragraph
                className=" text-center"
                description="DENSO primarily aims to excel in the automotive parts industry, whether by supplying original equipment manufacturers (OEM) around the world or by developing aftermarket parts."
              />
            </div>
            <div className="flex flex-col  items-center py-10 px-20 bg-gray-200 border-2 border-t-blue-500">
              <div className=" lg:w-96 lg:h-96 w-64 h-64 relative">
                <Image src={"/Suspensionpartsj.png"} className=" object-contain object-center " alt="logo" fill />
              </div>
              <h2 className=" font-bold text-4xl text-black">DENSO</h2>
              <Paragraph
                className=" text-center"
                description="DENSO primarily aims to excel in the automotive parts industry, whether by supplying original equipment manufacturers (OEM) around the world or by developing aftermarket parts."
              />
            </div>
            <div className="flex flex-col  items-center py-10 px-20 bg-gray-200 border-2 border-t-blue-500">
              <div className=" lg:w-96 lg:h-96 w-64 h-64 relative">
                <Image src={"/Suspensionpartsj.png"} className=" object-contain object-center " alt="logo" fill />
              </div>
              <h2 className=" font-bold text-4xl text-black">DENSO</h2>
              <Paragraph
                className=" text-center"
                description="DENSO primarily aims to excel in the automotive parts industry, whether by supplying original equipment manufacturers (OEM) around the world or by developing aftermarket parts."
              />
            </div>
          </div>
        </MaxWidthWrapper>
      </div>
      <Footer />
    </main>
  );
}
/* <MaxWidthWrapper sectionId="products" className="flex flex-col gap-5 items-center">
        <h2 className=" font-bold text-blue-500 text-3xl lg:text-5xl "> المنتجات</h2>
        <AnimatedTestimonialsDemo />
      </MaxWidthWrapper>
      <MaxWidthWrapper sectionId="help" className="flex flex-col gap-5 items-center">
        <h2 className=" font-bold text-blue-500 text-3xl lg:text-5xl  my-6"> الداعمين</h2>
        <SwiperCards
          autoplay
          items={[
            { image: "/Picture8.jpg", name: "SABIC KSA" },
            { image: "/Picture9.jpg", name: "SABIC EUROPE" },
            { image: "/Picture9.jpg", name: "SABIC EUROPE" },
            { image: "/Picture9.jpg", name: "SABIC EUROPE" },
          ].map((item) => {
            return {
              card: (
                <div className=" flex-col rounded-2xl items-center overflow-hidden bg-white">
                  <div className=" w-full relative h-52 ">
                    <Image src={item.image} className=" object-cover " alt="logo" fill />
                  </div>
                  <div className=" py-3 px-6 flex items-center flex-col gap-2">
                    <h3>{item.name}</h3>
                  </div>
                </div>
              ),
            };
          })}
        />
      </MaxWidthWrapper> */
