---
layout: default
title: AeroBuilder
---

**Português** | [English](./aerobuilder-en.html) | [Voltar para a Home](./README.md)

# AeroBuilder: como o software moderno pode transformar um hobby analógico

O aeromodelismo é um dos hobbies mais antigos da aviação. Por décadas, entusiastas projetaram suas aeronaves em miniatura com régua, papel quadriculado e tabelas impressas de coeficientes aerodinâmicos. O processo era lento, sujeito a erros e exigia um acervo considerável de conhecimento empírico acumulado ao longo de anos de tentativa e erro. O AeroBuilder nasceu da insatisfação com essa realidade e da convicção de que ferramentas de engenharia de qualidade não deveriam ser exclusividade da indústria aeronáutica.

## O que é o AeroBuilder

O AeroBuilder é uma aplicação web interativa voltada ao projeto de aviões de aeromodelismo. O usuário informa as dimensões do modelo que pretende construir, como envergadura, cordas da asa, comprimento da fuselagem e tamanho das superfícies de cauda, e a ferramenta calcula em tempo real os parâmetros aerodinâmicos fundamentais: a Corda Aerodinâmica Média (MAC), a posição do Centro de Gravidade teórico, o Ponto Neutro e a Margem Estática. Com base nesses dados, o sistema emite alertas sobre possíveis instabilidades de voo e sugere correções ao projetista. Ao final, o usuário pode exportar um template em escala 1:1 em PDF, pronto para ser impresso, recortado e colado diretamente sobre a chapa de Depron ou balsa.

O projeto suporta dois tipos de aeronave, o convencional com fuselagem e conjunto de cauda, e a asa voadora com elevons, e oferece visualização tanto em desenho técnico bidimensional com vistas superior, lateral e frontal, quanto em modelo tridimensional interativo com perfis de asa reais como o Clark-Y, NACA 4412, NACA 0012 e MH45.

## Indústria 4.0 dentro de uma garagem

A Indústria 4.0 é frequentemente associada a chãos de fábrica repletos de robôs e sistemas de manufatura integrados. No entanto, seus princípios fundamentais, a digitalização de processos físicos, a simulação virtual antes da execução real, o acesso democratizado a ferramentas de engenharia e a tomada de decisão orientada por dados, se aplicam com igual pertinência ao universo maker e ao aeromodelismo.

O AeroBuilder materializa esses conceitos em escala individual. O processo tradicional de construir um avião, voar, perceber que o CG está errado, modificar a estrutura e tentar novamente é exatamente o ciclo de produção que a digitalização busca encurtar. A ferramenta cria um gêmeo digital simplificado do modelo antes mesmo que o primeiro corte seja feito. O construtor valida a estabilidade longitudinal, verifica a proporção entre as áreas das superfícies e identifica inconsistências geométricas no ambiente virtual, não na pista.

O sistema de assistente de voo integrado, que analisa a Margem Estática e o coeficiente de volume de cauda e classifica o projeto como estável, em alerta ou instável, funciona como um sistema especialista básico, um conceito central na computação industrial aplicada ao apoio à decisão. A geração automatizada de templates em escala 1:1 com marcação de tiling para impressão em múltiplas folhas A4 é uma versão acessível do que sistemas CAD/CAM industriais fazem ao preparar arquivos para corte por CNC ou laser.

A democratização é talvez o ponto mais alinhado com a filosofia da Indústria 4.0. Softwares como XFLR5 ou OpenVSP existem e são tecnicamente superiores, mas exigem curva de aprendizado elevada e instalação local. O AeroBuilder roda inteiramente no navegador, sem instalação, sem conta, sem barreira de entrada. O mesmo tipo de cálculo que um engenheiro aeroespacial faria em uma planilha especializada está disponível para um estudante de ensino médio que quer construir seu primeiro modelo de espuma.

## A stack de tecnologia

A escolha das ferramentas de desenvolvimento segue uma linha coerente com o objetivo de manter o projeto leve, performático e de fácil manutenção.

O framework base é o React com TypeScript, inicializado via Vite, que substituiu o Create React App como padrão da indústria por sua velocidade de compilação e suporte nativo a módulos ES. O TypeScript, longe de ser apenas uma preferência estilística, tem papel funcional aqui: os tipos das dimensões da aeronave e das métricas calculadas são contratos explícitos que o compilador verifica, prevenindo erros de lógica que poderiam resultar em um modelo fisicamente incoerente.

