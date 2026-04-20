---
layout: default
title: ⚡ AM - Tech 🔌
lang: pt-br
---

**Português** | [English]({{ site.baseurl }}/README-EN)

# Bem-vindo ao meu Portfólio Técnico

Sou um entusiasta de tecnologia que busca pesquisar e explorar as infinitas possibilidades desse universo. Este espaço é dedicado a compartilhar ideias, projetos e conhecimentos sobre automação, o uso prático de Inteligência Artificial em diversos âmbitos, além de alguns dos meus hobbies e descobertas.

### Blog / Artigos
{% for post in site.blog %}
  {% if post.lang == 'pt-br' %}
  * [{{ post.title }}]({{ site.baseurl }}{{ post.url }})
  {% endif %}
{% endfor %}

### Assuntos
* **Eficiência Operacional:** Consultoria para o setor industrial.
* **Sistemas Embarcados:** Desenvolvimento de hardware e firmware (STM32, ESP32, barramento CAN).
* **IA e Visão Computacional:** Modelos YOLO para monitoramento industrial.
* **Aeromodelismo e Drones:** Montagem, projetos e configurações.

---
### Contato
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/alvaromarcus/)
