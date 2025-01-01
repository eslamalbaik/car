import { AnimatedTestimonials } from "./ui/animated-testimonials";

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote: `تبلغ انتاجية المصنع القصوى 120،000 صدام خلال السنة
وتم انتاج ما يقارب 85،000 صدام خلال عام 2022.`,
      name: "صدامات السيارات",
      designation: "Bumpers",
      src: "/Picture1.png",
    },
    {
      quote: `الهوايات وهي الحاجز البلاستيك الذي يساعد في توجيه
الهواء لمراوح التبريد. وتبلغ طاقة المصنع الانتاجية خلال
 السنة حوالي 150،000 حبة.`,
      name: "الهوايات",
      designation: "Fan Shroud",
      src: "/Picture3.jpg",
    },
    {
      quote: `النسافات وهي القطعة البلاستكية الحامية لهيكل
السيارات.. وتبلغ الطاقة الانتاجية ما يقارب 250،00 حبة
سنوياً.. وتصنع من مادة البولي بروبلين الخالص.
.`,
      name: "النسافات",
      designation: "Mud Guards",
      src: "/Picture5.png",
    },
    {
      quote: `مصابيح الإضاءة الخلفية وتبلغ طاقة المصنع الانتاجية
ما يقارب 40،000 حبة سنوياً. ويتم تصنيعها من مادة
الإكرليك المعالج ومادة البولي ستارين.
.`,
      name: " مصابيح الاناره",
      designation: "Lens",
      src: "/Picture6.jpg",
    },
    {
      quote: `مراوح التبريد وتبلغ طاقة المصنع من الانتاج ما يقارب
200،000 حبة في السنة. 
وتستخدم مادة البولي بروبلين المعالج مع مادة القلاس فيلد
`,
      name: "المراوح",
      designation: "Fans",
      src: "/Picture4.jpg",
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
