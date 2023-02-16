$(document).ready(function(){
	// Mobile Menu
	$('.mobile_menu').click(function(){
		$('.left_site_main').show();
		$('.mobile_menu').hide();
		$('.right_site_main').removeClass('right_site_main_width');

		return false
	});

	$('.left_site_hide_btn').click(function(){
		$('.left_site_main').hide();
		$('.mobile_menu').show();
		$('.right_site_main').addClass('right_site_main_width');

		return false
	});

	// Mobile Menu(Connect Wallet)
	$('.lstabs_dropdown').click(function(){
		$('.btnimgfl').toggleClass('btnimgfltoggle');

		return false
	});

	// Banner Carousel
	// $('.banner_carousel').owlCarousel({
	// 	items:1,
	// 	loop:true,
	// 	nav:true,
	// 	dots:true,
	// 	autoplay:true,
	// });


	// Mobile Menu Icon
	$(document).ready(function(){
		$('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
			$(this).toggleClass('open');
		});
	});



	// start dynamic tab set when reload the tab 
	$(document).ready(function(){
		$('.nav-link').click(function(){
			var data_attr = $(this).attr('aria-controls'); 
			var data_attr_id = $(this).attr('id'); 
			sessionStorage.setItem("data_attr", data_attr);  
			sessionStorage.setItem("attr_id", data_attr_id);  
		}); 
		var attr_id =  sessionStorage.getItem("attr_id");  
		var data_attr = sessionStorage.getItem("data_attr"); 
		if(attr_id || data_attr)  { 
			$('#'+attr_id).addClass('active'); 
			$('#'+data_attr).addClass('show active');
		}else{
			$('#v-pills-home-tab').addClass('active'); 
			$('#v-pills-home').addClass('show active');
		}
	});
	// end dynamic tab set when reload the tab 

	// start button click and trigger  
	$(document).on('click','#start_mining_btn',function(){
		$('#v-pills-messages-tab').trigger('click');
	});
	$(document).on('click','#exchange_btn',function(){
		$('#v-pills-exchange-tab').trigger('click');
	}); 
	$(document).on('click','#join_fair_launch_btn',function(){
		$('#v-pills-profile-tab').trigger('click');
	}); 
	$(document).on('click','#swap_btn',function(){
		$('#v-pills-swap-tab').trigger('click');
	}); 
	$(document).on('click','#chain_swaps_btn',function(){
		$('#v-pills-chainswap-tab').trigger('click');
	}); 
	$(document).on('click','#token_bridge_btn',function(){
		$('#v-pills-tokenbridge-tab').trigger('click');
	}); 
	$(document).on('click','#arb_oppertunity_btn',function(){
		$('#v-pills-arbopportunity-tab').trigger('click');
	}); 
	$(document).on('click','#nft_mining_btn',function(){
		$('#v-pills-nftmining-tab').trigger('click');
	}); 
	$(document).on('click','#nft_market_btn',function(){
		$('#v-pills-nftmarket-tab').trigger('click');
	}); 
	$(document).on('click','#token_gated_contents_btn',function(){
		$('#v-pills-tokengatedcontents-tab').trigger('click');
	}); 
	$(document).on('click','#metaverse_btn',function(){
		$('#v-pills-metaverse-tab').trigger('click');
	}); 
	$(document).on('click','#nft_staking_btn',function(){
		$('#v-pills-nftstaking-tab').trigger('click');
	}); 
	$(document).on('click','#locked_staking_btn',function(){
		$('#v-pills-settings-tab').trigger('click');
	}); 
	$(document).on('click','#margin_trade_btn',function(){
		$('#v-pills-margintrade-tab').trigger('click');
	}); 
	$(document).on('click','#lending_borrowing_btn',function(){
		$('#v-pills-lendborrow-tab').trigger('click');
	}); 
	// End button click and trigger 




});