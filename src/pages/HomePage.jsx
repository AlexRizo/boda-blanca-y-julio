import {
  Article,
  FamilyCard,
  Separator,
} from "../components";

export const HomePage = () => {
  return (
    <section className="bg-[#000000]">
      <div className="h-screen w-full flex items-center justify-center bg-[url('/img/bg-1.jpg')] bg-cover bg-center xl:bg-top relative">
        <div className="text-white text-center relative z-10 mb-10 xl:mb-28">
          <h1 className="cormorant-garamond text-[85px] leading-[1] xl:text-[120px] text-shadow font-bold mb-10 xl:m-0">
            Bianca &<br/> Julio Eduardo
          </h1>
          <p className="text-xl xl:text-3xl font-light xl:mt-10">
            Con la bendición de Dios, el amor y el apoyo incondicional
            <br />
            de nuestros padres,&nbsp;
            <br className="xl:hidden" />
            hoy unimos nuestras vidas en matrimonio
          </p>
        </div>
        <div className="absolute w-full h-[400px] bg-gradient-to-t from-[#000000] to-transparent bottom-0 hidden xl:block"></div>
        <Separator position="-bottom-32 z-10" />
      </div>

      <div className="py-40 relative bg-[url('/img/bg-golden.jpg')] bg-contain bg-center flex justify-center bg-opacity-50">
        <div className="flex flex-col xl:flex-row xl:h-[645px] px-5 xl:p-0">
          <div className="relative z-10 xl:translate-x-5">
            <FamilyCard
              title="PADRES"
              custom="bg-[#2c2c2c]"
              woman={{
                mother: "Ma. Guadalupe Velasco Zamora",
                father: "Oscar Guerrero Campos",
              }}
              man={{
                mother: "Soledad Núñez Chávez",
                father: "Francisco Alcaraz Gutiérrez",
              }}
            />
          </div>
          <div className="xl:flex items-end relative z-20 xl:-translate-x-5">
            <FamilyCard
              title="PADRINOS"
              custom="bg-[#505050]"
              woman={{
                mother: "Adriana Verduzco Morfín",
                father: "Francisco Vega Carrillo",
              }}
              man={{
                mother: "Jesús Codina Ochoa",
                father: "Emma Álvarez Cárdenas",
              }}
            />
          </div>
        </div>
        <Separator position="-bottom-28 z-10" />
      </div>

      <div className="h-auto w-full bg-[url('/img/bg-yellow.jpg')] bg-cover py-32 relative">
        <div className="h-full w-full flex flex-col items-center justify-center gap-12 xl:gap-24 text-[#F4F0ED]">
          <Article
            title="Fecha"
            subtitle={
              <>
                12 de Abril de
                <br className="xl:hidden" /> 2025
              </>
            }
          />
          <Article
            title="Ceremonia Religiosa"
            subtitle="Catedral Basílica Menor"
            time="7:00 PM"
            text="Reforma 21, Centro, 28000 Colima, Col."
            url="https://maps.app.goo.gl/5wQPfpwNhNDjAG5t5"
          />
          <Article
            title="Recepción"
            subtitle='Jardín Dos Vistas'
            time="8:00 PM"
            text="Carr. al Alpuyequito, Km 0.8, Colima, Col."
            url="https://maps.app.goo.gl/dHM14oiBfRPeBLhN9"
          />

            <Article title="Código de Vestimenta" subtitle="Riguroso Formal" />

            <Article title="Mesa de Regalos" subtitle="Liverpool - 51429397" />
        </div>
        <Separator position="-bottom-28 z-10 hidden xl:block" />
      </div>

      <div className="text-white text-center py-24 px-10">
        <h1 className="text-4xl font-medium">Si deseas darnos un regalo económico en efectivo, puedes hacerlo aquí:</h1>
        <div className="text-3xl font-light my-8">
          <p>4152 3143 8151 6098</p>
          <div className="border border-white w-24 my-5 mx-auto"></div>
          <p>BBVA</p>
        </div>
        <h2 className="text-4xl">O bien, puedes entregarlo el día de la boda.</h2>
      </div>

      <div className="w-full cormorant-garamond text-white text-[50px] xl:text-[70px] font-bold text-center py-5 xl:py-14 xl:mt-14">
        <h1>Bianca &<br/> Julio Eduardo</h1>
      </div>
    </section>
  );
};
