import Container from "@/partials/general-ui/container";
import { AppLayout } from "@/layouts";
import Accordion from "@/components/partials/accordion";
import { FAQs } from "@/components/data";

export default function FAQS() {
  return (
    <section className="mt-20">
      <AppLayout title="Frequently Asked Questions">
        <Container>
          <div className="mb-24 flex flex-col items-center justify-center gap-y-6 lg:mb-28">
            <h2 className="headingTwo text-center">
              Frequently asked questions
            </h2>
          </div>

          <div className="mt-20 space-y-10 ">
            <div className="grid items-baseline justify-center space-y-10 lg:grid-cols-2">
              {FAQs.map((item) => (
                <Accordion key={item.id} title={item.title} body={item.body} />
              ))}
            </div>
          </div>
        </Container>
      </AppLayout>
    </section>
  );
}
