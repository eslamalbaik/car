import React from 'react'
import MaxWidthWrapper from "../components/defaults/MaxWidthWrapper";
import GridContainer from './GridContainer';
import Icon1 from './Icon1';
import Paragraph from './defaults/Paragraph';
import Icon2 from './Icon2';
import Icon3 from './Icon3';

const OurMission = () => {
  return (
    <div id='services' className='py-8'>
        <MaxWidthWrapper>
    <GridContainer cols={3}>
    <div className="flex flex-col items-center gap-3 bg-white rounded-lg shadow-sm p-4">
    <div className="flex flex-col gap-1 items-center">
          <h2 className=" lg:text-4xl font-bold text-2xl text-[#01A101]">الرؤية </h2>
       <br />
          <Icon1 />
        </div>
        <Paragraph
          className=" text-center font-semibold"
          size="lg"
          description="أن نكون روادًا عالميين في مجال التصنيع حسب الطلب، مستفيدين من تقنيات الطباعة ثلاثية الأبعاد، والتصنيع الإضافي، وتقنيات CNC لتقديم جودة استثنائية، وحلول مبتكرة، وممارسات مستدامة."
        />
      </div>{" "}
      <div className="flex flex-col items-center gap-3 bg-white rounded-lg shadow-sm p-4">
        <div className="flex flex-col gap-1 items-center">
          {/* <h3 className=" lg:text-2xl text-xl italic">OUR</h3> */}
          <h2 className=" lg:text-4xl font-bold text-2xl text-[#01A101]">الرسالة</h2>
        </div>
        <br />
        <Icon3 />
        <Paragraph
          className=" text-center font-semibold"
          size="lg"
          description="أن نقدم حلول تصنيع مبتكرة ومخصصة حسب الطلب، باستخدام أحدث التقنيات    لتلبية احتياجات العملاء في قطاعات متعددة ."
        />
      </div>{" "}
      <div className="flex flex-col items-center gap-3 bg-white rounded-lg shadow-sm p-4">
        <div className="flex flex-col gap-1 items-center">
          {/* <h3 className=" lg:text-2xl text-xl italic">OUR</h3> */}
          <h2 className=" lg:text-4xl font-bold text-2xl text-[#01A101]">الهدف</h2>
          <br />
        </div>
        <Icon2 />
        <Paragraph
          className=" text-center font-semibold"
          size="lg"
          description="تقديم حلول تصنيع حسب الطلب عالية المستوى عبر قطاعات متنوعة تشمل السيارات، والطيران، والدفاع، والصناعات الثقيلة، والقطاع الطبي، والهندسة المعمارية  ."
        />
      </div>
    </GridContainer>
  </MaxWidthWrapper>
  </div>
  )
}

export default OurMission