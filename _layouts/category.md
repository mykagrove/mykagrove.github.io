---
layout: default
---

{% comment %}
	{{ page.category }}
	{{ site.categories[page.category] | inspect }}
{% endcomment %}

<div class="container-fluid">
	<div class="row">
		<div class="col-xs-12">
			<div class="posts">
				{% for post in site.categories[page.category] %}
					{% include listing.html %}
				{% endfor %}
			</div>
			{% comment %}
				Categories can't have pagination by default, there is apparently a plugin but let's just not bother for now.
			{% endcomment %}
		</div>
	</div>
</div>
