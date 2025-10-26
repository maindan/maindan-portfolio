import { useEffect, useState } from "react";
import { Card, CardBody } from "@heroui/card";
import { motion } from "framer-motion";

import PageTitle from "@/components/page-title";
import ProjectCard from "@/components/project-card";
import DefaultLayout from "@/layouts/default";

type Project = {
  title: string;
  img: string;
  description: string;
  tags: string[];
  link?: string;
  repository: string;
  features?: string[];
  status?: "concluído" | "em andamento";
};

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  // @ts-ignore
  const MotionCard = motion(Card);

  useEffect(() => {
    // busca o JSON dentro da pasta public
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data: Project[]) => setProjects(data))
      .catch((err) => console.error("Erro ao carregar projetos:", err));
  }, []);

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <PageTitle
          subtitle="Projetos profissionais, pessoais e atividades acadêmicas"
          title="Projetos"
        />

        <MotionCard
          animate={{ y: 0, opacity: 1 }}
          className="bg-transparent shadow-none z-10"
          initial={{ y: 20, opacity: 0 }}
          transition={{ duration: 0.2, delay: 0.9 }}
        >
          <CardBody>
            <div className="flex flex-col gap-30 mt-3 w-full pt-20">
              {projects.map((project) => (
                <ProjectCard
                  key={project.title}
                  description={project.description}
                  features={project.features}
                  img={project.img}
                  link={project.link}
                  repository={project.repository}
                  status={project.status}
                  tags={project.tags}
                  title={project.title}
                />
              ))}
            </div>
          </CardBody>
        </MotionCard>
      </section>
    </DefaultLayout>
  );
}
