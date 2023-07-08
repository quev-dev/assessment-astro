export default function Post({ innerHTML }) {
  const markup = { __html: innerHTML };
  return <>{innerHTML && <article dangerouslySetInnerHTML={markup}></article>}</>;
}
