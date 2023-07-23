import Container from "./Container";
import FAQQuestion from "./FAQQuestion";

const FAQ = function () {
  return (
    <Container>
      <h2 className="mt-16 text-2xl text-center mb-8">
        Frequently Asked Questions
      </h2>
      <div className="flex mb-16 items-center gap-4 w-[100%] md:w-[100%] flex-col mx-auto">
        <FAQQuestion
          question="Can I use your designs for commercial use?"
          answer="Absolutely. Subscribers of our paid plan receive a commercial use license, which grants them the right to use our designs for commercial purposes."
        />
        <FAQQuestion
          question="Which formats are your designs available in?"
          answer="All our design templates are available in Figma format, making it easy to edit and tailor them to your specific needs using Figma's powerful design tools."
        />
        <FAQQuestion
          question="How frequently can I expect to see new designs?"
          answer="We believe in keeping our design collection fresh and diverse. As such, we add new design templates to our library on a weekly basis. You can sign up to your weekly newsletter and get notified when we release new designs!"
        />
        <FAQQuestion
          question="Is is possible to request custom-made designs?"
          answer="Yes. Subscribers of our paid plan are welcome to requests custom designs. We believe this collaborative process helps us provide designs that cater to a wider range of use-cases and aesthetic preferences."
        />
        <FAQQuestion
          question="Do you offer a free-trial?"
          answer="Absolutely. We offer a 3-day free trial to all new users. Simply provide your email to get started and explore our design collection."
        />
        <FAQQuestion
          question="Can I cancel my subscription anytime?"
          answer="Yes, we have a no-strings-attached policy. You are free to cancel your subscription at any time. However, your subscription will remain active until the end of the current billing cycle."
        />
      </div>
    </Container>
  );
};

//  EasyDesign.io is an online platform that provides access to a curated collection of high-quality design templates, all created with utmost care by seasoned designers. Our mission is to enable designers and developers to swiftly deploy unique, responsive, and aesthetically pleasing designs for their projects.
export default FAQ;
