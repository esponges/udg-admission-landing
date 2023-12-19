import { AssisstantMessage } from '../atoms/AssisstantMessage';
import { UserMessage } from '../atoms/UserMessage';

export function ChatSection() {
  return (
    <div className='bg-gray-100 p-6 font-sans'>
      <div className='max-w-lg mx-auto'>
        <h3 className='text-2xl font-bold mb-4'>
          Responde esta pregunta aleatoria
        </h3>
        <AssisstantMessage>
          <p>"Cuál es el valor de x if 2x + 6 = 14?"</p>
          <ul className='list-disc pl-5'>
            <li>A) 3</li>
            <li>B) 4</li>
            <li>C) 8</li>
          </ul>
        </AssisstantMessage>
        <UserMessage message='¿Cómo puedo aislar X?' user='Dany05_pr' />
        <AssisstantMessage>
          <ol className='list-decimal pl-5'>
            <li>Resta 6 de ambos lados de la equación: 2x + 6 - 6 = 14 - 6;</li>
            <li>Divide ambos lados por dos: 2x/2 = 8/2</li>
            <li>Esto te dará x = 4</li>
          </ol>
        </AssisstantMessage>
        <UserMessage message='¡Gracias!' user='Dany05_pr' />
        <AssisstantMessage>
          <p>¡De nada!</p>
        </AssisstantMessage>
      </div>
    </div>
  );
}
