# Portfólio Pessoal

Um portfólio moderno e responsivo construído com Next.js e Tailwind CSS.

## 🚀 Características

- Design moderno e responsivo
- Seções para projetos, habilidades e contato
- Animações suaves
- Otimizado para SEO
- Fácil de personalizar
- Hospedagem no GitHub Pages

## 🛠️ Tecnologias

- Next.js 14
- TypeScript
- Tailwind CSS
- ESLint

## 📦 Instalação

1. Clone o repositório:
```bash
git clone https://github.com/italloguedes/portfolio.git
cd portfolio
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o projeto em desenvolvimento:
```bash
npm run dev
```

## 🎨 Personalização

### 1. Informações Pessoais

Edite o arquivo `src/app/page.tsx` para atualizar:
- Seu nome
- Título profissional
- Foto de perfil (adicione sua foto em `/public/profile.jpg`)
- Links de redes sociais
- Email de contato

### 2. Projetos

Para adicionar seus projetos, edite a seção de projetos em `src/app/page.tsx`:
- Adicione imagens dos projetos em `/public/`
- Atualize os links do GitHub e demo
- Modifique as descrições e tecnologias utilizadas

### 3. Estilo

O projeto usa Tailwind CSS para estilização. Você pode:
- Modificar cores em `tailwind.config.ts`
- Ajustar o layout em `src/app/page.tsx`
- Personalizar animações em `tailwind.config.ts`

## 🚀 Deploy no GitHub Pages

O projeto está configurado para deploy automático no GitHub Pages:

1. Crie um novo repositório no GitHub
2. Faça push do código para o repositório:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/italloguedes/portfolio.git
git push -u origin main
```

3. No GitHub:
   - Vá para Settings > Pages
   - Em "Source", selecione "GitHub Actions"
   - O site será publicado automaticamente em `https://italloguedes.github.io/portfolio`

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 🤝 Contribuições

Contribuições são sempre bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request.
