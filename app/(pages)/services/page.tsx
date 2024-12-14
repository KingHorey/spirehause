import PageHeader from "@/app/ui/page-headers";
import LeftTextContainer from "@/app/ui/text-left-flexContainer";
import RightTextContainer from "@/app/ui/text-right-flexContainer";

const Page = () => {
  return (
    <main className="space-y-5 mb-20 py-20">
      <PageHeader
        text="Services"
        details="We don’t just offer these services, we deliver greatly"
      />
      <div className="space-y-20">
        <LeftTextContainer
          image="/Services Image container.png"
          text={
            <>
              <h2 className="font-semibold text-xl">
                Corporate Architecture Design
              </h2>
              <p>
                Transform your business environment with cutting-edge
                architectural solutions tailored to your organizational culture.
                We create dynamic workspaces that enhance productivity, foster
                collaboration, and reflect your brand&apos;s unique identity
                through innovative spatial design.
              </p>
            </>
          }
        />
        <RightTextContainer
          image="/Services Image container(1).png"
          text={
            <>
              <h2 className="font-semibold text-xl">
                Strategic Workplace Consulting
              </h2>
              <p>
                Beyond design, we provide comprehensive workplace strategy
                consulting. Our experts analyze your organizational workflows,
                technological needs, and future growth projections to develop
                architectural solutions that adapt and evolve with your
                business.
              </p>
            </>
          }
        />
        <LeftTextContainer
          image="/Services Image container(2).png"
          text={
            <>
              <h2 className="font-semibold text-xl">
                Sustainable Design & Technology Integration
              </h2>
              <p>
                Pioneering eco-friendly and technologically advanced
                architectural solutions. We specialize in creating buildings
                that minimize environmental impact while maximizing
                technological efficiency, integrating smart systems,
                energy-efficient technologies, and sustainable materials..
              </p>
            </>
          }
        />
        <RightTextContainer
          image="/Services Image container(3).png"
          text={
            <>
              <h2 className="font-semibold text-xl">
                Adaptive Reuse & Renovation
              </h2>
              <p>
                Reimagine existing spaces with our adaptive reuse expertise. We
                transform outdated structures into modern, functional
                environments, breathing new life into architectural assets while
                preserving historical significance and reducing construction
                waste.
              </p>
            </>
          }
        />
      </div>
    </main>
  );
};

export default Page;
