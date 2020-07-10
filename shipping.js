/CAMBIAR LAS REGIONES

  // Paste this on the Checkout Block. Change the regions and shipping options.
  var regions = ["Metropolitana"] // List Regions with disabled shipping Methods
  var comunasStgo = ["Cerrillos", "Cerro Navia","Conchalí","El Bosque", "Estación Central","Huechuraba", "Independencia", "La cisterna", "La Florida", "La Granja", "La Pintana", "La Reina", "Las Condes", "Lo Barnechea", "Lo Espejo", "Lo Padro", "Macul", "Maipu", "Ñuñoa", "Pedro Aguirre Cerda", "Peñalolen", "Providencia", "Pudahuel", "Puente Alto", "Quilicura", "Quinta Normal", "Recoleta", "Renca", "San Bernardo", "San Joaquín", "San Miguel", "San Ramón", "Santiago Centro", "Vitacura"] // Selected Comunas 
  // Don't change anything below
  function selectedRegion() {
    return $.inArray($.trim($("#order_shipping_address_region option:selected").text()), regions) > -1;
  };
  function selectedComuna() {
      return $.inArray($.trim($("#order_shipping_address_municipality option:selected").text()), comunasStgo) > -1;
  };
  
  /////////   Función por región
  function hideFreeShipping() {
    // If not región Metropolitada
    if (!selectedRegion()) {
      // Hide Santiago
      $("#order_shipping_method_109548, #order_shipping_method_94038").parent().css('display','none')
    }else{
    	 $("#order_shipping_method_109548, #order_shipping_method_94038").parent().css('display','block')
    }
  }
  //$(document).ready(hideFreeShipping)
  $("#order_shipping_address_region").change(hideFreeShipping);
  
  /// Función por comuna
	function hideByComuna(){
    let isSantiago = selectedComuna()
    console.log( "Is Santiago" + isSantiago)
    if( isSantiago ){
       // Visible Santiago
       $("#order_shipping_method_109548, #order_shipping_method_94038").parent().css('display','block')
      // Hide Starken
      //$("#order_shipping_method_10120-service").parent().css('display','none')
    } else{
      // Hide Santiago
      $("#order_shipping_method_109548, #order_shipping_method_94038").parent().css('display','none')
      // Visible Starken
     	//$("#order_shipping_method_10120-service").parent().css('display','block')
    }
  }
  $("#order_shipping_address_municipality").change(hideByComuna)
