import ButtonToListTopic from "@/components/home-page/button-list-topic";
import ListTopics from "@/components/home-page/list-topicts";
import { Icons } from "@/components/ui/icons";
import Section from "@/components/ui/section";

export default function Home() {
  return (
    <Section className="relative h-screen w-full grid p-0 pb-0 gap-0 sm:p-0 overflow-x-hidden">
      <div className="h-screen flex items-center justify-center">
        <div className="relative inset-0 z-10 flex items-center justify-center flex-col gap-3">
          <h1 className="text-5xl text-center sm:text-left font-bold">
            Welcome to React-Workshop
          </h1>
          <p className="text-lg w-2/3 text-center">
            Welcome to the React Workshop project! This project is designed to
            guide you through the best practices and patterns for working with
            React
          </p>
          <ButtonToListTopic />
        </div>
        <div className="absolute inset-0 bg-[#f6f7f2] overflow-hidden">
          <div className="w-72 h-72 bg-[#efbc25] absolute -top-52 left-56 rounded-lg animate-[wiggle_60s_linear_infinite]"></div>
          <div className="w-72 h-80 bg-[#ddddd5] absolute -top-44 -right-20 rounded-lg animate-[wiggle_60s_linear_infinite]"></div>
          <div className="w-80 h-96 bg-[#e63e29] absolute -bottom-44 -right-20 rounded-lg animate-[wiggle_60s_linear_infinite]"></div>
          <div className="w-72 h-72 bg-[#1e1e1e] absolute -bottom-52 -left-16 rounded-lg animate-[wiggle_60s_linear_infinite]"></div>
          <div className="w-80 h-96 bg-[#e96623] absolute top-1/4 -left-48 rounded-lg animate-[wiggle_60s_linear_infinite]"></div>
        </div>
      </div>
      <div className="w-full px-5 min-h-screen relative" id="topic-list">
        <p className="font-semibold text-3xl text-center my-7">
          List of topics that will be covered in this workshop:
        </p>
        <ListTopics />
        <Icons.listTopics1 />
        <Icons.listTopics2 />
      </div>
    </Section>
  );
}
