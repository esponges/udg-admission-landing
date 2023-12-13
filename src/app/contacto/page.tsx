import { Select } from '@/components/molecules/Select';
import { twMerge as tw } from 'tailwind-merge';

export default function Contact() {
  return (
    <main>
      <section className={tw(`bg-white pb-6`)}>
        <div className={tw(`max-w-7xl mx-auto p-4 sm:p-6 lg:p-8`)}>
          <div className={tw(`container mx-auto px-6 p-6 bg-white`)}>
            <div className={tw(`mb-16 text-center`)}>
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
          </div>
        </div>
      </section>
    </main>
  );
}
