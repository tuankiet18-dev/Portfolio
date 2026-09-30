import SlicedText from "./SlicedText";

export default function Hero() {
  return (
    <section id="hero" className="page-start surface-light">
      <div>
        {/* Intro Row: Photo on Left + Sliced Title on Right */}
        <div className="about-hero__intro">
          <div className="about-hero__photo">
            <img
              src="/images/avatar.jpg"
              alt="Luong Tuan Kiet"
            />
          </div>

          <h1 className="about-hero__title">
            <span className="block">
              <SlicedText text="HI, I’M" delayOffset={0} />
            </span>
            <span className="block">
              <SlicedText text="TUAN KIET" delayOffset={180} />
            </span>
          </h1>
        </div>

        {/* Summary Row: ME Tag on Left + Paragraph on Right */}
        <div className="about-hero__summary">
          <div>
            <span className="about-hero__label">ME</span>
          </div>
          <div className="about-hero__copy">
            <p>
              I’m a final-year Software Engineering student focused on backend development with C#/.NET and cloud-native architecture on AWS.
            </p>
            <p>
              I like building systems where correctness and throughput both matter — event-driven pipelines, idempotent processing, and APIs that stay fast under real load. My recent work includes a serverless exam platform load-tested at p95 &lt; 175ms under 200 concurrent users, and an event-driven invoice pipeline processing documents through S3, SQS, and ECS Fargate.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
