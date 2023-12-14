'use server';
export async function submit(
  _prevState: unknown,
  formData: FormData
): Promise<{ message: string }> {
  const select = formData.get('option');
  console.log(select);

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        message: 'Sucessful action with data: ' + select,
      });
    }, 2000);
  });
}
