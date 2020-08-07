import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql, Link } from "gatsby"
import no_image_1 from "../../images/blog/no_image_1.png"
import no_image_2 from "../../images/blog/no_image_2.png"
import no_image_3 from "../../images/blog/no_image_3.png"
import no_image_4 from "../../images/blog/no_image_4.png"
import no_image_5 from "../../images/blog/no_image_5.png"
import { jaccardIndexCompareTwoStrings } from "./relatedPostUtils"

const RelatedPost = (props) => {
  const { currentPost } = props
  
  const postList = useStaticQuery(graphql`
    query relatedPostList {
      allMdx(sort: {fields: [frontmatter___date], order: DESC}) {
        edges {
          node {
            id
            frontmatter {
              title
              category
              description
              tag
              thumbnail {
                childImageSharp {
                  fluid {
                    src
                  }
                }
              }
              author {
                name
              }
            }
            fields {
              slug
              readingTime {
                text
              }
            }
          }
        }
      }
    }
  `)
  // remove current post from posts list
  const data = postList.allMdx.edges
                .map(edges => edges.node)
                .filter(function (node) {
                  return node.fields.slug !== currentPost.fields.slug
                });

  const service = new RelatedPostServices(currentPost, data);
  const relatedPosts = service.getRelatedPosts();
  
  return (
    <>
      <div className="px-3 lg:px-12 pt-12 pb-1 text-2xl text-gray-900 font-semibold">You might also like</div>
      <div className="flex flex-wrap py-5 lg:pt-8 lg:pb-16 justify-center md:justify-start lg:px-5">
        {relatedPosts.map(node => {
          let imagesrc
          if(node.frontmatter && node.frontmatter.thumbnail && node.frontmatter.thumbnail.childImageSharp) {
            imagesrc = node.frontmatter.thumbnail.childImageSharp.fluid.src 
          } else {
            let image_set = [no_image_1, no_image_2, no_image_3, no_image_4, no_image_5]
            imagesrc = image_set[Math.floor(Math.random() * image_set.length)]
          }

          let title = node.frontmatter.title.split(" ").splice(0, 8)
          if(title.length < 8){
            title = title.join(" ")
          } else {
            title = title.join(" ").concat(" ...")
          }

          let description = node.frontmatter.description.split(" ").splice(0, 34)
          if(description.length < 34){
            description = description.join(" ")
          } else {
            description = description.join(" ").concat(" ...")
          }

          const classes = "group-hover:hidden text-gray-100 font-bold transition duration-500"

          return (
            <Link className="w-10/12 md:w-1/3 lg:w-3/10 mx-3 lg:mx-5 my-6 lg:px-2" to={node.fields.slug} key={node.id}>
              <div style={{backgroundImage: `url(${imagesrc})`, backgroundSize: "cover", backgroundPosition: "center", borderRadius: "15px", maxHeight: "600px"}} className="group text-left relative shadow-c1 hover:shadow-c2 rounded-lg min-h-60 md:min-h-40 lg:min-h-60 2xl:min-h-40 transform hover:scale-105 transition duration-500">
                <div className="min-h-60 md:min-h-40 lg:min-h-60 2xl:min-h-40 w-full p-6 transition duration-700 bg-black-25 group-hover:bg-black-75 relative" style={{borderRadius: "15px", maxHeight: "600px"}}>
                  <div className="absolute pt-8 lg:pt-16 2xl:pt-24 px-3 lg:px-8 overflow-hidden top-0 left-0" style={{maxWidth: '97%', textShadow: '0px 1px 7px #757575'}}>
                    <h1 className="group-hover:-translate-y-8 text-white font-bold leading-7 text-2xl transform transition duration-100">
                      {title}
                    </h1>  
                    {/* <h1 className="group-hover:hidden text-gray-100 leading-7 my-4 font-bold text-lg transition duration-500">
                      {node.frontmatter.author.map((author, i, arr) => {
                        return ( (arr.length-1) === i ? author.name : author.name.concat(", "))
                      })}
                    </h1> */}
                    <h1 className={`${classes} mt-4`}>
                      CAT: &nbsp;
                      {node.frontmatter.category[0].toUpperCase()}
                    </h1>
                    <h1 className={`${classes} `}>
                      TAG: &nbsp;{node.frontmatter.tag.map((tag, i, arr) => {
                        return ( i < 3 && arr.length - 1 === i ? tag.toUpperCase() : tag.toUpperCase().concat(", ")  )
                      })}
                      {node.frontmatter.tag.length > 3 && <p className="inline-block text-white"> +{node.frontmatter.tag.length - 3} more</p>}
                    </h1>
                    <h1 className={`${classes} text-white leading-7 mt-4 text-lg`}>
                      {node.fields.readingTime.text}
                    </h1>
                    <p className="hidden group-hover:block my-4 text-xxs text-gray-500 w-full font-semibold transform group-hover:-translate-y-12 transition duration-500">{node.fields.slug.slice(5,).toUpperCase()}</p>
                    <h1 className="hidden group-hover:block text-white leading-5 text-lg py-3 transform group-hover:-translate-y-12 transition duration-500">{description}</h1>      
                  </div>
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </>
  )
}

export default RelatedPost;

RelatedPost.propTypes = {
  currentPost: PropTypes.any,
}



class RelatedPostServices {
  constructor (currentPost, posts) {
    this.posts = posts;
    this.maxPosts = 3;
    this.title = currentPost.frontmatter.title;
    this.description = currentPost.frontmatter.description;
    this.category = currentPost.frontmatter.category;
    this.tags = currentPost.frontmatter.tag;
  }

  setMaxPosts (number) {
    this.maxPosts = number;
    return this;
  }

  setTitle (title) {
    this.title = title;
    return this;
  }

  setDescription (des) {
    this.description = des;
    return this;
  }

  setCategory (cat) {
    this.category = cat;
    return this;
  }

  setTag (tag) {
    this.tags = tag;
    return this;
  }

  getRelatedPosts () {
    /* point-based system
    * title
    * description
    * category
    * tags
    * 
    * Loop each articles, based on simiarity give some score
    * return top 3 (or number of posts set)
    */
    const { posts, category, tags, maxPosts, title, description } = this;
    const catPoint = 2;
    const tagPoint = 1;
    const titlePoint = 3;
    const descriptionPoint = 3;

    function addCategoryPoints (currPost) {
      currPost.frontmatter.category.forEach((cat) => {
        if(category.includes(cat)) {
          currPost.point += catPoint;
        }
      })
    }

    function addTagPoints (currPost) {
      currPost.frontmatter.tag.forEach((tag) => {
        if(tags.includes(tag)) {
          currPost.point += tagPoint;
        }
      })
    }

    function addTitlePoints (currPost) {
      let score = jaccardIndexCompareTwoStrings(title, currPost.frontmatter.title);
      currPost.point += (titlePoint*score);
    }

    function addDescriptionPoints (currPost) {
      let score = jaccardIndexCompareTwoStrings(description, currPost.frontmatter.description);
      currPost.point += (descriptionPoint*score);
    }

    function sortByPoint (a, b) {
      // sort desc by points
      if (a.point < b.point) return 1;
      if (a.point > b.point) return -1;
      return 0;
    }

    for (const postPos in posts) {
      // get current post and initialise the point
      const currPost = posts[postPos];
      currPost.point = 0;
      
      // add points to current post
      addCategoryPoints(currPost);
      addTagPoints(currPost);
      addTitlePoints(currPost);
      addDescriptionPoints(currPost);
    }

    return posts.sort(sortByPoint).slice(0, maxPosts);
  }

}