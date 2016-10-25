class Model
{
    public static Articles : Array<Article> = new Array<Article>();


    private static RetrieveArticles(callback : Function) : void
    {
        App.Get(App.EndPoint+"/collections/get/Articles", (data) => {
            data = JSON.parse(data);
            data.forEach((e) => {
                Model.Articles.push(new Article(e));
            });
            callback();
        });
    }

    public static Retrieve(callback : Function) : void
    {
        Model.RetrieveArticles(() => {
            callback();
        });
    }
}