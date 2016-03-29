//--------------------------------------------------------------------------------------------------------
// Project Name v1.0.0 - Site JS
// DATE: March 29, 2016
// AUTHOR: Douglas Fraize, Matthew Holmes, Sherry Seeton
// URL: https://evolution.mercer.com
//--------------------------------------------------------------------------------------------------------

// =======================================================================================================
// JAVASCRIPT LIBRARIES
// =======================================================================================================



// =======================================================================================================
// SITE FUNCTIONS AND INITIALIZATIONS
// =======================================================================================================

// FUNCTIONS
//--------------------------------------------------------------------------------------------------------

	


// DOCUMENT READY
//--------------------------------------------------------------------------------------------------------

$(document).foundation({

	// FOUNDATION INITIALIZATIONS
	//----------------------------------------------------------------------------------------------------

	

});

$(function() {

	// INITIALIZATIONS
	//----------------------------------------------------------------------------------------------------

		


	// KITCHEN SINK DEMOS
	//----------------------------------------------------------------------------------------------------

		// AUTOCOMPLETE
			
			var evoAutocompleteExampleData = [
				'Agresta, Jewel (Dallas) - Marsh',
				'Agricola, Dwain (Norwood) - Mercer',
				'Alexy, Dorthy (Chichester) - Mercer',
				'Altonen, Colin (Hartford) - Marsh',
				'Amaral, Ramon (Auckland) - Marsh',
				'Amrich, Darrell (Iowa City) - Mercer',
				'Araiza, Chad (Houston) - Mercer',
				'Arenburg, Margot (Dusseldorf) - Mercer',
				'Argenti, Kathie (Croydon) - Mercer',
				'Arostegui, Marcelo (Norwood) - Mercer',
				'Asberry, Kurtis (Dallas) - Marsh',
				'Assad, Jess (Louisville) - Marsh',
				'Backus, Neil (Dallas) - Marsh',
				'Bagnoli, Luciusv (Croydon) - Marsh',
				'Backus, Neil (Dallas) - Marsh',
				'Bagnoli, Luciusv (Croydon) - Marsh',
				'Assad, Jess (Louisville) - Marsh',
				'Backus, Neil (Dallas) - Marsh',
				'Bagnoli, Luciusv (Croydon) - Marsh',
				'Backus, Neil (Dallas) - Marsh',
				'Bagnoli, Luciusv (Croydon) - Marsh',
				'Assad, Jess (Louisville) - Marsh',
				'Backus, Neil (Dallas) - Marsh',
				'Bagnoli, Luciusv (Croydon) - Marsh',
				'Backus, Neil (Dallas) - Marsh',
				'Bagnoli, Luciusv (Croydon) - Marsh',
				'Bagnli, Luusv (Crydon) - Mercer',
				'Bgnoli, Luciusv (Croon) - Marsh',
				'Bagnol, Lucisv (Crodon) - Mercer',
				'Bagnoli, uciusv (Croyn) - Mercer',
				'Gnoli, Lucisv (Cdon) - Mercer',
			];

			// Autocomplete example
			evoAutocomplete('evo-autocomplete-example',{
				source: evoAutocompleteExampleData
			});

		// BUTTONS

			// Interactive button examples
			evoButtonInteractive('evo-button-interactive-secondary-example');
			evoButtonInteractive('evo-button-interactive-primary-example');

		// CAROUSEL

			// Carousel example
			evoCarousel('evo-carousel-example');

		// DATA TABLE

			// Data Table example
			evoDataTable('evo-data-table-example');

			// Data Table Vertical Scroll example
			evoDataTable('evo-data-table-vertical-scroll-example',{
				scrollY: '200px',
				scrollCollapse: true,
				paging: false
			});

			// Data Table Select All Checkboxes example
			evoDataTable('evo-data-table-select-all-checkboxes-example',{
				searching: false,
				paging: false,
				info: false,
				order: [[1, 'asc']],
				columns: [
					{orderable: false},
					{orderable: true},
					{orderable: true},
					{orderable: true},
					{orderable: true}
				]
			});

		// DATEPICKER

			// Datepicker read only input example
			evoDatepicker('evo-datepicker-readonly-example');
		 
			// Datepicker default text input example
			evoDatepicker('evo-datepicker-default-example');
			
			// Datepicker with message example
			evoDatepicker('evo-datepicker-message-example');
			
			// Dateoicker masked date input example
			evoDatepicker('evo-datepicker-masked-example');

		// SCROLL PANE

			// Scroll pane example
			evoScrollPane('evo-scroll-pane-example');

			// Horizontal scroll pane example
			evoScrollPane('evo-scroll-pane-horizontal-example',{
				axis:'x',
				mouseWheel:{
					axis:'x'
				},
				advanced:{
					autoExpandHorizontalScroll: true
				}
			});

			// Horizontal + vertical scroll pane example
			evoScrollPane('evo-scroll-pane-horizontal-vertical-example',{
				axis:'yx',
				advanced:{
					autoExpandHorizontalScroll: true
				}
			});

			// Scroll pane custom height example
			evoScrollPane('evo-scroll-pane-custom-height-example',{
				setHeight: 200
			});

		// SLIDER

			// Slider horizontal (default) example
			evoSlider('evo-slider-default');

			// Slider range horizontal (default) example
			evoSliderRange('evo-slider-range-default');

			// Slider range horizontal - fixed min example
			evoSliderRangeSingleHandle('evo-slider-range-single-min',{
				range: 'min'
			});

			// Slider range horizontal - fixed max example
			evoSliderRangeSingleHandle('evo-slider-range-single-max',{
				range: 'max'
			});

			// Slider horizontal (default) with interval ticks example
			evoSlider('evo-slider-default-ticks',{
				step: 10,
				ticks: true
			});

			// Slider range horizontal (default) with interval ticks example
			evoSliderRange('evo-slider-range-default-ticks',{
				step: 10,
				ticks: true
			});

			// Slider range horizontal - fixed min with interval ticks example
			evoSliderRangeSingleHandle('evo-slider-range-single-min-ticks',{
				range: 'min',
				step: 10,
				ticks: true
			});

			// Slider range horizontal - fixed max with interval ticks example
			evoSliderRangeSingleHandle('evo-slider-range-single-max-ticks',{
				range: 'max',
				step: 10,
				ticks: true
			});

});

//--------------------------------------------------------------------------------------------------------
// Mercer Evolution v3.0.2
// Conversational Form v1.0.0 - JS
// DATE: March 17, 2016
// AUTHOR: Douglas Fraize, Matthew Holmes, Sherry Seeton
// URL: http://evolution.mercer.com
//--------------------------------------------------------------------------------------------------------

// CONVERSATIONAL FORM ITEM TOGGLE  - BEGINS
	var evoConversationalFormItemToggle = function(){
		jQuery('[data-evo-conversational-form-element]').focus(function(){
			var id = 'evo-conversational-form-item-' + jQuery(this).attr('data-evo-conversational-form-item-toggle');
			jQuery('#' + id).fadeIn(2000);
		});
	}
	evoConversationalFormItemToggle();
// CONVERSATIONAL FORM ITEM TOGGLE - ENDS

//--------------------------------------------------------------------------------------------------------
// Mercer Evolution v3.0.2
// Item Selection Panel v1.0.0 - JS
// DATE: March 17, 2016
// AUTHOR: Douglas Fraize, Matthew Holmes, Sherry Seeton
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