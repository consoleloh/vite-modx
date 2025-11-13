<!doctype html>
<html lang="{$_modx->config.cultureKey}">
<head>
    <title>{$pagetitle}  {$_modx->config.site_name}</title>
    <base href="{$_modx->config.site_url}" />
    <meta charset="{$_modx->config.charset}" />
    {if $_modx->config.site_status}
    <link rel="stylesheet" href="assets/template/style.min.css">
    {else}
    <script type="module" src="http://localhost:5173/@vite/client"></script>
    <link rel="stylesheet" href="http://localhost:5173/scss/style.scss">
    {/if} 
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
</head>