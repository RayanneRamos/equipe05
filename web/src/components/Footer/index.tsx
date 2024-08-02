import footerLogoImage from "../../assets/footer-logo.svg";
import footerGithubImage from "../../assets/footer-github.svg";
import footerInstagramImage from "../../assets/footer-instagram.svg";
import footerLinkedinImage from "../../assets/footer-linkedin.svg";
import footerMailImage from "../../assets/footer-mail.svg";
import footerWhatsAppImage from "../../assets/footer-whatsapp.svg";
import footerXImage from "../../assets/footer-x.svg";
import footerYouTubeImage from "../../assets/footer-youtube.svg";
import Image from "next/image";

export function Footer() {
  return (
    <div className="flex flex-col mx-auto">
      <div className="mt-20 ml-[88px] flex justify-between gap-32">
        <div className="flex flex-col">
          <Image src={footerLogoImage} alt="logo" width={92} height={50} />
          <div className="flex items-center justify-between mt-[26px] gap-[107px]">
            <div>
              <strong className="font-manrope font-bold leading-6 text-white">
                Contato
              </strong>
              <div className="mt-4 flex justify-center gap-3">
                <Image
                  src={footerMailImage}
                  alt="email"
                  width={20}
                  height={20}
                />
                <span className="text-sm leading-[21px] text-white">
                  Codigocerto@gmail.com
                </span>
              </div>
            </div>
            <div>
              <strong className="font-manrope font-bold leading-6 text-white">
                WhatsApp
              </strong>
              <div className="mt-4 flex justify-center gap-3">
                <Image
                  src={footerWhatsAppImage}
                  alt="whatsapp"
                  width={20}
                  height={20}
                />
                <span className="text-sm leading-[21px] text-white">
                  Código Certo
                </span>
              </div>
            </div>
            <div>
              <strong className="font-manrope font-bold leading-6 text-white">
                Parcerias
              </strong>
              <div className="mt-4 flex justify-center gap-3">
                <Image
                  src={footerMailImage}
                  alt="email"
                  width={20}
                  height={20}
                />
                <span className="text-sm leading-[21px] text-white">
                  Parceiroscodigocerto@gmail.com
                </span>
              </div>
            </div>
          </div>
          <div className="mt-[26px]">
            <strong className="font-manrope font-semibold leading-6 text-white">
              Nossas redes sociais
            </strong>
            <div className="flex justify-between gap-[74px] mt-4">
              <div className="flex gap-3">
                <Image
                  src={footerGithubImage}
                  alt="github"
                  width={24}
                  height={24}
                />
                <a href="#" className="text-white no-underline">
                  <span>Github</span>
                </a>
              </div>
              <div className="flex gap-3">
                <Image
                  src={footerInstagramImage}
                  alt="instagram"
                  width={24}
                  height={24}
                />
                <a href="#" className="text-white no-underline">
                  <span className="text-sm leading-[21px] text-white">
                    Instagram
                  </span>
                </a>
              </div>
              <div className="flex gap-3">
                <Image src={footerXImage} alt="x" width={24} height={24} />
                <a href="#" className="text-white no-underline">
                  <span className="text-sm leading-[21px] text-white">
                    Twitter
                  </span>
                </a>
              </div>
              <div className="flex gap-3">
                <Image
                  src={footerLinkedinImage}
                  alt="linkedin"
                  width={24}
                  height={24}
                />
                <a href="#" className="text-white no-underline">
                  <span className="text-sm leading-[21px] text-white">
                    Linkedin
                  </span>
                </a>
              </div>
              <div className="flex gap-3">
                <Image
                  src={footerYouTubeImage}
                  alt="youtube"
                  width={24}
                  height={24}
                />
                <a href="#" className="text-white no-underline">
                  <span className="text-sm leading-[21px] text-white">
                    Youtube
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6 mr-16">
          <strong className="font-manrope text-2xl font-bold leading-[36px] text-white">
            Entre em contato
          </strong>
          <form className="flex flex-col gap-8">
            <div className="flex gap-2">
              <input
                type="text"
                className="bg-transparent border border-[#27272A] w-[213px] h-12 rounded-lg p-3 text-[#A3A3A3] placeholder-[#A3A3A3]"
                placeholder="Insira seu nome"
              />
              <input
                type="text"
                className="bg-transparent border border-[#27272A] w-[271px] h-12 rounded-lg p-3 text-[#A3A3A3] placeholder-[#A3A3A3]"
                placeholder="Insira seu email"
              />
            </div>
            <input
              type="text"
              className="w-[500px] h-12 border border-[#27272A] rounded-lg bg-transparent text-[#A3A3A3] p-3 placeholder-[#A3A3A3]"
              placeholder="Mensagem"
            />
            <button className="w-[97px] h-12 ml-[403px] border border-white rounded-lg p-3 font-manrope font-bold bg-white text-[#09090B] cursor-pointer">
              Enviar
            </button>
          </form>
        </div>
      </div>
      <div className="mt-20 ml-16">
        <div className="h-px bg-white mr-16" />
        <div className="flex justify-between">
          <span className="text-sm leading-[21px] mt-8 text-[#A3A3A3]">
            &copy; 2024 Código Certo Coders. Todos os direitos reservados
          </span>
          <div className="flex flex-row justify-between gap-6 mt-8 mr-16">
            <a
              href="#"
              className="no-underline text-sm leading-[21px] text-[#A3A3A3] text-right"
            >
              Política de Privacidade
            </a>
            <a
              href="#"
              className="no-underline text-sm leading-[21px] text-[#A3A3A3] text-right"
            >
              Termos de Serviço
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
