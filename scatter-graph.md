---
title: Scatter Graph
layout: doc-page
---

<a id="scatter-description"></a>

A Scatter Graph is used to show correlations between two measures, X and Y.

### Interactions

On hover a tooltip shows the details of a particular point.

### Usage

The first column is the label for each point. The second and third are the X and Y values, respectively. The fourth column, which is optional, can be used to define groups. If a groups column is used the points will be coloured based upon their group and a key will be present below the scatter graph to show which colours correspond to which groups.

## Example

<pre class="line-numbers" data-src="/code-examples/scatter-documentation.html"></pre>
<a href="http://codepen.io/Factmint/pen/YPrGQN" class="codepen-button">
	{% include code-pen-icon.svg %}
</a>

<div id="demo" class="documentation-example-container">
<table class="fm-scatter" data-fm-show-trend-lines="true" data-fm-x-suffix="$" data-fm-x-suffix="$">
							<thead>
								<tr>
									<th>Product</th><th>Supplier price</th><th>Sales price</th><th>Group - Warehouse</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>Ice cream</td><td>0.4</td><td>2</td><td>Warehouse A</td>
								</tr>
								<tr>
									<td>Umbrellas</td><td>3.5</td><td>10</td><td>Warehouse B</td>
								</tr>
								<tr>
									<td>Horse shoes</td><td>0.56</td><td>4.5</td><td>Warehouse B</td>
								</tr>
								<tr>
									<td>Pencils</td><td>0.2</td><td>0.8</td><td>Warehouse A</td>
								</tr>
								<tr>
									<td>Mugs</td><td>1.3</td><td>5</td><td>Warehouse B</td>
								</tr>
								<tr>
									<td>Wizard hats</td><td>6</td><td>20</td><td>Warehouse A</td>
								</tr>
								<tr>
									<td>Light bulbs</td><td>1</td><td>3</td><td>Warehouse C</td>
								</tr>
								<tr>
									<td>Fire extinguishers</td><td>4</td><td>13</td><td>Warehouse B</td>
								</tr>
								<tr>
									<td>Wheelbarrows</td><td>5.5</td><td>7.6</td><td>Warehouse C</td>
								</tr>
								<tr>
									<td>Deck chairs</td><td>2.8</td><td>6.5</td><td>Warehouse B</td>
								</tr>
							</tbody>
						</table>
<link rel="stylesheet" href="http://factmint.io/scatter.css">
<script async src="http://factmint.io/scatter.js"></script>
</div>

## Options

The following data attributes are available for a Scatter Graph:

<dl>
 <dt>data-fm-x-prefix</dt><dd>Adds a prefix to x values (displayed on hover). For example, you may wish to add  the ‘£’ symbol before each number</dd>
 <dt>data-fm-x-suffix</dt><dd>Adds a suffix to x values (displayed on hover). For example, you may wish to add  the ‘$’ symbol after each number</dd>
 <dt>data-fm-y-prefix</dt><dd>Adds a prefix to y values (displayed on hover). For example, you may wish to add  the ‘£’ symbol before each number</dd>
 <dt>data-fm-y-suffix</dt><dd>Adds a suffix to y values (displayed on hover). For example, you may wish to add  the ‘$’ symbol after each number</dd>
 <dt>data-fm-show-trend-lines</dt><dd>Adds trend lines ('lines of best fit') to your plotted data. One line will be drawn for each group of points</dd>
 <dt>data-fm-height</dt><dd>Enforces an explicit height. Expects a value with CCS syntax, e.g. "250px" (see <a href="/documentation/chart-layout-and-sizing/#size">sizing guide</a>)</dd>
 <dt>data-fm-width</dt><dd>Enforces an explicit width. Expects a value with CCS syntax, e.g. "800px" (see <a href="/documentation/chart-layout-and-sizing/#size">sizing guide</a>)</dd>
 <dt>data-fm-enable-spillover</dt><dd>If "true", the scatter graph will draw some transient elements outside of its configured height and width (see <a href="/documentation/chart-layout-and-sizing/#spillover">layout guide</a>)</dd>
</dl>
