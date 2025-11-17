import user1 from "@/app/assets/images/q2.jpg";
import user2 from "@/app/assets/images/q6.jpg";
import user3 from "@/app/assets/images/q8.jpg";

export interface TestimonialType {
  id: number;
  name: string;
  role: string;
  message: string;
  image: any;
}

export const testimonials: TestimonialType[] = [
  {
    id: 1,
    name: "Damian Milner",
    role: "Customer From New York",
    message:
      "Five stars for these people. They really are experts of this work and did their best to make something spectacular.",
    image: user1,
  },
  {
    id: 2,
    name: "Sarah Temple",
    role: "Building Owner",
    message:
      "They delivered exactly what we wanted and even exceeded our expectations. Excellent service!",
    image: user2,
  },
  {
    id: 3,
    name: "Michael Turner",
    role: "Real Estate Investor",
    message:
      "Professional, fast, and highly skilled. I would recommend them anytime.",
    image: user3,
  },
];






