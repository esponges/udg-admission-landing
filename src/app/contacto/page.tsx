'use client';

import { Select } from '@/components/molecules/Select';
import { useFormState } from 'react-dom';
import { twMerge as tw } from 'tailwind-merge';
import { submit } from '../actions/contact-us';
import { Button } from '@/components/atoms/Button';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

type State = { message: string };

export default function Contact() {
  const router = useRouter();
  const [formStatus, formAction] = useFormState<State, FormData>(submit, {
    message: '',
  });
  const [formValues, setFormValues] = useState<{
    wouldPay: string;
    howMuch: string;
    whyNot: string;
    error?: {
      wouldPay: boolean;
      howMuch: boolean;
      whyNot: boolean;
    };
  }>({
    wouldPay: '',
    howMuch: '',
    whyNot: '',
  });

  // redirect out if formStatus message not empty
  useEffect(() => {
    if (!!formStatus?.message) {
      setTimeout(() => {
        router.push('/');
      }, 2000);
    }
  }, [formStatus?.message]);

  const handleSubmit = (formData: FormData) => {
    formAction(formData);
  };

  return (
    <main>
      <form action={handleSubmit}>
        <section className={tw('bg-white', 'pb-6')}>
          <div className={tw('mx-auto', 'p-4', 'sm:p-6', 'lg:p-8')}>
            <div
              className={tw('container', 'mx-auto', 'px-6', 'p-6', 'bg-white')}
            >
              <div className={tw('mb-16', 'text-center')}>
                <Select
                  options={[
                    { label: 'Sí', value: 'yes' },
                    { label: 'No', value: 'no' },
                  ]}
                  label='¿Pagarías al mes por un servicio así?'
                  name='wouldPay'
                  onChange={(e) => {
                    setFormValues({
                      ...formValues,
                      wouldPay: e.target.value,
                    });
                  }}
                />
                {formValues.wouldPay === 'yes' ? (
                  <Select
                    options={[
                      { label: 'Menos de $100', value: 'lessThan100' },
                      { label: 'Entre $100 y $200', value: 'between100and200' },
                      { label: 'Más de $200', value: 'moreThan200' },
                    ]}
                    label='¿Cuánto pagarías?'
                    name='howMuch'
                  />
                ) : null}
                {formValues.wouldPay === 'no' ? (
                  <Select
                    options={[
                      { label: 'No me interesa', value: 'notInterested' },
                      { label: 'No tengo tiempo', value: 'noTime' },
                      { label: 'No tengo dinero', value: 'noMoney' },
                      { label: 'No creo que funcione', value: 'noBelieve' },
                      { label: 'No tengo internet', value: 'noInternet' },
                      { label: 'Otro', value: 'other' },
                    ]}
                    label='¿Por qué no?'
                    name='whyNot'
                    onChange={(e) => {
                      setFormValues({
                        ...formValues,
                        whyNot: e.target.value,
                      });
                    }}
                  />
                ) : null}
                {formValues.whyNot === 'other' &&
                formValues.wouldPay === 'no' ? (
                  <div className='flex flex-col w-full'>
                    <label
                      htmlFor='whyNotOther'
                      className={tw(`text-sm font-medium text-gray-700 my-5`)}
                    >
                      Cuéntanos (opcional)
                    </label>
                    <textarea
                      name='whyNotOther'
                      placeholder='Breve explicación de por qué no'
                      className={tw(
                        `border border-gray-300 bg-gray-100 min-w-0 w-full rounded text-gray-800 py-2 px-3 mr-2`
                      )}
                    />
                  </div>
                ) : null}
                <Button
                  type='submit'
                  pendingMessage='Enviando...'
                  modifier='mt-10'
                  primary
                >
                  Enviar
                </Button>
              </div>
            </div>
          </div>
        </section>
      </form>
    </main>
  );
}
