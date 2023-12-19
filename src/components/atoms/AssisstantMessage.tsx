type Props = {
  children: React.ReactNode;
};

export function AssisstantMessage({ children }: Props) {
  return (
    <div className='p-4 bg-white border border-gray-300 rounded-lg mb-2'>
      {children}
      <p className='text-right text-sm mt-2'>UniPrep</p>
    </div>
  );
}
