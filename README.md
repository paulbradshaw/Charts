# Factmint Charts

Factmint Charts allows you to create interactive data visualizations, which can be rendered from an HTML table or directly from JSON. For more information and live examples, see [http://factmint.com/charts-overview/](http://factmint.com/charts-overview/). This repo includes the charts as well as the API that you can use to create your own (see the `/api` directory).

## Getting started

First, clone this repository with `git clone https://github.com/factmint/Charts.git`. Then navigate to `/api` and run `npm install`.

To see running examples, navigate to the directory of a given chart in the terminal and (if it's the first time) `npm install` and `grunt install`. Finally, run `grunt serve`.

e.g.

```
cd choropleth-uk-constituencies
npm install
grunt install
grunt serve
```

This will start a web server. You should see a message telling you which port it is running on (e.g. "Started connect web server on http://0.0.0.0:15009"). You can now navigate to http://locahost:15009 (the port number will be different if 15009 was not open when you ran `grunt serve`, so be sure to check), where you will see a directory listing. If you look in the `examples/unbuilt/` directory, you will find example use cases.

## Building a chart

Once you have tested a chart and decided you would like to use it in a live scenario, you will probably want to build a standalone minified script. To achieve this, run `grunt build` from the chart's root directory. This will create a `dist/` directory containing four files: a standalone script, a minified standalone script, a minified CSS file, and a text file containing all of the available options for the given chart. Having generated these files, you can see an example using a built script by running `grunt serve` from the chart's root directory, and navigating to the `examples/built/` directory in your browser.

## Tests

To see unit tests for the API, run `grunt serve` from the `/api` directory and navigate to http://localhost:1500X/test in your browser. To see unit tests for each chart, run `grunt serve` from the chart's directory and navigate to `test/`.

## Charts

* Bubble Chart
  * See [http://factmint.com/documentation/bubble-chart/](http://factmint.com/documentation/bubble-chart/)

* Candlestick Chart
  * See [http://factmint.com/documentation/candlestick-chart/](http://factmint.com/documentation/candlestick-chart/)
 
* Choropleth (UK constituencies)
  * See [http://factmint.com/documentation/choropleth/](http://factmint.com/documentation/choropleth/) 

* Choropleth (world continents)
  * See [http://factmint.com/documentation/world-countries-choropleth/](http://factmint.com/documentation/world-countries-choropleth/) 

* Column/Bar Chart
  * See [http://factmint.com/documentation/column-bar-chart/](http://factmint.com/documentation/column-bar-chart)

* Doughnut Chart
  * See [http://factmint.com/documentation/doughnut-chart/](http://factmint.com/documentation/doughnut-chart/) 

* Line Chart
  * See [http://factmint.com/documentation/line-chart/](http://factmint.com/documentation/line-chart/)

* Line Over Bar Chart
  * See [http://factmint.com/documentation/line-over-column-chart/](http://factmint.com/documentation/line-over-column-chart/)
 
* Pictorial Bar Chart
  * See [http://factmint.com/documentation/pictorial-bar-chart/](http://factmint.com/documentation/pictorial-bar-chart/)

* Pie Chart
  * See [http://factmint.com/documentation/pie-chart/](http://factmint.com/documentation/pie-chart/) 

* Scatter Graph
  * See [http://factmint.com/documentation/scatter-graph/](http://factmint.com/documentation/scatter-graph/) 

* Stacked Area Chart
  * See [http://factmint.com/documentation/stacked-area-chart/](http://factmint.com/documentation/stacked-area-chart/) 

* Stacked Column Bar Chart
  * See [http://factmint.com/documentation/stacked-column-bar-chart/](http://factmint.com/documentation/stacked-column-bar-chart/) 

### API
The `/api` directory contains the API, which can be used to build your own chart. See [https://github.com/factmint/Charts/blob/master/api/README.md](https://github.com/factmint/Charts/blob/master/api/README.md) for more information.
