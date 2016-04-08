//--------------------------------------------------------------------------------------------------------
// Mercer Evolution v3.0.5
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