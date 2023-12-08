import { z } from 'zod';

export const contactValidator = z.object({
  name: z.string().refine((v) => v.length > 0, {
    message: 'Queremos saber o seu nome'
  }),
  email: z.string().email({ message: 'Informe um e-mail válido' }),
  message: z.string().min(10, { message: 'Informe mais detalhes na sua mensagem' }),
});