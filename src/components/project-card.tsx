import { Button } from "@heroui/button";
import { Chip } from "@heroui/chip";
import { ExternalLink, Github, Sparkle } from "lucide-react";

type ProjectCard = {
  title: string;
  img: string;
  description: string;
  tags: string[];
  link?: string;
  repository: string;
  features?: string[];
  status?: "concluído" | "em andamento";
};

export default function ProjectCard({
  title,
  img,
  description,
  tags,
  link,
  repository,
  features = [],
  status,
}: ProjectCard) {
  // Define cor do status
  const statusColor =
    status === "concluído"
      ? "success"
      : status === "em andamento"
        ? "primary"
        : "default";

  return (
    <div className="flex flex-col md:flex-row w-full transition-transform hover:scale-[1.01] items-start gap-6 md:gap-10">
      <div className="relative w-full md:w-[420px] h-[250px] p-[2px] flex-shrink-0">
        <div className="w-full h-full">
          <img
            alt={title}
            className="w-full h-full object-contain object-top rounded-lg"
            src={img}
          />
        </div>
      </div>

      <div className="flex flex-col justify-start w-full md:w-[50%] text-left space-y-4">
        <div className="flex items-center gap-3">
          <h3 className="text-2xl font-semibold text-primary mb-1">{title}</h3>
          {status && (
            <Chip
              className="capitalize"
              color={statusColor}
              size="sm"
              variant="shadow"
            >
              {status}
            </Chip>
          )}
        </div>

        <p className="text-sm text-foreground-700 leading-relaxed">
          {description}
        </p>

        {features.length > 0 && (
          <ul className="mt-2 space-y-2 text-sm">
            {features.map((item, index) => (
              <li key={index} className="flex items-start gap-2">
                <Sparkle className="text-primary mt-[2px]" size={14} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}

        <div className="flex flex-wrap gap-2 mt-3">
          {tags.map((tag) => (
            <Chip
              key={tag}
              className="capitalize"
              color="primary"
              size="sm"
              variant="shadow"
            >
              {tag}
            </Chip>
          ))}
        </div>

        <div className="mt-5 flex gap-3">
          {link && (
            <Button
              as="a"
              className="font-medium"
              color="primary"
              href={link}
              rel="noopener noreferrer"
              startContent={<ExternalLink size={18} />}
              target="_blank"
              variant="shadow"
            >
              Ver projeto
            </Button>
          )}
          <Button
            as="a"
            className="font-medium"
            color="secondary"
            href={repository}
            rel="noopener noreferrer"
            startContent={<Github size={18} />}
            target="_blank"
            variant="flat"
          >
            Repositório
          </Button>
        </div>
      </div>
    </div>
  );
}
