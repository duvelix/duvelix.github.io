---
layout: single
permalink: /studies/
title: "Study Posts"
#toc: true
#toc_label: "목차"
#toc_sticky: true
author_profile: true
---

## Java

{% assign tag = "java" %}

<ul>
{% assign posts = site.posts | where_exp:"post", "post.tags contains tag" | reverse %}
{% for post in posts %}
  <li><span>#{{ forloop.index0 }}</span> - <a href="{{ post.url }}">{{ post.title }}</a> - {{ post.date | date: "%Y-%m-%d" }}{% if post.comments.size > 0 %} - {{ post.comments.size }} comment{% if post.comments.size > 1 %}s{% endif %}{% endif %}</li>
{% endfor %}
</ul>


## 자료구조

{% assign tag = "data structure" %}

<ul>
{% assign posts = site.posts | where_exp:"post", "post.tags contains tag" | reverse %}
{% for post in posts %}
  <li><span>#{{ forloop.index0 }}</span> - <a href="{{ post.url }}">{{ post.title }}</a> - {{ post.date | date: "%Y-%m-%d" }}{% if post.comments.size > 0 %} - {{ post.comments.size }} comment{% if post.comments.size > 1 %}s{% endif %}{% endif %}</li>
{% endfor %}
</ul>


## 기계학습

{% assign tag = "machine learning" %}

<ul>
{% assign posts = site.posts | where_exp:"post", "post.tags contains tag" | reverse %}
{% for post in posts %}
  <li><span>#{{ forloop.index0 }}</span> - <a href="{{ post.url }}">{{ post.title }}</a> - {{ post.date | date: "%Y-%m-%d" }}{% if post.comments.size > 0 %} - {{ post.comments.size }} comment{% if post.comments.size > 1 %}s{% endif %}{% endif %}</li>
{% endfor %}
</ul>


## 강화학습

{% assign tag = "reinforcement learning" %}

<ul>
{% assign posts = site.posts | where_exp:"post", "post.tags contains tag" | reverse %}
{% for post in posts %}
  <li><span>#{{ forloop.index0 }}</span> - <a href="{{ post.url }}">{{ post.title }}</a> - {{ post.date | date: "%Y-%m-%d" }}{% if post.comments.size > 0 %} - {{ post.comments.size }} comment{% if post.comments.size > 1 %}s{% endif %}{% endif %}</li>
{% endfor %}
</ul>
