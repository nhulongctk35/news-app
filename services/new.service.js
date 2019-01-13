const newService = {
  getAlls: (source = 'abc-news-au') =>
    fetch(
      `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=0d58e43fbcb84b7a9c89ab2960d6691c`
    )
      .then(res => res.json())
      .then(data => data.articles),
};

export default newService;
