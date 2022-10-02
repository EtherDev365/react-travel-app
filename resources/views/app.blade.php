<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>HOME | {{ config('app.name') }} | Booking Flights</title>
    <meta name="description" content="Booking site for flights, hotels, cruises, cars, jets and yachts">
    <meta name="copyright" content="Koyap" />
    <meta name="keywords" content="Booking, Flights, Hotels, Cruises, Cars, Yachts, Jet, Travel, Explore, Koyap" />
    <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests">
    <link rel="canonical" href="https://koyap.com/">

    <!-- Favicon -->
    <link rel="shortcut icon" href="{{ url(asset('favicon.png')) }}">

    <!-- Fonts -->
    <!-- <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet"> -->

    <!-- Styles -->
    <link rel="stylesheet" href="{{ url(mix('css/app.css')) }}">

    <!-- Scripts -->
    <!-- Include Frontend Application (webpack mix) -->
    <script src="{{ url(mix('js/manifest.js')) }}" defer></script>
    <script src="{{ url(mix('js/vendor.js')) }}" defer></script>
    <script src="{{ url(mix('js/app.js')) }}" defer></script>
    <!-- <script defer src="/js/manifest.js"></script>
    <script defer src="/js/vendor.js"></script>
    <script defer src="/js/app.js"></script> -->

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
</head>

<body class="antialiased">
    <div id='root'>
    </div>
</body>

</html>