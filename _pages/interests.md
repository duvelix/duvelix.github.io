---
layout: single
permalink: /interests/
title: "Interests"
#toc: true
#toc_label: "List"
#toc_sticky: true
author_profile: true
---

## 전문연구요원 훈련소

{% assign tag = "katc" %}

<ul>
{% assign posts = site.posts | where_exp:"post", "post.tags contains tag" | reverse %}
{% for post in posts %}
  <li><span>#{{ forloop.index0 }}</span> - <a href="{{ post.url }}">{{ post.title }}</a> - {{ post.date | date: "%Y-%m-%d" }}{% if post.comments.size > 0 %} - {{ post.comments.size }} comment{% if post.comments.size > 1 %}s{% endif %}{% endif %}</li>
{% endfor %}
</ul>

## 개봉기

{% assign tag = "unboxing" %}

<style>
  .grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 16px;
  }

  .grid-item {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>

<div class="grid-container">
{% assign posts = site.posts | where_exp:"post", "post.tags contains tag" | reverse %}
{% for post in posts %}
  <div class="grid-item">
    {% if post.thumbnail %}
      <a href="{{ post.url }}">
        <img src="{{ post.thumbnail }}" alt="{{ post.title }} 썸네일" style="width: 100%; height: auto;">
      </a>
    {% endif %}
  </div>
{% endfor %}
</div>