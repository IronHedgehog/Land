import TextBlock from '../TextBlock/TextBlock';
import s from './Blog.module.scss';

import BlogBG from './BlogBG/BlogBG';

const Blog = () => {
  return (
    <section className={s.blog__section}>
      <BlogBG />
      <TextBlock
        type={'2'}
        text1={'April 16 2020'}
        title={'Blog Post One'}
        text2={
          'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate,ipsum dignissimos quae laudantium asperiores nam aliquid impedit harum,illum dolore explicabo ab dolores itaque rerum temporibus doloribus,iste maiores deleniti?'
        }
        button_text={'Read our blog'}
      />
    </section>
  );
};

export default Blog;
