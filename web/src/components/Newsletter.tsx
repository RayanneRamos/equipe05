import React from 'react';

const Newsletter = () => {
  return (
    <section className="max-w-full h-auto p-10 md:h-[45.2rem] md:p-[11.2rem_6.4rem_11.2rem_6.4rem] bg-cover backgroundDef flex flex-col items-center justify-center font-roboto">
      <article className='text-center mb-6 md:mb-8'>
        <h2 className="text-5xl md:text-5xl custom-57 w-auto md:w-76.8rem md:h-5.8rem gradient-text">
          Inscreva-se em nossa Newsletter
        </h2>
        <p className="pt-4 md:pt-6 text-gray-400">
          Join our newsletter to stay up to date on features and releases.
        </p>
      </article>
      <form className="w-full max-w-md flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-2">
        <input
          type="email"
          placeholder="Insira seu email"
          className="w-full md:w-[379px] h-[48px] p-3 md:p-[12px_24px_12px_24px] rounded-[24px] border focus:outline-none gradient-text"
        />
        <button
          type="submit"
          className="w-full md:w-[118px] h-[48px] bg-primitive-500 text-white rounded-[32px] text-[16px]"
        >
          Cadastrar
        </button>
      </form>
      <p className="p-4 text-neutral-100 text-[12px] text-center mt-6">
        Ao clicar em cadastrar, você concorda com nossos{' '}
        <a href="#" className="text-blue-500 underline">Terms and Conditions</a>.
      </p>
    </section>
  );
};

export default Newsletter;


