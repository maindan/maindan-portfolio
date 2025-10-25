import PageTitle from "@/components/page-title";
import DefaultLayout from "@/layouts/default";

export default function ProjectsPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <PageTitle
          subtitle="Projetos profissionais, pessoais e atividades acadêmicas"
          title="Projetos"
        />
      </section>
    </DefaultLayout>
  );
}
