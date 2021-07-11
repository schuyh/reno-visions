---
layout: gallery
---

<div class="pt-3">
    <div class="row pt-3">
        <h2 class="d-flex mx-auto align-items-center justify-content-center" style="text-shadow: 2px 2px 3px #05070940;">Gallery</h2>
    </div>
    <div class="row pt-3 d-flex mx-auto align-items-center">
        {% for post in site.posts %}
            <div class="col-md-6">
                {% include gallery-item-lg.html %}
            </div>
        {% endfor %}
    </div>
</div>
<br />