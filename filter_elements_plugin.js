// Boiler plate code sourced from http://stefangabos.ro/jquery/jquery-plugin-boilerplate/
// Author - Nirbhay Ashok Pherwani
// nirbhay.me | github.com/nirbhayph

(function($) {
    //filter child elements in a parent element
    $.fn.filterElements = function(method) {

        // plugin's default options
        let defaults = {
			caseInsensitive: false, // (optional)
			parentElementWrapper: null, // eg. '#myAccordion' (required)
			childElementToFilter: null, // eg. 'h3' (required)
			markNonFiltered: false, // (optional)
			markBackgroundColor: 'green', // to use set markNonFiltered to true
			markTextColor: '#FAFAFA', // to use set markNonFiltered to true
			markFiltered: false, //(optional)
			markFilteredBackgroundColor: '#C32026', //to use set markFiltered true
			markFilteredTextColor: '#F9F9F9', // to use set markFiltered true
			controlNext: false, // hide or mark any additional subsequent element (optional)
        }

        let settings = {}
        let methods = {

            init : function(options) {

                settings = $.extend({}, defaults, options);
				
				if(settings.parentElementWrapper === null || settings.childElementToFilter === null){
					$.error( 'Required attributes "parentElementWrapper" or "childElementToFilter" are not provided. Please check options passed!');
				}
				
                // iterating through all the DOM elements we are attaching the plugin to
                return this.each(function() {

                    let $element = $(this); // reference the jQuery version of the current DOM element
					
					$(this).on("keyup", function() {
						let value;
						if (settings.caseInsensitive){
							value = $(this).val().toLowerCase();
						}
						else{
							value = $(this).val();
						}
						
						$(settings.parentElementWrapper + ' ' + settings.childElementToFilter).filter(function(){
									let toggleIt;
									// a check on case insesitivity
									if (settings.caseInsensitive){
											toggleIt = $(this).text().toLowerCase().indexOf(value) > -1;
									}
									else{
											toggleIt = $(this).text().indexOf(value) > -1;
									}
									if(toggleIt){
										// show unfiltered items
										if(!settings.markFiltered){
											$(this).css("display", "block");
											if(settings.controlNext){
													$(this).next().css("display", "block");
											}
										}
										
										// if option to mark found items is set to true
										if(settings.markNonFiltered){
											$(this).css("background-color", settings.markBackgroundColor);
											$(this).css("color", settings.markTextColor);
											if(settings.controlNext){
													$(this).next().css("background-color", settings.markBackgroundColor);
													$(this).next().css("color", settings.markTextColor);
											}
										}
									}
									else{
										// hide items if mark filtered items is set to false
										if(!settings.markFiltered){
											$(this).css("display", "none");
											if(settings.controlNext){
													$(this).next().css("display", "none");
											}
										} 
										// display filtered items 
										else{
											$(this).css("background-color", settings.markFilteredBackgroundColor);
											$(this).css("color", settings.markFilteredTextColor);
											if(settings.controlNext){
													$(this).next().css("background-color", settings.markFilteredBackgroundColor);
													$(this).next().css("color", settings.markFilteredTextColor);
											}
										}
										
									}
						});
						
					});
                });

            }
        }

        // if method as the given argument exists
        if (methods[method]) {
            // call the respective method
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));

        // if an object is given as method OR nothing is given as argument
        } else if (typeof method === 'object' || !method) {
            // call the initialization method
            return methods.init.apply(this, arguments);

        } else {
            // trigger an error
            $.error( 'Method "' +  method + '" does not exist in filterElements plugin!');
        }
    }
})(jQuery);
