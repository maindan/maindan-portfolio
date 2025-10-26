import { Card } from "@heroui/card";
import { motion } from "framer-motion";
type PageTitle = { title: string; subtitle: string };
export default function PageTitle({ title, subtitle }: PageTitle) {
  // @ts-ignore
  const MotionCard = motion(Card);

  return (
    <div className="inline-block max-w-lg text-center justify-center">
      {" "}
      <MotionCard
        animate={{ y: 0, opacity: 1 }}
        className="bg-transparent shadow-none z-10"
        initial={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.2, delay: 0.2 }}
      >
        {" "}
        <p className="text-md font-normal">{subtitle}</p>{" "}
      </MotionCard>{" "}
      <MotionCard
        animate={{ y: 0, opacity: 1 }}
        className="bg-transparent shadow-none mt-4 z-10"
        initial={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.2, delay: 0.6 }}
      >
        {" "}
        <h2 className="text-6xl font-normal uppercase text-shadow-md">
          {title}
        </h2>{" "}
      </MotionCard>{" "}
    </div>
  );
}
