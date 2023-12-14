'use server';
export async function submit(_prevState: unknown, formData: FormData) {
  const select = formData.get('option');
  console.log(select);

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        message: 'Selected: ' + select,
      });
    }, 2000);
  });
}
