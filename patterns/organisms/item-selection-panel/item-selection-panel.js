//--------------------------------------------------------------------------------------------------------
// Mercer Evolution v4.1.0
// Item Selection Panel v1.0.1 - JS
// DATE: July 1, 2016
// AUTHOR: Douglas Fraize, Matthew Holmes
// URL: http://evolution.mercer.com
//--------------------------------------------------------------------------------------------------------

// ITEM SELECTION PANEL ITEM SELECTED TOGGLE - BEGINS
	var evoItemSelectionPanelItemSelected = function (){
		jQuery('[data-evo-item-selection-panel-item]').change(function() {
			jQuery(this).toggleClass('evo-item-selection-panel-item-selected');
		});
	}
	evoItemSelectionPanelItemSelected();
// ITEM SELECTION PANEL ITEM SELECTED TOGGLE - ENDS