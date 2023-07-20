import StatsCard from "./stats-card";
import Container from "../partials/container";

const appStats = [
  { metric: "100", suffix: "k", title: "App downloads" },
  { metric: "2", suffix: "k", title: "Book clubs created" },
  { metric: "30k", suffix: "+", title: "Active users" },
  { metric: "4.5", suffix: "+", title: "Average reviews" },
];

export default function AppStats() {
  return (
    <section className="mt-120px">
      <Container>
        <div className="grid grid-cols-1 gap-y-10 lg:grid-cols-2">
          <h2 className="place-self-center font-heading text-2xl text-secondary sm:text-heading-3 lg:text-left lg:text-5xl">
            Used and trusted by the book community
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {appStats.map((stat) => (
              <StatsCard
                key={stat.metric}
                metric={stat.metric}
                suffix={stat.suffix}
                title={stat.title}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
