import service1 from "@/app/assets/images/secvice-1.png"
import service2 from "@/app/assets/images/secvice-2.png";
import service3 from "@/app/assets/images/secvice-3.png";

export interface ServiceType {
  id: number;
  title: string;
  description: string;
  image: any;
}

export const services: ServiceType[] = [
  {
    id: 1,
    title: "Lifestyle Design",
    description:
      "As public spaces, lifestyle environments are a powerful and evocative expression of our clients’ brand.",
    image: service1,
  },
  {
    id: 2,
    title: "Expert Architects",
    description:
      "As expressions of today’s modern lifestyle, our residential interiors reflect our clients’ tastes and priorities.",
    image: service2,
  },
  {
    id: 3,
    title: "Modern Architectures",
    description:
      "First impressions count. From the display windows that capture your attention as you walk by.",
    image: service3,
  },
];
