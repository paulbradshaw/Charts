define([
	"svg-js",
	"number"
], function(
	SVG,
	NumberUtilities
) {

return function(chart, tickMarks, maxTintNumber, scale, orientation, positiveColorClass, negativeColorClass) {
	var colorScaleKey = chart.group();

	var colorMarkers = chart.group();
	var colorLabels = chart.group();

	var scaleLength = scale.map(scale.domain.max);

	var configuration = {
		COLOR_MARKER_THICKNESS: 5,
		TICK_MARK_EXTRUDE: 8,
		TICK_LABEL_MARGIN: 5,
		TICK_LABEL_FONT_HEIGHT: 12,
		VALUE_MARKER_THICKNESS: 10,
		VALUE_MARKER_LENGTH: 10,
		VALUE_MARKER_MARGIN: 2		
	};
	colorScaleKey.configuration = configuration;

	if (tickMarks[tickMarks.length - 1].value >= 0) {
		var positiveTickMarks = [];
		var negativeTickMarks = [];
	
		tickMarks.some(function(tickMark, tickMarkIndex) {
			if (tickMark.value >= 0) {
				positiveTickMarks = tickMarks.slice(tickMarkIndex, tickMarks.length + 1);
				negativeTickMarks = tickMarks.slice(0, tickMarkIndex);
				
				return true;
			}
		});
		
		if (negativeTickMarks.length == tickMarks.length || positiveTickMarks.length == tickMarks.length) {
			var tintStepSize = Math.ceil(maxTintNumber / (positiveTickMarks.length - 2));
			tickMarks.forEach(function(tickMark, tickMarkIndex) {
				var tintNumber = parseInt(maxTintNumber - tickMarkIndex * tintStepSize);
				if (tintNumber > 0) {
					tickMark.tintClass = "tint-" + tintNumber;
				}
			});
		} else {
			var positiveTintStepSize = Math.ceil(maxTintNumber / (positiveTickMarks.length - 1));
			positiveTickMarks.forEach(function(tickMark, tickMarkIndex) {
				var tintNumber = parseInt(maxTintNumber - tickMarkIndex * positiveTintStepSize);
				if (tintNumber > 0) {
					tickMark.tintClass = "tint-" + tintNumber;
				}
			});
			
			negativeTickMarks.reverse();
			var negativeTintStepSize = Math.ceil(maxTintNumber / (negativeTickMarks.length - 1));
			negativeTickMarks.forEach(function(tickMark, tickMarkIndex) {
				var tintNumber = parseInt(maxTintNumber - tickMarkIndex * negativeTintStepSize);
				if (tintNumber > 0) {
					tickMark.tintClass = "tint-" + tintNumber;
				}
			});
			negativeTickMarks.reverse();
		}
		
		tickMarks = negativeTickMarks.concat(positiveTickMarks);
	}
	
	colorScaleKey.tickMarks = tickMarks;

	function drawVerticalScale() {
		
		var markerHeight = scaleLength / (tickMarks.length - 1);
		
		tickMarks.forEach(function(tickMark, tickMarkIndex) {

			var markPosition = scaleLength - markerHeight * tickMarkIndex;

			if (tickMarkIndex != tickMarks.length - 1) {
				var colorMarker = chart.rect(configuration.COLOR_MARKER_THICKNESS, markerHeight);
				colorMarker.move(configuration.VALUE_MARKER_LENGTH + configuration.VALUE_MARKER_MARGIN, markPosition - markerHeight);
				
				if (tickMark.value >= 0 || ! negativeColorClass) {
					colorMarker.addClass(positiveColorClass);
				} else {
					colorMarker.addClass(negativeColorClass);
				}
				
				if (tickMark.tintClass) {
					colorMarker.addClass(tickMark.tintClass);
				}
				
				colorMarkers.add(colorMarker);
			}

			var tickLine = chart.line(
				configuration.VALUE_MARKER_LENGTH + configuration.VALUE_MARKER_MARGIN,
				markPosition,
				configuration.VALUE_MARKER_LENGTH + configuration.VALUE_MARKER_MARGIN + configuration.COLOR_MARKER_THICKNESS + configuration.TICK_MARK_EXTRUDE,
				markPosition
			);
			tickLine.addClass("fm-color-scale-key-tick-line");

			var tickLabel = chart.text("" + NumberUtilities.renderValue(tickMark.value));
			tickLabel.move(
				configuration.VALUE_MARKER_LENGTH + configuration.VALUE_MARKER_MARGIN + configuration.COLOR_MARKER_THICKNESS + configuration.TICK_MARK_EXTRUDE + configuration.TICK_LABEL_MARGIN,
				markPosition - configuration.TICK_LABEL_FONT_HEIGHT
			);
			tickLabel.addClass("fm-color-scale-key-tick-label");

			colorMarkers.add(tickLine);
			colorLabels.add(tickLabel);
			
		});

		colorScaleKey.add(colorMarkers);
		colorScaleKey.add(colorLabels);
	}

	function drawHorizontalScale() {
		tickMarks.forEach(function(tickMark, tickMarkIndex) {
			if (tickMarkIndex === tickMarks.length - 1) {
				return;
			}

			var markPosition = scale.map(tickMark.value);

			var colorMarker = chart.rect(scale.map(scale.domain.max) / (tickMarks.length - 1), configuration.COLOR_MARKER_THICKNESS);
			colorMarker.move(markPosition, configuration.VALUE_MARKER_LENGTH + configuration.VALUE_MARKER_MARGIN);
			
			if (tickMark.value >= 0 || ! negativeColorClass) {
				colorMarker.addClass(positiveColorClass);
			} else {
				colorMarker.addClass(negativeColorClass);
			}
			
			if (tickMark.tintClass) {
				colorMarker.addClass(tickMark.tintClass);
			}

			var tickLine = chart.line(
				markPosition,
				configuration.VALUE_MARKER_LENGTH + configuration.VALUE_MARKER_MARGIN,
				markPosition,
				configuration.VALUE_MARKER_LENGTH + configuration.VALUE_MARKER_MARGIN + configuration.COLOR_MARKER_THICKNESS + configuration.TICK_MARK_EXTRUDE
			);
			tickLine.addClass("fm-color-scale-key-tick-line");

			var tickLabel = chart.text("" + NumberUtilities.renderValue(tickMark.value));
			tickLabel.move(
				markPosition - tickLabel.bbox().width / 2,
				configuration.VALUE_MARKER_LENGTH + configuration.VALUE_MARKER_MARGIN + configuration.COLOR_MARKER_THICKNESS + configuration.TICK_MARK_EXTRUDE + configuration.TICK_LABEL_MARGIN
			);

			tickLabel.addClass("fm-color-scale-key-tick-label");

			colorMarkers.add(colorMarker);
			colorMarkers.add(tickLine);
			colorLabels.add(tickLabel);
		});

		var finalTickLine = chart.line(
			scale.map(tickMarks[tickMarks.length - 1].value),
			configuration.VALUE_MARKER_LENGTH + configuration.VALUE_MARKER_MARGIN,
			scale.map(tickMarks[tickMarks.length - 1].value),
			configuration.VALUE_MARKER_LENGTH + configuration.VALUE_MARKER_MARGIN + configuration.COLOR_MARKER_THICKNESS + configuration.TICK_MARK_EXTRUDE
		);
		finalTickLine.addClass("fm-color-scale-key-tick-line");

		var finalTickLabel = chart.text("" + NumberUtilities.renderValue(tickMarks[tickMarks.length - 1].value));
		finalTickLabel.move(
			scale.map(tickMarks[tickMarks.length - 1].value) - finalTickLabel.bbox().width / 2,
			configuration.VALUE_MARKER_LENGTH + configuration.VALUE_MARKER_MARGIN + configuration.COLOR_MARKER_THICKNESS + configuration.TICK_MARK_EXTRUDE + configuration.TICK_LABEL_MARGIN
		);
		finalTickLabel.addClass("fm-color-scale-key-tick-label");
		colorMarkers.add(finalTickLine);
		colorLabels.add(finalTickLabel);

		colorScaleKey.add(colorMarkers);
		colorScaleKey.add(colorLabels);
	}

	if (orientation === "horizontal") {
		drawHorizontalScale();
	} else if (orientation === "vertical") {
		drawVerticalScale();
	} else {
		console.log("Incorrect scale orientation of " + orientation + " specified. Defaulting to vertical.");
		drawVerticalScale();
	}

	colorScaleKey.colorMarkers = colorMarkers;

	colorScaleKey.markValue = function(value, secondary) {
		var markPosition = scale.map(value);

		var markerPoints;

		if (orientation === "horizontal") {
			markerPoints = [
				[markPosition - (1/2 * configuration.VALUE_MARKER_THICKNESS), 0],
				[markPosition, configuration.VALUE_MARKER_LENGTH],
				[markPosition + (1/2 * configuration.VALUE_MARKER_THICKNESS), 0]
			];
		} else {
			markerPoints = [
				[0, scaleLength - markPosition - (1/2 * configuration.VALUE_MARKER_THICKNESS)],
				[configuration.VALUE_MARKER_LENGTH, scaleLength - markPosition],
				[0, scaleLength - markPosition + (1/2 * configuration.VALUE_MARKER_THICKNESS)]
			];
		}

		var valueMarker = chart.polygon().plot(markerPoints);

		valueMarker.addClass("fm-color-scale-key-marker hidden");
		valueMarker.removeClass("hidden");

		if (! secondary) {
			this.valueMarker = valueMarker;
			colorScaleKey.add(this.valueMarker);
		} else {
			this.secondaryValueMarker = valueMarker;
			this.secondaryValueMarker.addClass("secondary");
			colorScaleKey.add(this.secondaryValueMarker);
		}

	};

	colorScaleKey.reset = function() {
		if (this.valueMarker) {
			this.valueMarker.remove();
		}
	};

	return colorScaleKey;
}

});