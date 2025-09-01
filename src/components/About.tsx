export function About() {
  return (
    <section className="flex flex-col items-center mt-24 relative">
      <div className="w-full max-w-7xl mx-auto px-4 mb-16">
        <div className="flex flex-col lg:flex-row bg-marromCabana-100 rounded-xl shadow-xl overflow-hidden">
          <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
            <h2
              className="font-Julius text-3xl md:text-4xl lg:text-5xl text-marromCabana-500 mb-4"
              id="Sobre"
            >
              BEM-VINDO À CABANA DO PÓRTICO
            </h2>
            <p className="font-Karla text-lg md:text-xl text-marromCabana-400 mb-6">
              TRANQUILIDADE, PRIVACIDADE, CONFORTO E O VERDADEIRO CLIMA DE
              GRAMADO
            </p>
          </div>

          <div className="lg:w-1/2 bg-marromCabana-100 p-8 rounded-xl">
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-marromCabana-300 rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-Karla font-semibold text-marromCabana-500">
                    ÓTIMA LOCALIZAÇÃO
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-marromCabana-300 rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-Karla font-semibold text-marromCabana-500">
                    ACOMODA ATÉ 10 PESSOAS
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-marromCabana-300 rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-Karla font-semibold text-marromCabana-500">
                    CABANA COM BANHEIRA
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-marromCabana-300 rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                  </svg>
                </div>
                <div>
                  <p className="font-Karla font-semibold text-marromCabana-500">
                    2 BANHEIROS COMPLETOS
                  </p>
                </div>
              </div>

              {/* Característica 5 */}
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-marromCabana-300 rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
                  </svg>
                </div>
                <div>
                  <p className="font-Karla font-semibold text-marromCabana-500">
                    COZINHA COMPLETA
                  </p>
                </div>
              </div>

              {/* Característica 6 */}
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-marromCabana-300 rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z" />
                  </svg>
                </div>
                <div>
                  <p className="font-Karla font-semibold text-marromCabana-500">
                    VISTA PARA AS MONTANHAS
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
