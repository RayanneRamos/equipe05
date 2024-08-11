import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

function Container({ children }: Props) {
  return (
    <div className="w-full text-white p-20 flex flex-col items-center">
      {children}
    </div>
  );
}

function SocialForm({ children }: Props) {
  return <div className="flex gap-32">{children}</div>;
}

function SocialMedia({ children }: Props) {
  return <div className="flex flex-col gap-[26px]">{children}</div>;
}

function Contacts({ children }: Props) {
  return <div className="flex gap-[107px]">{children}</div>;
}

function Contact({ children }: Props) {
  return <div className="flex flex-col gap-4">{children}</div>;
}

function IconName({ children }: Props) {
  return (
    <div className="flex justify-center items-center gap-3">{children}</div>
  );
}

function Social({ children }: Props) {
  return <div className="flex flex-col gap-4">{children}</div>;
}

function SocialDetails({ children }: Props) {
  return <div className="flex gap-[74px]">{children}</div>;
}

function SocialAddress({ children }: Props) {
  return (
    <div className="flex items-center justify-center gap-3">{children}</div>
  );
}

function FormContainer({ children }: Props) {
  return <div className="flex flex-col gap-6">{children}</div>;
}

function Form({ children }: Props) {
  return <form className="flex flex-col gap-8">{children}</form>;
}

function InputsContainer({ children }: Props) {
  return <div className="flex gap-4">{children}</div>;
}

function Divider() {
  return <div className="mt-20 w-[1384px] h-[1px] bg-[#fff]" />;
}

function Copyright({ children }: Props) {
  return <div className="flex items-center mt-8">{children}</div>;
}

function Terms({ children }: Props) {
  return <div className="flex gap-6 ml-[732px]">{children}</div>;
}

export {
  Container,
  SocialForm,
  SocialMedia,
  Contacts,
  Contact,
  IconName,
  Social,
  SocialDetails,
  SocialAddress,
  FormContainer,
  Form,
  InputsContainer,
  Divider,
  Copyright,
  Terms,
};
