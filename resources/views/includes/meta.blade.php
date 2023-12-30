@php
$title = !empty($seometa['title']) ? strip_tags($seometa['title']) : 'devsbrain.com';
$description = !empty($seometa['description']) ? strip_tags($seometa['description']) : 'devsbrain.com';
$seoimage = !empty($seometa['image']) ? $seometa['image'] : asset('images/logo_v4_37.png');
@endphp
<meta name="description" content="@yield('meta.description', $description)" />
@hasSection('meta.keywords')
<meta name="keywords" content="@yield('meta.keywords')" />
@endif
<meta name="author" content="DevsBrain" />
<meta name="copyright" content="DevsBrain" />
<meta name="application-name" content="DevsBrain" />

<meta property="og:title" content="{{$title}}" />
<meta property="og:type" content="website" />
<meta property="og:url" content="{{url()->current()}}" />
<meta property="og:image" content="{{$seoimage}}" />
<meta property="og:description" content="{{$description}}" />

<meta name="twitter:card" content="summary" />
<meta name="twitter:title" content="{{$title}}" />
<meta name="twitter:description" content="{{$description}}" />
<meta name="twitter:image" content="{{$seoimage}}" />
@if(!empty($seometa['canonical']))
<link rel="canonical" href="{{strpos($seometa['canonical'], 'http') !== false ? $seometa['canonical'] : route($seometa['canonical'])}}">
@endif