import React from 'react';

const FAQ = () => {
  return (
    <div className='w-10/12 mx-auto my-24 bg-gray-800'>
      <section className=" text-gray-100">
        <div className="container flex flex-col justify-center items-center p-4 mx-auto md:p-8">
          <h1 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">Frequently Asked Questions</h1>
          <div className="grid gap-10 md:gap-8 sm:p-3 md:grid-cols-2 lg:px-12 xl:px-32">
            <div>
              <h3 className="font-semibold">How do I enroll in any course? </h3>
              <p className="mt-1 text-gray-400">You can visit our courses and the modules. But If you want to enroll, then go to course's details where you will find "Get Premium Access" option, through which you will redirect to the cart. There, Just Pay and the course will be yours.</p>
            </div>
            <div>
              <h3 className="font-semibold">Do you have any free courses?</h3>
              <p className="mt-1 text-gray-400">We offer world best courses. Although, the courses are not free, you will get some offers where cost is cut off from regular price. So, we suggest you to follow our website and blog to know the offers.</p>
            </div>
            <div>
              <h3 className="font-semibold">Is there any course that's conducted offline?</h3>
              <p className="mt-1 text-gray-400">Our Students are from all over the world, as well as our Instructors. So fare, we haven't get any complain about our online course because we try to keep updating our course's module and it's video all the time. Thus, we hope you will have better experience as always.</p>
            </div>
            <div>
              <h3 className="font-semibold">Do I get a certificate after completing any course?</h3>
              <p className="mt-1 text-gray-400">Yes, you will get a certificate after completing any courses but with different level of grading. The grading is depends on the performance in the assignment and quiz.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;