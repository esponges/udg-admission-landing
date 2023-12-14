'use client';

import { Select } from '@/components/molecules/Select';
import { useFormState } from 'react-dom';
import { twMerge as tw } from 'tailwind-merge';
import { submit } from '../actions/contact-us';
import Button from '@/components/atoms/Button';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation'

type State = { message: string };

export default function Contact() {
  const router = useRouter();
  const [formStatus, formAction] = useFormState<State, FormData>(submit, {
    message: '',
  });

  // redirect out if formStatus message not empty
  useEffect(() => {
    if (!!formStatus?.message) {
      setTimeout(() => {
        router.push('/');
      }, 2000);
    }
  }, [formStatus?.message]);

  return (
    <main>
      <form action={formAction}>
        <section className={tw(`bg-white pb-6`)}>
          <div className={tw(`mx-auto p-4 sm:p-6 lg:p-8`)}>
            <div className={tw(`container mx-auto px-6 p-6 bg-white`)}>
              <div className={tw(`mb-16 text-center`)}>
                {/* show formStatus message */}
                <p className={tw(`text-black font-semibold leading-none`)}>{formStatus?.message}</p>
                <Select
                  options={[
                    { label: 'Option 1', value: 'option1' },
                    { label: 'Option 2', value: 'option2' },
                    { label: 'Option 3', value: 'option3' },
                  ]}
                  label='Select an option'
                  name='option'
                  // onChange={console.log}
                />
              </div>
              {/* submit btn */}
              <Button type='submit' pendingMessage='Enviando...'>
                Contáctanos
              </Button>
            </div>
          </div>
        </section>
      </form>
    </main>
  );
}
