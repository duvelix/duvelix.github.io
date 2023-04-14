---
layout: single
permalink: /travels/
title: "Travelogues"
toc: true
toc_label: "List"
toc_sticky: true
author_profile: true
---

Working in Progress...

<!--

{% assign tag = "git" %}

<ul>
{% assign posts = site.posts | where_exp:"post", "post.tags contains tag" | reverse %}
{% for post in posts %}
  <li><span>#{{ forloop.index0 }}</span> - <a href="{{ post.url }}">{{ post.title }}</a> - {{ post.date | date: "%Y-%m-%d" }}{% if post.comments.size > 0 %} - {{ post.comments.size }} comment{% if post.comments.size > 1 %}s{% endif %}{% endif %}</li>
{% endfor %}
</ul>

-->