import { DiscussionEmbed } from "disqus-react"

;<DiscussionEmbed
  shortname="example"
  config={{
    url: this.props.article.url,
    identifier: this.props.article.id,
    title: this.props.article.title,
    language: "zh_TW",
  }}
/>
