import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'
import Image from 'next/image'

const Home = ({ posts }) => {
  return (
    <div className="mt-5">
      {posts.map((post, index) => (
        <div className="blog-post border mb-3 p-3" key={index}>
          <h3 className="post-title">{post.frontMatter.title}</h3>
          <p className="post-text">{post.frontMatter.description}</p>
          <p className="post-text">
            <small className="text-muted">{post.frontMatter.date}</small>
          </p>
        </div>
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
