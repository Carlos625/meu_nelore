export interface Vacina {
  id?: string;
  animalBrinco: string;
  nome: string;
  dataAplicacao: Date | string;
  dataProxima?: Date | string;
  observacoes?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
}