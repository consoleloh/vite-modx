{include 'file:layout/meta/head.tpl'}

<body class="page">
    {include 'file:layout/header.tpl'}
        <div class="page__body">
            {block 'content'}{/block}
                
            {include 'file:layout/sidebar.tpl'}
        </div>
    {include 'file:layout/footer.tpl'}

{include 'file:layout/meta/scripts.tpl'}