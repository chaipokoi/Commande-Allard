class ArticleComponent extends Component
{
    private article : Article;

    constructor(article : Article)
    {
        super({
            body : "\<img class='thumbnail' src='{{picture}}'>\
                <div class='content'>\
                    <p>{{description}}</p>\
                </div>\
                <button class='more'>\
                    Lire la suite...\
                </button>\
                ", 
            classes : "item Article"
        })
        this.article = article;

    }

    public Mount(parent : Component) : void
    {
        let opts : any = {
            picture : this.article.Picture(), 
            description : this.article.Description()
        }
        super.Mount(parent, opts);
        this.GetDOM().setAttribute("data-title", this.article.Title());

        // Ajout de l'action au clic
        this.GetDOM().getElementsByTagName("button")[0].addEventListener("click", () => {
            new ArticleFocusView(this.article).Show();
        });

    }



}