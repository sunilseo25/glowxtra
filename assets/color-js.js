jQuery(document).ready(function() { 
    // jQuery(document).on('click', '.product-item__variant-info .product-swatches-options ul li', function() {
      jQuery(document).on('click', '.product-swatches-options__list li', function() {
      jQuery(this).siblings('li').removeClass('active');
      jQuery(this).addClass('active');
      var media_link = jQuery(this).attr('data-media-link');
     var variant_pro = jQuery(this).closest('.product-item__inner').find('.collection-img').attr('src',media_link);
     var variant_pro_srcset = jQuery(this).closest('.product-item__inner').find('.collection-img').attr('srcset',media_link);
      
    
 //console.log(variant_pro);
    });
});