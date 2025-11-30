import { buildingData } from "@/lib/data/buildingdata";
import Image from "next/image";

interface PageProps {
  params:
    Promise<{projectId:string}>
  
}


export default async function ProjectDetailPage({ params }: PageProps) {
  const { projectId } = await params;

  // Convert URL slug back to actual project
  const project = buildingData.find(
    (item) => item.link.split("/").pop() === projectId
  );

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-3xl font-bold text-red-600">Project Not Found</h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Title */}
      <h1 className="text-4xl lg:text-5xl font-bold text-secondary mb-8">
        {project.title}
      </h1>

      {/* Image */}
      <div className="w-full h-[350px] lg:h-[500px] relative rounded-xl overflow-hidden shadow-lg">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Description */}
      <div className="mt-10 text-lg leading-relaxed text-gray-700">
        {project.description ? (
          <p>{project.description}</p>
        ) : (
          <p>
            This project showcases our expertise in modern architectural design,
            combining innovation with functionality.
          </p>
        )}
      </div>
    </div>
  );
}
