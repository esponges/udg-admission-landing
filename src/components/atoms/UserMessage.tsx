type Props = {
  message: string;
  user: string;
};

export function UserMessage({ message, user }: Props) {
  return (
    <div className='p-4 bg-gray-50 border border-gray-300 rounded-lg mb-2 text-right'>
      <p>{message}</p>
      <p className='text-right text-sm mt-2'>{user}</p>
    </div>
  );
}
