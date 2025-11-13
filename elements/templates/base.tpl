{extends 'file:layout/layout.tpl'}

{block 'content'}
    <main class="page__content">
        {$_modx->config.site_name}
    </main>
    {include 'file:chunks/card.tpl'}
{/block}