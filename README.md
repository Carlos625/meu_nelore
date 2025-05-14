# Meu Nelore Web

Sistema de gerenciamento de rebanho bovino desenvolvido para produtores rurais.

## Funcionalidades

- Cadastro e gerenciamento de animais
- Controle de vacinação
- Registro de incidentes
- Dashboard com estatísticas
- Gestão de brincos

## Tecnologias Utilizadas

- React
- TypeScript
- Tailwind CSS
- Firebase (Firestore)
- React Router
- React Icons

## Como Executar

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/meu-nelore-web.git
cd meu-nelore-web
```

2. Instale as dependências:
```bash
npm install
```

3. Configure as variáveis de ambiente:
Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:
```
VITE_FIREBASE_API_KEY=sua-api-key
VITE_FIREBASE_AUTH_DOMAIN=seu-auth-domain
VITE_FIREBASE_PROJECT_ID=seu-project-id
VITE_FIREBASE_STORAGE_BUCKET=seu-storage-bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=seu-messaging-sender-id
VITE_FIREBASE_APP_ID=seu-app-id
```

4. Execute o projeto:
```bash
npm run dev
```

## Estrutura do Projeto

```
src/
  ├── components/     # Componentes reutilizáveis
  ├── pages/         # Páginas da aplicação
  ├── services/      # Serviços e integrações
  ├── config/        # Configurações
  └── types/         # Definições de tipos
```

## Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes. 