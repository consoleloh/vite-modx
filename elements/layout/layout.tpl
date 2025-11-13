{include 'file:layout/meta/head.tpl'}

<body class="page">
    {include 'file:layout/header.tpl'}
        <div class="page__body">
            {include 'file:layout/sidebar.tpl'}

            {block 'content'}{/block}
        </div>
    {include 'file:layout/footer.tpl'}

{include 'file:layout/meta/scripts.tpl'}