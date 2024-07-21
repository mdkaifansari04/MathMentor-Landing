import { Feature } from "@/types/feature";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: "/images/icon/icon-01.svg",
    title: "Category Features",
    description:
      "Create and manage book categories for organized and focused study sessions.",
    upcoming: false,
  },
  {
    id: 2,
    icon: "/images/icon/icon-02.svg",
    title: "Fastest AI Model",
    description:
      "Experience real-time responses with our cutting-edge AI technology.",
    upcoming: false,
  },
  {
    id: 3,
    icon: "/images/icon/icon-03.svg",
    title: "Interactive Graphing Tools",
    description:
      "Visualize functions and graphs easily to enhance your understanding.",
    upcoming: true,
  },
  {
    id: 4,
    icon: "/images/icon/icon-04.svg",
    title: "Step-by-Step Solutions",
    description:
      "Get detailed solutions for complex math problems to aid your learning process.",
    upcoming: true,
  },
  {
    id: 5,
    icon: "/images/icon/icon-05.svg",
    title: "Concept Explanations",
    description:
      "Understand mathematical concepts with clear and concise explanations.",
    upcoming: true,
  },
  {
    id: 6,
    icon: "/images/icon/icon-06.svg",
    title: "Save Conversations",
    description: "Save your chat history for future reference and review.",
    upcoming: true,
  },
];

export default featuresData;
