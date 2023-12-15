'use client';

import { twMerge as tw } from 'tailwind-merge';

import { Button } from '@/components/atoms/Button';
import submit from '@/app/actions';
import { useFormState } from 'react-dom';

function ContactUs() {
  // todo: figure out how to pass argument to submit function from useFormState
  // const [formStatus, formAction] = useFormState<{ formData: FormData }>(submit, {
  const [formStatus, formAction] = useFormState(submit, {
    message: '',
  });

  return (
    <div className={tw(`w-full lg:w-1/2 mt-12 lg:mt-0`)}>
      <div className={tw(`border border-gray-400 rounded py-5 px-4`)}>
        <h4 className={tw(`font-mono text-sm uppercase text-gray-500 mb-3`)}>
          Dudas? Escríbenos
        </h4>
        <form className={tw(`flex w-full`)} action={formAction}>
          <input
            aria-label='email address'
            value='foo'
            type='text'
            name='email'
            className={tw(
              `border border-gray-300 bg-gray-100 min-w-0 w-full rounded text-gray-800 py-2 px-3 mr-2`
            )}
            readOnly
            placeholder='Enter your email'
          />
          <Button type='submit' pendingMessage='Enviando...'>
            Contáctanos
          </Button>
        </form>
        <p
          className={tw(
            `text-sm text-blue-500 mt-2`,
            formStatus.error && 'text-red-500'
          )}
        >
          {formStatus.message || formStatus.error}
        </p>
      </div>
    </div>
  );
}

export default ContactUs;
