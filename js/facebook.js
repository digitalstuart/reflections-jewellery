<script>
		(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.2";
  fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));
  $(function(){
    $(window).resize(function(){
      $('.facebook-wrap').html('<div class="fb-page" data-href="https://www.facebook.com/pages/IFix-And-Repair/242100755854336" data-width="'+$('.facebook-wrap).width()+'" data-height="400px"  data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><div class="fb-xfbml-parse-ignore"><blockquote cite="https://www.facebook.com/pages/IFix-And-Repair/242100755854336"><a href="https://www.facebook.com/pages/IFix-And-Repair/242100755854336">iFixandRepair - Wellington</a></blockquote></div></div>');
      FB.XFBML.parse();
    });
  });
	</script>