---
id: {{id}}
title: '{{{name}}}'
date_created: {{date_created}}
date_modified: {{date_modified}}
slug: {{slug}}
type: {{type}}
visible: {{visible}}
attibutes: 
  {{#attributes}}
  - id: {{id}}
    name: {{name}}
    position: {{position}}
    variable: {{variable}}
    options: {{{options}}}
  {{/attributes}}
variations:
  {{#variations}}
  - {{.}}
  {{/variations}}
featured: {{featured}}
price: {{price}}
preview: ' {{{excerpt.rendered}}} '
categories: 
  {{#categories}}
  - id: {{id}}
    name: {{{name}}}
    slug: {{slug}}
  {{/categories}} 
tags: 
  {{#tags}}
  - id: {{id}}
    name: {{name}}
    slug: {{slug}}
  {{/tags}}
images: 
  {{#images}}
  - scr: {{{src}}}
    alt: {{alt}}
  {{/images}}


---

{{{description}}}
