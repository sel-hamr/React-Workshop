import ListTopics from "@/components/home-page/list-topicts";
import Section from "@/components/ui/section";

export default function Home() {
  return (
    <Section>
      <h1 className="text-7xl text-center sm:text-left font-bold">
        Welcome to React-Workshop
      </h1>
      <p className="text-lg">
        Welcome to the React Workshop project! This project is designed to guide
        you through the best practices and patterns for working with React, a
        popular JavaScript library for building user interfaces.
      </p>
      <p className="font-semibold text-2xl underline">
        List of topics that will be covered in this workshop:
      </p>
      <ListTopics />
    </Section>
  );
}
