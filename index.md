---
layout: default
---

<p><br /></p>

# Welcome to reno-visions

<img class="logo" src="/assets/images/reno-visions.png" max-height="450px" max-width="450px">

<p style="line-height: 50%;"><br /></p>

## About Us

### What We Do
<br />
<img src="/assets/images/HIW720x250.png" width="640px">
<br />
<br />
<h5 style="text-align: left;">Model</h5>
<p style="text-align:left;">
Dimensions and designs in hand, we begin by modelling your space and your furnishings, and adding natural and interior light sources. 
</p>

<h5 style="text-align: left;">Texture</h5>
<p style="text-align:left;">
Using fabric swatches, material samples and reference photos, we create digital textures to represent your chosen finishes.
</p>

<h5 style="text-align: left;">Render</h5>
<p style="text-align:left;">
With your feedback, we iterate on the design until you find the perfect fit. Would you like to see the office with a blue accent wall?  As we always say, "render twice, renovate once."
</p>

<br />
<hr />

### Our Recent Work

<ul>
  {% for post in site.posts limit:3 %}

      {% include gallery-item.html %}

  {% endfor %}
</ul>

<p class="clear"><br/></p>