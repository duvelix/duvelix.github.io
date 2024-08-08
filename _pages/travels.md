---
layout: single
permalink: /travels/
title: "Travelogues"
toc: true
toc_label: "List"
toc_sticky: true
author_profile: true
---

## 230527 Nagoya

{% assign tag = "nagoya" %}

<div style="display: flex;">
  <div>
    <img src="/assets/images/Travel/001/00.webp" alt="" style="width: 300px;">
  </div>
  <ul>
  {% assign posts = site.posts | where_exp:"post", "post.tags contains tag" | reverse %}
  {% for post in posts %}
    <li><a href="{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
  </ul>
</div>

## 230628 Jeju

{% assign tag = "jeju" %}

<div style="display: flex;">
  <div>
    <img src="/assets/images/Travel/004/00.jpg" alt="" style="width: 300px;">
  </div>
  <ul>
  {% assign posts = site.posts | where_exp:"post", "post.tags contains tag" | reverse %}
  {% for post in posts %}
    <li><a href="{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
  </ul>
</div>

## 230714 Tokyo

{% assign tag = "tokyo" %}

<div style="display: flex;">
  <div>
    <img src="/assets/images/Travel/007/00.jpg" alt="" style="width: 300px;">
  </div>
  <ul>
  {% assign posts = site.posts | where_exp:"post", "post.tags contains tag" | where_exp:"post", "post.path contains '2023'" | reverse %}
  {% for post in posts %}
    <li><a href="{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
  </ul>
</div>

## 230928 Kyoto

{% assign tag = "kyoto" %}

<div style="display: flex;">
  <div>
    <img src="/assets/images/Travel/017/00.jpg" alt="" style="width: 300px;">
  </div>
  <ul>
  {% assign posts = site.posts | where_exp:"post", "post.tags contains tag" | reverse %}
  {% for post in posts %}
    <li><a href="{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
  </ul>
</div>

## 231222 Fukuoka

{% assign tag = "fukuoka" %}

<div style="display: flex;">
  <div>
    <img src="/assets/images/Travel/023/00.jpg" alt="" style="width: 300px;">
  </div>
  <ul>
  {% assign posts = site.posts | where_exp:"post", "post.tags contains tag" | reverse %}
  {% for post in posts %}
    <li><a href="{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
  </ul>
</div>


## 240208 Sapporo

{% assign tag = "sapporo" %}

<div style="display: flex;">
  <div>
    <img src="/assets/images/Travel/027/00.jpg" alt="" style="width: 300px;">
  </div>
  <ul>
  {% assign posts = site.posts | where_exp:"post", "post.tags contains tag" | reverse %}
  {% for post in posts %}
    <li><a href="{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
  </ul>
</div>

## 240712 Tokyo

{% assign tag = "tokyo" %}

<div style="display: flex;">
  <div>
    <img src="/assets/images/Travel/007/00.jpg" alt="" style="width: 300px;">
  </div>
  <ul>
  {% assign posts = site.posts | where_exp:"post", "post.tags contains tag" | where_exp:"post", "post.path contains '2024'" | reverse %}
  {% for post in posts %}
    <li><a href="{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
  </ul>
</div>