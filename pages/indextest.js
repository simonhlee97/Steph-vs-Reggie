import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'
import Image from 'next/image'

const Home = ({ posts }) => {
  return (
    <div className="mt-5">
      {posts.map((post, index) => (
        <Link
          className="cursor"
          href={'/blog/' + post.slug}
          passHref
          key={index}
        >
          <div className="opacity-10 mb-3 cursor">
            <h5 className="card-title">{post.frontMatter.title}</h5>
            <p className="card-text">{post.frontMatter.description}</p>
            <p className="card-text">
              <small className="text-muted">{post.frontMatter.date}</small>
            </p>
            {/* <Image
              src={post.frontMatter.thumbnailUrl}
              className="img-fluid mt-1 rounded-start"
              alt="thumbnail"
              width={300}
              height={300}
              objectFit="cover"
            /> */}
          </div>
        </Link>
      ))}
    </div>
  )
}

export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join('posts'))

  const posts = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join('posts', filename),
      'utf-8'
    )
    const { data: frontMatter } = matter(markdownWithMeta)

    return {
      frontMatter,
      slug: filename.split('.')[0]
    }
  })

  return {
    props: {
      posts
    }
  }
}

export default Home
