import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

function Title({ children }: Props) {
  return (
    <span className="font-manrope text-white font-bold leading-5 text-base">
      {children}
    </span>
  );
}

function Subtitle({ children }: Props) {
  return (
    <span className="font-roboto text-sm font-normal leading-5 text-white">
      {children}
    </span>
  );
}

function SocialMediaTitle({ children }: Props) {
  return (
    <span className="font-manrope text-base font-semibold leading-6 text-white">
      {children}
    </span>
  );
}

function SocialMediaSubtitle({ children }: Props) {
  return (
    <span className="font-roboto font-sm font-normal leading-5 text-white">
      {children}
    </span>
  );
}

function FormTitle({ children }: Props) {
  return (
    <span className="font-manrope text-2xl font-bold leading-9 text-white">
      {children}
    </span>
  );
}

function InputName() {
  return (
    <input
      className="w-[213px] h-[48px] border border-[#27272A] rounded-[8px] p-[12px_24px] gap-[8px] bg-transparent font-['Roboto'] text-[16px] font-normal leading-[24px] text-[#A3A3A3]"
      type="text"
      placeholder="Insira seu nome"
      name="name"
    />
  );
}

function InputEmail() {
  return (
    <input
      className="w-[271px] h-[48px] border border-[#27272A] rounded-[8px] p-[12px_24px] gap-[8px] bg-transparent font-['Roboto'] text-[16px] font-normal leading-[24px] text-[#A3A3A3]"
      type="text"
      placeholder="Insira seu email"
      name="email"
    />
  );
}

function InputMessage() {
  return (
    <input
      className="w-[500px] h-[48px] border border-[#27272A] rounded-[8px] p-[12px_24px] gap-[8px] bg-transparent font-['Roboto'] text-[16px] font-normal leading-[24px] text-[#A3A3A3]"
      type="text"
      placeholder="Mensagem"
      name="message"
    />
  );
}

function Button({ children }: Props) {
  return (
    <button className="w-[97px] h-[48px] bg-white border border-white rounded-lg ml-[403px] font-manrope tex-base font-bold leading-6 text-[#09090B] cursor-pointer">
      {children}
    </button>
  );
}

function CopyrightText({ children }: Props) {
  return (
    <span className="font-roboto text-sm font-normal leading-5 text-[#A3A3A3]">
      {children}
    </span>
  );
}

function Link({ children }: Props) {
  return (
    <a className="font-roboto text-sm font-normal leading-5 text-[#A3A3A3]">
      {children}
    </a>
  );
}

export {
  Title,
  Subtitle,
  SocialMediaTitle,
  SocialMediaSubtitle,
  FormTitle,
  InputName,
  InputEmail,
  InputMessage,
  Button,
  CopyrightText,
  Link,
};
