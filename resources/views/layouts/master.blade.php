<!doctype html>
<html lang="pt" ng-app="application">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name='author' content='ANGODEV'>
    <meta name='description' content='ANGODEV'>
    <meta name='keywords' content='Angola, tecnologia, informática, informação, artigos, angolanos, treinamento, projectos, serviços'>
    <meta name='viewport' content='width=device-width, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no'>


    <title>Portal AngoDev - @yield('titulo')</title>

    <link href="{{ elixir('css/angodev-final.css') }}" rel="stylesheet">


  </head>

  <body>

@include('includes.menu')

@yield('conteudo')

@yield('rodape')

    <script src="{{ elixir('js/angodev-final.js') }}"></script>

        <script>
          $(document).foundation();
        </script>


  </body>

</html>
