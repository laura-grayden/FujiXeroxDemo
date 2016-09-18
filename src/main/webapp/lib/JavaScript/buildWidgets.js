// buildWidgets.js

// define Inspectors and build widgets

    var mw = new metawidget.Metawidget( document.getElementById( 'metawidget' ), {
			
			inspector: new metawidget.inspector.CompositeInspector( [ new metawidget.inspector.PropertyTypeInspector(),
				function( toInspect, type, names ) {
				
						return {
							properties: {					
								givenName: {
									section: "Name"
								},
								familyName: {
									required: true
								},
						        addressLine1: {
						        	section: "Address",
						        	required: true
						        },
						        suburb: {
						        	required: true
						        },
						        state: {
						        	required: true
						        },
						        country: {	
						        	required: true
						        }
							}
						};
					}
				
			] )
		} );
		mw.toInspect = person;
		mw.buildWidgets();