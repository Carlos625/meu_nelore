# Meu Nelore Web

Aplicativo web para gerenciamento de rebanho bovino, desenvolvido com React, TypeScript e Firebase.

## Funcionalidades

- Cadastro e gerenciamento de animais
- Registro de incidentes (doenças, acidentes, etc.)
- Dashboard com estatísticas do rebanho
- Funcionamento offline com sincronização automática
- Interface responsiva para desktop e mobile

## Tecnologias Utilizadas

- React 18
- TypeScript
- TailwindCSS
- Firebase (Firestore e Storage)
- IndexedDB (via localForage)
- Vite
- PWA (Progressive Web App)

## Pré-requisitos

- Node.js 18 ou superior
- npm ou yarn
- Conta no Firebase

## Configuração do Ambiente

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/meu-nelore-web.git
cd meu-nelore-web
```

2. Instale as dependências:
```bash
npm install
# ou
yarn
```

3. Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:
```env
VITE_FIREBASE_API_KEY=sua-api-key
VITE_FIREBASE_AUTH_DOMAIN=seu-auth-domain
VITE_FIREBASE_PROJECT_ID=seu-project-id
VITE_FIREBASE_STORAGE_BUCKET=seu-storage-bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=seu-messaging-sender-id
VITE_FIREBASE_APP_ID=seu-app-id
```

4. Inicie o servidor de desenvolvimento:
```bash
npm run dev
# ou
yarn dev
```

## Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Gera a build de produção
- `npm run preview` - Visualiza a build de produção localmente
- `npm run lint` - Executa o linter

## Estrutura do Projeto

```
src/
  ├── components/     # Componentes reutilizáveis
  ├── config/        # Configurações (Firebase, etc.)
  ├── pages/         # Páginas da aplicação
  ├── services/      # Serviços (IndexedDB, Firebase, etc.)
  ├── types/         # Definições de tipos TypeScript
  ├── App.tsx        # Componente principal
  ├── main.tsx       # Ponto de entrada
  └── routes.tsx     # Configuração de rotas
```

## Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Faça commit das suas alterações (`git commit -m 'Adiciona nova feature'`)
4. Faça push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes. 