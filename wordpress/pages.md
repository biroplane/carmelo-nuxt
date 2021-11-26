---
id: {{id}}
title: '{{{title.rendered}}}'
subtitle: '{{wps_subtitle}}'
occhiello: '{{acf.occhiello}}'
author:
  {{#_embedded.author}}
  - id: {{id}}
    name: {{name}}
  {{/_embedded.author}}
date: {{date}}
event_date: {{acf.event_date}}
location: {{acf.location}}
modified: {{modified}}
slug: {{slug}}
type: {{type}}
featured: {{sticky}}
format: {{format}}
preview: ' {{{excerpt.rendered}}} '
categories: 
  {{#categories.categories}}
  - id: {{id}}
    name: {{{name}}}
    slug: {{slug}}
  {{/categories.categories}} 
tags: 
  {{#pure_taxonomies.tags}}
  - id: {{id}}
    name: {{name}}
    slug: {{slug}}
  {{/pure_taxonomies.tags}}
featured_image: {{{better_featured_image.source_url}}}

---

{{{content.rendered}}}
