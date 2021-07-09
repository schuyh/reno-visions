---
layout: default
---

<p><br /></p>

# Welcome to reno-visions

<img class="logo" src="/assets/images/reno-visions.png" max-height="450px" max-width="450px">

<p><br /></p>

## About Us

### What We Do
<br />
<img src="/assets/images/HIW720x250.png" width="640px">
<br />
<br />
<p style="text-align:left;">
Using 3D modelling and texturing software, such as Blender and Substance Designer, reno-visions empowers clients to previsualize their planned renovations by creating photorealistic renders of their proposed design(s). 
</p>

<br />
<hr />

### The Process 

<br />
<img src="/assets/images/720x250-ao.png" width="640px" style="transform: scaleX(-1);">
<h5 style="text-align: left;">Model</h5>
<p style="text-align:left;">
Dimensions and designs in hand, we begin by modelling your space and your furnishings, and adding natural and interior light sources. 
</p>

<br />
<img src="/assets/images/720x250-original.png" width="640px" style="transform: scaleX(-1);">
<h5 style="text-align: left;">Texture</h5>
<p style="text-align:left;">
Using fabric swatches, material samples and reference photos, we create digital textures to represent your chosen finishes.
</p>

<br />
<img src="/assets/images/720x250-accent.png" width="640px" style="transform: scaleX(-1);">
<h5 style="text-align: left;">Render</h5>
<p style="text-align:left;">
With your feedback, we iterate on the design until you find the perfect fit. Would you like to see the office with a blue accent wall?  As we always say, "render twice, reno once."
</p>

<br />
<hr />

### Our Recent Work


<div class="container">
  <div class="row d-inline-flex justify-content-center align-items-center">
    {% for post in site.posts | limit: 4 %}
      <div class="col-6">
        {% include gallery-item.html %}
      </div>
    {% endfor %}
  </div>
</div>
<div class="container" id="firstClick" style="display: none;">
  <div class="row d-inline-flex justify-content-center align-items-center">
    {% for post in site.posts | limit: 4 offset: 4 %}
      <div class="col-6">
        {% include gallery-item.html %}
      </div>
    {% endfor %}
  </div>
</div>
<br />

<div class="row d-inline-flex justify-content-center align-items-center">
  <button class="shadow-sm" id="clicker" onclick="toggle_visibility('firstClick');">See More</button>
  <button class="shadow-sm" id="referrer" style="display: none;" onclick="document.location='/gallery'">View Gallery</button>
</div>

<p class="clear"><br/></p>