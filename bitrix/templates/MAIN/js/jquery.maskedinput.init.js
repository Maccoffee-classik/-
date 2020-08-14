jQuery.mask.definitions['h'] = "[9]";
function maskMaskedInput() {
	if (jQuery('[data-inputmask]').length > 0)
		jQuery('[data-inputmask]').each(function(){ jQuery(this).mask(jQuery(this).data('inputmask')!=''?jQuery(this).data('inputmask'):'+7 (h99) 999-99-99'); });
}
jQuery(document).ready(function($){ maskMaskedInput(); });