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

export default function Home() {
  return (
    <main className=" bg-gray-100 ">
      <FloatingNav navItems={NAV_ITEMS} />
      <MaxWidthWrapper className="flex min-h-screen items-center justify-center flex-col gap-2">
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
      </MaxWidthWrapper>
      <MaxWidthWrapper sectionId="about" className="flex flex-row-reverse gap-20  items-center justify-between">
        <StaggerList
          text="نبذة عن الشركة"
          list={[
            `يعتبر المصنع احد اكبر مصنعي قطع غيار السيارات في الشرق الاوسط .`,
            `متخصصة في صناعة قطع غيار هياكل السيارات وذلك حسب احتياج السوق السعودي والدول العربية المجاورة.`,
            `تأسست شركة المصنع السعودي لقطع غيار السيارات عام 1998م بمدينة الرياض وهي شركة ذات مسئولية محدودة وبراس مال
              4,500,00.00 ريال سعودي.`,
          ]}
        />

        <MotionItem initial={{ x: -300 }} whileInView={{ x: 0 }} nohover className="  rounded-xl h-64 w-1/2 relative">
          <Image src={"/image.png"} className=" object-cover rounded-full" alt="logo" fill />
        </MotionItem>
      </MaxWidthWrapper>
      <MaxWidthWrapper sectionId="services" className="flex flex-col gap-5 items-center  text-center">
        <h2 className=" font-bold text-blue-500 text-3xl lg:text-5xl ">أهداف الشركة</h2>
        <ParagraphWrite
          text={`تؤمن الشركة بأن النمو يأتي من خلال رضا العملاء وقد وضعنا أهدافنا لتوفير منتج ذي قيمة مضافة لعملائنا ، وتلبية  احتياجاتهم من خلال التركيز على "الجودة والتكنولوجيا والابتكار وخدمة العملاء"`}
        />
      </MaxWidthWrapper>
      <MaxWidthWrapper sectionId="products" className="flex flex-col gap-5 items-center">
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
      </MaxWidthWrapper>
      <MaxWidthWrapper sectionId="future" className="flex flex-col gap-5 items-center">
        <h2 className=" font-bold text-blue-500 text-3xl lg:text-5xl "> خطط المستقبل</h2>
        <StaggerList
          text="Business Strategy"
          list={[
            "Building a new extension factory.",
            "Setting up a new production line machinery.",
            "Establishing and developing Automotive Research & Testing Center. ",
          ]}
        />
      </MaxWidthWrapper>
    </main>
  );
}
