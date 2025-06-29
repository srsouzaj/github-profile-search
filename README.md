<p align="center">
  <img alt="logo" width="80" height="80" src="https://i.ibb.co/xqNV3JkK/github.png" />
</p>

# 🔍 GitHub Profile Search

Uma aplicação web que permite buscar e visualizar perfis públicos do GitHub de forma prática, rápida e estilosa. Desenvolvida com foco em performance, usabilidade e uma UI responsiva.

## ✨ Funcionalidades

- Busca por usuários do GitHub com validação.
- Exibição de informações detalhadas do perfil: avatar, bio, entre outros.
- Listagem dos repositórios públicos com ordenação por estrelas ou data de atualização.
- Página de detalhes de cada repositório com informações adicionais.
- Paginação e controle de estado global via Context API.
- UI moderna com componentes acessíveis e responsivos.

## ⚙️ Tecnologias & Ferramentas

- **React 19** + **React Router DOM 6**
- **Vite** para bundling e desenvolvimento rápido
- **Tailwind CSS** para estilização com classes utilitárias
- **React Query (TanStack)** para cache e gerenciamento de estado assíncrono
- **React Hook Form + Zod** para formulários validados
- **SHADCN UI** e **Lucide React** para acessibilidade e ícones elegantes
- **Vitest + Testing Library** para testes unitários e de integração

## 🛠 Arquitetura & Boas Práticas

- Estrutura modularizada por responsabilidade (páginas, componentes, contextos, hooks, utils, etc.)
- Controle de estado com Context API desacoplado do DOM
- Utilização dos princípios de SOLID
- Tipagem total com TypeScript
- ESLint para padronização de código
- Testes automatizados cobrindo componentes principais

## Como rodar localmente

```bash
# 1. Clone o repositório
git clone https://github.com/srsouzaj/github-profile-search.git

# 2. Acesse o diretório do projeto
cd github-profile-search

# 3. Instale as dependências
npm install

# 4. Inicie o ambiente de desenvolvimento
npm run dev

# 4. Para rodar os testes
npm run test
```

## 📝 Variáveis de Ambiente

Para que a aplicação se comunique corretamente com a API do GitHub, é necessário configurar um arquivo `.env` na raiz do projeto com as seguintes variáveis:

- `VITE_API_URL`: URL base da API do GitHub.
- `VITE_GITHUB_TOKEN`: Token de autenticação pessoal do GitHub.

> **⚠️ Atenção:** Nunca compartilhe seu token publicamente.

### Como Conseguir o seu GitHub Token

1. Acesse sua conta do GitHub e vá em **Settings**.
2. No menu lateral, clique em **Developer settings**.
3. Vá para **Personal access tokens** e clique em **Generate new token**.
4. Escolha as permissões necessárias (leitura pública já é suficiente).
5. Gere e copie o token. Depois, adicione ao seu `.env`.

## 🧪 Teste de Responsividade

Recomenda-se o uso da ferramenta [Responsively App](http://responsively.app/download) para verificar o comportamento do layout em múltiplas resoluções de tela. Essa etapa é fundamental para garantir uma experiência consistente em diferentes dispositivos.

---

🛠 Criado com carinho por [Jorge de Souza](https://github.com/srsouzaj) 💻
