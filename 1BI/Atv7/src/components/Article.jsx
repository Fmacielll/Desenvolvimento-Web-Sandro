function Article({ post }) {
  return (
    <section className="post-content">
      <h2>{post.titulo}</h2>
      <small>Por {post.autor} • {post.data}</small>
      <p>{post.conteudo}</p>
    </section>
  );
}

export default Article;