export interface Vacina {
  id?: string; // Tornando o id opcional
  animalBrinco: string;
  nome: string;
  dataAplicacao: Date | string;
  dataProxima?: Date | string;
  observacoes?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
}