<?php echo '<?xml version="1.0" encoding="UTF-8"?>'; ?>

<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>

      <loc>{{ url('/') }}</loc>

      <lastmod>2023-12-01</lastmod>

      <changefreq>monthly</changefreq>

      <priority>0.8</priority>

   </url>
   @foreach($services as $service)
   <url>

    <loc>{{ url('/') }}/all-services</loc>
    <lastmod>{{ $service->created_at }}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>

   </url>
   @endforeach
    @foreach($services as $service)
   <url>

      <loc>{{ url('/') }}/services/{{ $service->slug }}</loc>
      <lastmod>{{ $service->created_at }}</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.8</priority>

   </url>
   @endforeach
   @foreach($portfolios as $portfolio)
   <url>

      <loc>{{ url('/') }}/all-portfolios</loc>
      <lastmod>{{ $portfolio->created_at }}</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.8</priority>

   </url>
   @endforeach
    @foreach($portfolios as $portfolio)
   <url>

      <loc>{{ url('/') }}/portfolios/{{ $portfolio->slug }}</loc>
      <lastmod>{{ $portfolio->created_at }}</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.8</priority>

   </url>
   @endforeach
   @foreach($blogs as $blog)
   <url>

      <loc>{{ url('/') }}/all-blogs</loc>
      <lastmod>{{ $blog->created_at }}</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.8</priority>

   </url>
   @endforeach
    @foreach($blogs as $blog)
   <url>

      <loc>{{ url('/') }}/blogs/{{ $blog->id }}</loc>
      <lastmod>{{ $blog->created_at }}</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.8</priority>

   </url>
   @endforeach
   <url>

      <loc>{{ url('/') }}/tools/twitch-emote-resizer</loc>
      <lastmod>2023-12-01</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.8</priority>

   </url>
   <url>

      <loc>{{ url('/') }}/tools/area-calculator</loc>
      <lastmod>2023-12-01</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.8</priority>

   </url>
   <url>

      <loc>{{ url('/') }}/tools/email-extractor</loc>
      <lastmod>2023-12-01</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.8</priority>

   </url>
   <url>

      <loc>{{ url('/') }}/tools/image-converter</loc>
      <lastmod>2023-12-01</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.8</priority>

   </url>
   <url>

      <loc>{{ url('/') }}/contact-us</loc>
      <lastmod>2023-12-01</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.8</priority>

   </url>
   <url>

      <loc>{{ url('/') }}/privacy</loc>
      <lastmod>2023-12-01</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.8</priority>

   </url>
</urlset> 