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
    {
        'title' : ``,
        'contents' : ``
    },
];