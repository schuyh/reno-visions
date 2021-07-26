---
layout: default
---

<p><br /></p>

# Welcome to reno-visions

<img src="/assets/images/reno-visions-textured.png" style="max-width: 450px; max-height: 450px;">

<p><br /></p>

## About Us

### What We Do
<br />
<img src="/assets/images/HIW720x250.png" width="640px">
<br />
<br />
<p style="text-align:left;">
<strong>reno-visions</strong> is a 3D visualization studio based in Calgary, AB. We specialize in the creation of photorealistic renders of clients' planned home improvement and commercial renovation projects. 
<br /><br />
Using 3D modelling and texturing software, such as Blender and Substance Designer, <strong>reno-visions</strong> empowers its clients to select the perfect fit and finish by pre-visualizing their proposed design(s). 
</p>

<br />
<hr />

### How We Do It

<br />
<img src="/assets/images/720x250-ao.png" width="640px" style="transform: scaleX(-1);" class="shadow-lg">
<h5 style="text-align: left;">Model</h5>
<p style="text-align:left;">
Dimensions and designs in hand, we begin by modelling your space and your furnishings, and adding natural and interior light sources. 
</p>

<hr style="opacity: 0.4" />
<img src="/assets/images/720x250-original.png" width="640px" style="transform: scaleX(-1);" class="shadow-lg">
<h5 style="text-align: left;">Texture</h5>
<p style="text-align:left;">
Using fabric swatches, material samples and reference photos, we create digital textures to represent your chosen finishes.
</p>

<hr style="opacity: 0.4" />
<img src="/assets/images/720x250-accent.png" width="640px" style="transform: scaleX(-1);" class="shadow-lg">
<h5 style="text-align: left;">Render</h5>
<p style="text-align:left;">
With your feedback, we iterate on the design until you find the perfect fit. Would you like to see the office with a blue accent wall? Darker floors? 

<br /><br /><h6 style="font-size: 1.25rem; text-decoration: italic; opacity: 0.5;"><em>As we always say, <strong>"render twice, reno once."</strong></em></h6>
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