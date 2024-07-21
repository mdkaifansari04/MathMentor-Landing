import image1 from "@/public/images/user/user-01.png";
import image2 from "@/public/images/user/user-02.png";
import { Testimonial } from "@/types/testimonial";

export const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Alice Johnson",
    image: image1,
    content:
      "MathMentor has been a game-changer for my math studies. The step-by-step solutions and interactive tools have made learning much easier and more enjoyable.",
  },
  {
    id: 2,
    name: "Brian Lee",
    image: image2,
    content:
      "The personalized learning experience provided by MathMentor is fantastic. It adapts to my needs and helps me understand complex concepts quickly.",
  },
  {
    id: 3,
    name: "Sophia Martinez",
    image: image1,
    content:
      "I love the real-time problem-solving features of MathMentor. It’s like having a tutor available 24/7 to help me with any math challenge.",
  },
  {
    id: 4,
    name: "Daniel Kim",
    image: image2,
    content:
      "MathMentor’s interactive graphs and detailed explanations have significantly improved my understanding of mathematics. Highly recommend it for anyone serious about learning math.",
  },
];
