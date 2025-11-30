// lib/data/buildingdata.ts
import GridImage_1 from '@/app/assets/images/img5-600x600.jpg'
import GridImage_2 from '@/app/assets/images/img4-600x600.jpg'
import GridImage_3 from '@/app/assets/images/img12-600x600.jpg'
import GridImage_4 from '@/app/assets/images/img13-600x600.jpg'
import GridImage_5 from '@/app/assets/images/img6-600x600.jpg'
import GridImage_6 from '@/app/assets/images/img14-600x600.jpg'

export const buildingData = [
  {
    id: "apex-tower",
    title: "Apex Tower",
    image: GridImage_1,
    link: "/buildingProjects/apex-tower",
    description: "A modern commercial tower featuring glass facades, spacious interiors, and energy-efficient design."
  },
  {
    id: "crystal-heights",
    title: "Crystal Heights",
    image: GridImage_2,
    link: "/buildingProjects/crystal-heights",
    description: "Luxury residential complex with panoramic city views, contemporary styling, and premium amenities."
  },
  {
    id: "skyline-plaza",
    title: "Skyline Plaza",
    image: GridImage_3,
    link: "/buildingProjects/skyline-plaza",
    description: "A mixed-use development with retail, office, and residential spaces integrated into the urban skyline."
  },
  {
    id: "urban-glass-center",
    title: "Urban Glass Center",
    image: GridImage_4,
    link: "/buildingProjects/urban-glass-center",
    description: "Innovative office building with a striking glass exterior and flexible interior layouts for modern businesses."
  },
  {
    id: "metro-complex",
    title: "Metro Complex",
    image: GridImage_5,
    link: "/buildingProjects/metro-complex",
    description: "A high-rise commercial complex designed for efficiency, sustainability, and urban connectivity."
  },
  {
    id: "steel-city-block",
    title: "Steel City Block",
    image: GridImage_6,
    link: "/buildingProjects/steel-city-block",
    description: "An industrial-inspired mixed-use development combining offices, retail, and urban living spaces."
  },
];




export const generateProjectMetadata = async (projectId: string) => {
  const project = buildingData.find((p) => p.id === projectId);

  if (!project) {
    return {
      title: "Project Not Found | Building Projects",
      description: "The selected architectural project does not exist or may have been removed.",
      alternates: {
        canonical: "/buildingProjects"
      }
    };
  }

  return {
    title: `${project.title} | Architectural Project`,
    description: project.description,
    alternates: {
      canonical: project.link,
    },
    openGraph: {
      title: `${project.title} | Architectural Project`,
      description: project.description,
      url: project.link,
      images: [
        {
          url: project.image.src,
          width: 1200,
          height: 800,
          alt: project.title,
        }
      ],
      type: "article",
    },
  };
};
