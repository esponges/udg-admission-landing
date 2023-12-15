'use server';

const formOptions = ['wouldPay', 'howMuch', 'whyNot', 'whyNotOther'];

export async function submit(
  _prevState: unknown,
  formData: FormData
): Promise<{ message: string }> {
  const options = new Map<string, string>();
  for (const option of formOptions) {
    const value = formData.get(option);
    if (value) {
      options.set(option, value.toString());
    }
  }

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        message: 'Sucessful action with data: ' + JSON.stringify(options),
      });
    }, 2000);
  });
}
