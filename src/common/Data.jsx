export const Data = [
    {
        'title' : 'WP Query',
        'contents' : `$post_type = 'cb_products';        
        $prodQuery = new WP_Query(['post_type'=> $post_type,'post_status'=> 'publish','posts_per_page'=>-1,'order'=>'ASC']);`

    },
    {
        'title' : `Tax Query and WP Query`,
        'contents' : `
        foreach( $terms as $term ) : 
           $argss = array(
               'post_type'         => 'cb_products',
               'post_status'       => 'publish',
               'posts_per_page' => -1,
               'order' => 'ASC',
               'tax_query' => array(
                   array(
                       'taxonomy'  => "product_cat",
                       'field'     => 'term_id',
                       'terms'     => $term->term_id
                   )
               )
           );
         $prodQuery = new WP_Query($argss);`
    },
    {
        'title' : `Custom Field`,
        'contents' : `  the_field('custom_field_name');
        get_field('custom_field_name');`
    },
    {
        'title' : `Get Category`,
        'contents' : `$taxonomy = "project_type"; $dwnTrms = get_terms($taxonomy);`
    },
    {
        'title' : `Mobile Number Validation API`,
        'contents' : `

        https://numlookupapi.com/docs  - api website link 
        <!DOCTYPE html>
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
<script>







  function slide(values){
    $("#"+values.id).next().slideToggle("slow");
  }
</script>
<style> 
.panel, .flip {
  padding: 5px;
  text-align: center;
  background-color: #e5eecc;
  border: solid 1px #c3c3c3;
}

.panel {
  padding: 50px;
  display: none;
}


/*
div ~ p{
  color: red;
}
*/

/*
div p {
  color: red;
}*/
/*

div > p {
  color: red;
}
*/
  /*
  adjucent sibling selector
  div + p {
    color:red;
  }*/
/* general sibling selector
 div ~ p {
  color:red;
 } */
</style>
</head>
<body>
<style>
  .menu-bars{
    width: 200px;
    background: silver;
    list-style: none;
    padding: 8px 12px;
  }

  ul.menu-bars a {
      display: block;
    text-decoration: none;
    color: beige;
}

</style>

  <div class="container">
    <div class="inner-container">
      <div class="Mouse-Me">
        <h2>Nav Bar Menu</h2>
        <ul class="menu-bars">
          <li> <a href="#">Home</a></li>
          <li> <a href="#">About Us</a></li>
          <li> <a href="#">Contact Us</a></li>
          <li> <a href="#">Career</a></li>
        </ul>
      </div>

      <div class="Mouse-Me"></div>

    </div>


  </div>
<div id="wp-query" onclick="slide(this)" class="flip" >WP Query</div>
<div id="wp-content" class="panel">
<pre>
  <button data-test="hello" onclick="window.location.href='https://wa.me/whatsappphonenumber'">Send Message on WhatsApp</button>

  $post_type = 'cb_products';        
  $prodQuery = new WP_Query(['post_type'=> $post_type,'post_status'=> 'publish','posts_per_page'=>-1,'order'=>'ASC']);
</pre>
</div> 

<div id="tax-wp-query" class="flip" onclick="slide(this)">Tax Query and WP Query</div>
<div id="tax-wp-query-content" class="panel">
<pre>
 foreach( $terms as $term ) : 
    $argss = array(
        'post_type'         => 'cb_products',
        'post_status'       => 'publish',
        'posts_per_page' => -1,
        'order' => 'ASC',
        'tax_query' => array(
            array(
                'taxonomy'  => "product_cat",
                'field'     => 'term_id',
                'terms'     => $term->term_id
            )
        )
    );
  $prodQuery = new WP_Query($argss);
</pre>

</div>


<div id="custom_field-query" onclick="slide(this)" class="flip" >Custom Field </div>
<div id="custom_field-content" class="panel">
<pre>
  the_field('custom_field_name');
  get_field('custom_field_name');
</pre>
</div> 
<form method="post" id="otp">
  <input type="text" name='mnumber' placeholder="Enter Your number" />
  <span id="error">error</span>
  <input type="submit" name="submit" value="Submit" />
</form>

<script>
  
$(document ).ready (function(){

  $("#otp").submit(function(e){
    e.preventDefault();
    $("#error").hide();
    const frdata = new FormData(this);
    var mnumber = frdata.get('mnumber');
    if(mnumber.length < 1){
      $("#error").show();
    }else{
      $.ajax({
        type: 'get',
        url: 'https://api.numlookupapi.com/v1/validate/+91 '+mnumber+'/',
        headers: {
          'apikey': 'O30o9KbtahVaoXpWmVBjMsb9V71CmvZr37zpVORV',
        },
        success: function(resp){
          if(resp.valid === true ){
            $("#otp").text(resp.location);
          }else{
           $("#otp").show();
          }

          console.log(resp);
        }                  
      })
    }    

  })

})


</script>
</body>
</html>

        
        `
    },
    {
        'title' : ``,
        'contents' : ``
    },
    {
        'title' : ``,
        'contents' : ``
    },
    {
        'title' : ``,
        'contents' : ``
    },
];