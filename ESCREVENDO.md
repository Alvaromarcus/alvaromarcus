# Como escrever no blog

Tudo é arquivo de texto em Markdown. Não existe painel, banco de dados nem
serviço pago envolvido — o GitHub Pages monta o site sozinho a cada commit na
branch `main`, e a nova versão fica no ar em 1–2 minutos.

## O jeito mais rápido: pelo próprio GitHub

1. Vá em **Actions → Novo post → Run workflow**.
2. Preencha título, slug, idioma, tags e resumo.
3. O robô cria o arquivo em `_posts/` já com o cabeçalho certo e commita.
4. Clique no link que aparece no resumo da execução e escreva o texto direto no
   editor do GitHub. Salvar = publicar.

Se preferir ainda mais direto: abra o repositório no navegador e aperte a tecla
`.` — isso abre um VS Code completo dentro do browser, sem instalar nada.

## O jeito manual

Crie um arquivo em `_posts/` com o nome no formato `AAAA-MM-DD-slug.md`.
Para a versão em inglês do mesmo texto, use `AAAA-MM-DD-slug-en.md`.

```
_posts/2026-05-10-sensores-can-bus.md      → /blog/sensores-can-bus/
_posts/2026-05-10-sensores-can-bus-en.md   → /blog/sensores-can-bus-en/
```

O modelo pronto está em [`_templates/post.md`](_templates/post.md) — é só copiar.

## O cabeçalho (front matter)

```yaml
---
title: "Título completo do post"
date: 2026-05-10
lang: pt                       # "pt" ou "en"
ref: sensores-can-bus          # mesmo valor nas duas versões do texto
tags: [automação, "can bus", embarcados]
description: "Frase curta que aparece embaixo do título na listagem."
image: /assets/images/foto.png # opcional, usada na prévia de redes sociais
---
```

Campo por campo:

| Campo | Obrigatório | Para que serve |
|---|---|---|
| `title` | sim | Vira o H1 da página. **Não repita como `# Título` no corpo.** |
| `date` | sim | Define a ordem cronológica e o agrupamento por mês. |
| `lang` | sim | `pt` mostra na home portuguesa, `en` na inglesa. |
| `ref` | só se houver tradução | Liga as duas versões. É o que faz o botão PT/EN pular direto para a tradução. |
| `tags` | recomendado | Alimenta a nuvem de tags e a página `/tags/`. |
| `description` | recomendado | Resumo na listagem e no Google. |
| `image` | opcional | Imagem de prévia ao compartilhar o link. |

## Sobre as tags

Escreva as tags no idioma do post, em minúsculas, do jeito que você quiser ler
na tela. Se tiver espaço ou ponto, use aspas:

```yaml
tags: [automação, "indústria 4.0", "three.js"]
```

Não precisa cadastrar tag em lugar nenhum: qualquer tag nova aparece
automaticamente na nuvem da home e na página `/tags/`. A URL é gerada sozinha
(`indústria 4.0` vira `/tags/#industria-40`).

Vale usar tags em português nos posts PT e em inglês nos posts EN — as duas
listagens são separadas por idioma.

## Imagens

Coloque o arquivo em `assets/images/` e referencie assim:

```markdown
![Descrição da imagem]({{ site.baseurl }}/assets/images/nome-do-arquivo.png)
```

O `{{ site.baseurl }}` é necessário porque o site fica em
`alvaromarcus.github.io/alvaromarcus/`, e não na raiz do domínio.

## Rodando na sua máquina (opcional)

Só serve para pré-visualizar antes de publicar. Precisa de Ruby instalado.

```bash
bundle install
bundle exec jekyll serve --livereload
# abre em http://127.0.0.1:4000/alvaromarcus/
```

## Onde mexer para mudar o site

| O que você quer mudar | Arquivo |
|---|---|
| Título, descrição, links sociais | `_config.yml` |
| Textos de menu, botões e rodapé (PT e EN) | `_data/i18n.yml` |
| Cores, fontes, espaçamento | `assets/css/main.css` (as variáveis no topo) |
| Texto de apresentação da home | `index.html` e `en/index.html` |
| Página "Sobre" | `sobre.md` e `en/about.md` |
| Estrutura das páginas | `_layouts/` e `_includes/` |

## O que não fazer

- Não coloque `# Título` no corpo do post (duplica o título).
- Não use `layout:` no front matter dos posts — já vem configurado.
- Não renomeie um post já publicado sem necessidade: a URL vem do nome do arquivo.
