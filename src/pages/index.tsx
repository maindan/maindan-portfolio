import { motion } from "framer-motion"; // 1. Importe motion
import { Card, CardBody } from "@heroui/card";
import { Button } from "@heroui/button";
import { ArrowBigRightDash } from "lucide-react";
import { useNavigate } from "react-router-dom";

import DefaultLayout from "@/layouts/default";

// Crie um MotionCard
const MotionCard = motion(Card);

export default function IndexPage() {
  const navigate = useNavigate();

  return (
    <DefaultLayout>
      <section className="flex flex-col-reverse md:flex-row items-center justify-center gap-4 py-2 md:py-10">
        <div className="w-12/12 md:w-6/12 h-5vh md:h-[50vh] flex items-center">
          <MotionCard
            animate={{ y: 0, opacity: 1 }}
            className="bg-transparent shadow-none z-10"
            initial={{ y: 10, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <CardBody>
              <div className="p-2 md:p-4">
                <h4 className="text-2xl font-normal">Daniel Lima</h4>
                <h2 className="text-4xl font-bold text-indigo-500">
                  Desenvolvedor
                </h2>
                <p className="text-lg mt-2">
                  Desenvolvendo sistemas que conectam pessoas e negócios de
                  forma inteligente.
                </p>
                <div className="flex items-center justify-start gap-2 mt-4">
                  <a href="/cv.pdf" rel="noopener noreferrer" target="_blank">
                    <Button>Ver CV</Button>
                  </a>
                  <Button
                    color="secondary"
                    endContent={<ArrowBigRightDash size={18} />}
                    type="button"
                    onClick={() => navigate("/resumo")}
                  >
                    Resumo
                  </Button>
                </div>
              </div>
            </CardBody>
          </MotionCard>
        </div>
        <div className="w-11/12 md:w-6/12 h-5vh md:h-[50vh] flex items-start md:items-center justify-center">
          <MotionCard
            animate={{ opacity: 1 }}
            className="z-10"
            initial={{ opacity: 0 }}
            isBlurred={true}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10"> */}

            <CardBody>
              <div className="">
                <img
                  alt="profile img"
                  className="rounded-2xl"
                  src="/img.jpeg"
                  width="200px"
                />
              </div>
            </CardBody>
          </MotionCard>
        </div>
      </section>
    </DefaultLayout>
  );
}
