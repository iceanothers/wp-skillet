<?php get_header(); ?>
<section class="content">
    <div class="container">
        <aside>

        </aside>
        <article>
        <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
            <div class="post">
                <?php if (has_post_thumbnail()) { ?>
                    <figure>
                        <?php the_post_thumbnail(); ?>
                    </figure>
                    <div class="info">
                        <h3><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h3>
                        <time datetime="<?php echo get_the_date('Y-m-d'); ?>"><?php echo get_the_date(get_option('date_format_custom')); ?></time>
                        <?php echo short_text($post_id, 50); ?>
                        <a class="read" href="<?php the_permalink(); ?>">Read more ></a>
                    </div>
                <?php } ?>
            </div>
        <?php endwhile; endif; ?>
        </article>
    </div>
</section>
<?php get_footer(); ?>