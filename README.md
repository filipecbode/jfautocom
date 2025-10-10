# JF Autocom — Site institucional

Site estático simples para a empresa **JF Autocom** (Brasília, desde 2014), com botão flutuante do WhatsApp que abre conversa no número **+55 61 99538-3096**.

## Estrutura

```
/
├── index.html      # Página principal
├── styles.css      # Estilos (responsivo, dark)
├── script.js       # Lógica do botão WhatsApp e utilidades
├── assets/
│   └── logo.svg    # Logotipo simples (SVG)
└── vercel.json     # Configuração opcional para deploy
```

## Como rodar localmente

Basta abrir o `index.html` no navegador.

## Deploy na Vercel (recomendado)

1. Crie um repositório no GitHub e envie estes arquivos (`git init`, `git add .`, `git commit -m "site jf autocom"`, `git branch -M main`, `git remote add origin ...`, `git push -u origin main`).
2. Acesse <https://vercel.com/new>, clique em **Import Project** e selecione o repositório.
3. Em **Framework Preset**, selecione **Other** (ou deixe detectar automaticamente). Este é um site **estático**.
4. **Build Command**: _vazio_. **Output Directory**: `.` (raiz).
5. Deploy! A Vercel vai gerar uma URL. Depois você pode configurar um domínio próprio.

## GitHub Pages (opcional)

1. No repositório, vá em **Settings → Pages**.
2. Em **Source**, selecione **Deploy from a branch**, branch `main`, pasta `/root`.
3. Salve. O GitHub vai publicar e informar a URL.

## Personalização

- Atualize a URL canônica/OG no `<head>` do `index.html` quando publicar.
- Se desejar, ajuste o texto padrão da mensagem do WhatsApp em `script.js`.
- Para SEO, adicione `sitemap.xml` e `robots.txt` quando tiver o domínio.

## Suporte

Qualquer ajuste de conteúdo/cores/seções, é só pedir! 😉
