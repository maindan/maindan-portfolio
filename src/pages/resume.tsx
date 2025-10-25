import { Card, CardBody } from "@heroui/card";
import { motion } from "framer-motion";
import { Button } from "@heroui/button";
import { Linkedin } from "lucide-react";

import DefaultLayout from "@/layouts/default";
import PageTitle from "@/components/page-title";
import { GithubIcon } from "@/components/icons";

export default function ResumePage() {
  const MotionCard = motion(Card);

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <PageTitle subtitle="Informações profissionais" title="Resumo" />
        <div className="flex flex-col md:flex-row gap-2 mt-3">
          <div className="w-12/12 md:w-6/12 flex flex-col">
            <article>
              <MotionCard
                animate={{ y: 0, opacity: 1 }}
                className="bg-transparent shadow-none mt-2 z-10"
                initial={{ y: 5, opacity: 0 }}
                transition={{ duration: 0.1, delay: 0.8 }}
              >
                <CardBody>
                  <h2 className="text-2xl font-normal mr-auto">
                    Olá! me chamo{" "}
                    <strong className="font-semibold">Daniel.</strong>
                  </h2>
                </CardBody>
              </MotionCard>
              <MotionCard
                animate={{ y: 0, opacity: 1 }}
                className="bg-transparent shadow-none z-10"
                initial={{ y: 5, opacity: 0 }}
                transition={{ duration: 0.1, delay: 1 }}
              >
                <CardBody>
                  <p className="text-justify">
                    Sou desenvolvedor de software com foco em sistemas web,
                    atuando tanto no frontend quanto no backend, utilizando
                    Angular e Python. Atualmente curso Análise e Desenvolvimento
                    de Sistemas, com previsão de conclusão em dezembro de 2025.
                    Tenho como objetivo evoluir continuamente na carreira e me
                    consolidar como um profissional fullstack, entregando
                    soluções digitais de alta qualidade e eficiência.
                  </p>
                  <a href="/cv.pdf" rel="noopener noreferrer" target="_blank">
                    <Button className="w-fit mt-2" size="md">
                      Ver CV
                    </Button>
                  </a>
                </CardBody>
              </MotionCard>
            </article>
            <section className="flex flex-col">
              <MotionCard
                animate={{ y: 0, opacity: 1 }}
                className="bg-transparent shadow-none z-10"
                initial={{ y: 5, opacity: 0 }}
                transition={{ duration: 0.1, delay: 0.8 }}
              >
                <CardBody>
                  <h2 className="text-2xl font-normal mr-auto">Contato</h2>
                </CardBody>
              </MotionCard>
              <MotionCard
                animate={{ y: 0, opacity: 1 }}
                className="bg-transparent shadow-none z-10"
                initial={{ y: 5, opacity: 0 }}
                transition={{ duration: 0.1, delay: 1 }}
              >
                <CardBody className="flex flex-col">
                  <span className="flex gap-2">
                    <strong>E-mail: </strong>
                    <p>danlimadev@gmail.com</p>
                  </span>
                  <span className="flex gap-2">
                    <strong>Telefone: </strong>
                    <p>(92) 98633-7371</p>
                  </span>
                  <div className="flex flex-row gap-2">
                    <a
                      href="https://www.linkedin.com/in/danlimadev/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <Button isIconOnly aria-label="Linkedin" color="primary">
                        <Linkedin size="20" />
                      </Button>
                    </a>
                    <a
                      href="https://github.com/maindan"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <Button isIconOnly aria-label="GitHub" color="default">
                        <GithubIcon />
                      </Button>
                    </a>
                    <a
                      href="https://wa.me/92986337371"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <Button isIconOnly aria-label="WhatsApp" color="success">
                        <img
                          alt="whatsapp icon"
                          src="/whatsapp.svg"
                          width="20"
                        />
                      </Button>
                    </a>
                  </div>
                </CardBody>
              </MotionCard>
            </section>
          </div>
          <div className="w-12/12 md:w-6/12 flex flex-col">
            <MotionCard
              animate={{ y: 0, opacity: 1 }}
              className="bg-transparent shadow-none mt-2 z-10"
              initial={{ y: 5, opacity: 0 }}
              transition={{ duration: 0.1, delay: 0.8 }}
            >
              <CardBody>
                <h2 className="text-2xl font-semibold mr-auto">Experiência</h2>
              </CardBody>
            </MotionCard>
            <MotionCard
              animate={{ y: 0, opacity: 1 }}
              className="bg-transparent shadow-none mt-0 z-10"
              initial={{ y: 5, opacity: 0 }}
              transition={{ duration: 0.1, delay: 1 }}
            >
              <CardBody>
                <ul className="list-disc">
                  <li className="ml-4 mb-6">
                    <h3 className="text-xl font-semibold">
                      Projex Consulting – Manaus, Amazonas
                    </h3>
                    <h5 className="text-sm font-normal">
                      <strong>Suporte em Desenvolvimento de Software</strong> |
                      03/2025 - Atualmente
                    </h5>
                    <p className="mt-2">
                      Atuação no suporte e desenvolvimento de sistemas focados
                      em automação de processos empresariais. Análise de regras
                      de negócio e processos para implementação de soluções
                      eficientes. Desenvolvimento de interfaces web com Angular
                      e backend utilizando FastAPI. Contribuição para otimização
                      de fluxos de trabalho e melhoria contínua dos sistemas
                      existentes.
                    </p>
                  </li>

                  <li className="ml-4 mb-6">
                    <h3 className="text-xl font-semibold">
                      Projex Consulting – Manaus, Amazonas
                    </h3>
                    <h5 className="text-sm font-normal">
                      <strong>Estagiário em Desenvolvimento de Software</strong>{" "}
                      | 06/2024 - 03/2025
                    </h5>
                    <p className="mt-2">
                      Suporte no desenvolvimento de sistemas e manutenção de
                      aplicações internas. Colaboração na análise de processos
                      de negócio para novas funcionalidades. Aprendizado e
                      aplicação de boas práticas em desenvolvimento web e
                      backend.
                    </p>
                  </li>

                  <li className="ml-4 mb-6">
                    <h3 className="text-xl font-semibold">
                      Vento Norte – Manaus, Amazonas
                    </h3>
                    <h5 className="text-sm font-normal">
                      <strong>Analista de Negócios</strong> | 01/2023 - 07/2024
                    </h5>
                    <p className="mt-2">
                      Atuação estratégica em vendas B2B, elaborando orçamentos e
                      gerenciando negociações. Gestão do SAC e suporte ao
                      relacionamento com clientes. Administração de campanhas
                      digitais, incluindo Google ADS e Meta ADS. Implementação
                      de soluções tecnológicas para otimização de processos
                      internos.
                    </p>
                  </li>

                  <li className="ml-4 mb-6">
                    <h3 className="text-xl font-semibold">
                      Vento Norte – Manaus, Amazonas
                    </h3>
                    <h5 className="text-sm font-normal">
                      <strong>Assistente Administrativo</strong> | 09/2021 -
                      01/2023
                    </h5>
                    <p className="mt-2">
                      Suporte administrativo em diferentes setores da empresa.
                      Aplicação de ferramentas como CRM e sistemas de
                      gerenciamento de conversas para otimizar a eficiência.
                      Contribuição na organização e padronização de processos
                      internos.
                    </p>
                  </li>
                </ul>
              </CardBody>
            </MotionCard>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