A estilização usa Tailwind CSS na versão 3, com suporte completo a modo escuro via classe. A decisão de usar Tailwind em lugar de um sistema de componentes como Material UI foi deliberada: a ferramenta precisava de uma interface funcional e responsiva sem a sobrecarga visual de um design system corporativo.

A visualização bidimensional é feita com a Canvas API nativa do navegador, sem bibliotecas de terceiros. Isso significa controle total sobre cada pixel renderizado, o que é essencial para desenho técnico onde a precisão de proporções importa. O canvas é redrawn a cada alteração de parâmetro, criando a ilusão de reatividade instantânea. A visualização tridimensional usa React Three Fiber, um wrapper declarativo para Three.js que permite descrever cenas 3D com a mesma sintaxe de componentes React, e a biblioteca Drei que fornece controles de órbita, ambiente de iluminação HDR e utilitários de geometria.

Os perfis de asa são gerados matematicamente. O código implementa a equação analítica para famílias NACA de quatro dígitos, calculando a linha de curvatura, a espessura e as coordenadas de superfície superior e inferior com espaçamento de cosseno para melhor resolução nas bordas de ataque e fuga. Para o Clark-Y e o MH45, os pontos de referência tabelados são interpolados por spline cúbica antes de serem passados ao ExtrudeGeometry do Three.js. Isso garante que o modelo 3D exibido não seja uma aproximação genérica, mas uma extrusão do perfil real utilizado em aeromodelismo.

A exportação em PDF usa a biblioteca jsPDF diretamente no cliente, sem envio de dados para nenhum servidor. As páginas de template são geradas com lógica de tiling que calcula quantas folhas A4 são necessárias para acomodar as dimensões reais do modelo e insere marcadores de alinhamento em cada canto para facilitar a montagem das folhas.

A internacionalização é gerida pelo react-i18next, com suporte completo a inglês e português do Brasil. A troca de idioma é instantânea e persiste as dimensões atuais, o que significa que um construtor brasileiro pode trabalhar em centímetros com interface em português sem nenhuma fricção.

## Como o AeroBuilder ajuda no hobby

Para quem está começando no aeromodelismo scratch build, a construção a partir de materiais brutos como Depron, balsa ou Coroplast, a principal barreira não é a falta de habilidade manual. É a falta de confiança no projeto antes de investir horas de trabalho em uma estrutura que pode se revelar instável no primeiro voo.

A ferramenta resolve esse problema ao dar ao construtor uma resposta objetiva ainda na fase de projeto. Se a Margem Estática está em 12%, o modelo tem boa probabilidade de ser estável e controlável. Se está em 2%, o avião vai cabrear e não responder ao profundor da forma esperada. Essa informação, que antes exigia ou experiência acumulada ou acesso a literatura técnica em inglês, agora está a uma entrada de dados de distância.

O sistema de avisos com sugestões de correção, o campo "como corrigir" que aparece em cada alerta, transforma a ferramenta em algo próximo de um mentor técnico. Em vez de apenas sinalizar que o braço de momento da cauda está curto demais, a ferramenta explica que cada 5 centímetros adicionados ao braço de momento melhoram significativamente a estabilidade, e que o alvo ideal é entre 2,5 e 3,5 vezes o valor da MAC.

Para construtores experientes, o valor está na velocidade de iteração. Testar variações de projeto, alterar a envergadura, comparar diferentes proporções de estabilizador ou verificar o impacto de aumentar o enflechamento em uma asa voadora, são operações que levam segundos na ferramenta e horas na bancada.

O template em escala 1:1 fecha o ciclo entre digital e físico. O projeto validado no software se transforma diretamente em um gabarito físico, eliminando a etapa de transposição manual de medidas para o material. É uma versão compacta do fluxo CAD-para-fabricação que as indústrias aeroespaciais adotaram décadas atrás.

## Considerações finais

O AeroBuilder foi construído com a convicção de que ferramentas de engenharia bem projetadas têm o poder de acelerar o aprendizado e reduzir o desperdício em qualquer escala, da fábrica à garagem. O aeromodelismo é um campo rico em física aplicada, em criatividade construtiva e em uma comunidade que valoriza o conhecimento compartilhado. Uma ferramenta aberta, que roda no navegador sem custo e sem barreiras, é uma forma concreta de contribuir com esse ecossistema.

O código está disponível publicamente e o projeto segue em desenvolvimento ativo. Contribuições, sugestões e relatos de uso são bem-vindos.
