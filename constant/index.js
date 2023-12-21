import { blogimg1, blogimg2, blogimg3 } from "@/public/images";

export const footerLinks = [
  {
    title: 'Sitemap',
    links: [
      {title: 'Home', href: '/'},
      {title: 'About', href: '#about'},
      {title: 'Services', href: '#services'},
      {title: 'Blog', href: '/Blog'},
      {title: 'Contact', href: '#contact'}
    ]
  },
  {
    title: 'Socials',
    links: [
      {title: 'Facebook', href: '/'},
      {title: 'Instagram', href: '/'},
      {title: 'LinkedIn', href: '/'},
      {title: 'Twitter', href: '/'}
    ]
  }
]

export const navLinks = [
  {href: '/', key:'home', title:'Home'},
  {href: '#about', key:'about', title:'About'},
  {href: '#services', key:'support', title:'Services'},
  {href: '#properties', key:'properties', title:'Properties'},
  {href: '/blog', key:'blog', title:'Blog'},
]

export const getFullYear = () => {
  const currentYear = new Date().getFullYear();
  return currentYear;
}

export const blogPost = [
  {
    image: blogimg1, 
    title: 'Qorem ipsum dolor sit amet, consectetur', 
    name: 'John Doe', 
    date: 'June 28, 2018', 
    text: 'Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'
  },
  {
    image: blogimg2, 
    title: 'Qorem ipsum dolor sit amet, consectetur', 
    name: 'John Doe', 
    date: 'June 28, 2018', 
    text: 'Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'
  },
  {
    image: blogimg1, 
    title: 'Qorem ipsum dolor sit amet, consectetur', 
    name: 'John Doe', 
    date: 'June 28, 2018', 
    text: 'Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'
  },
  {
    image: blogimg3, 
    title: 'Qorem ipsum dolor sit amet, consectetur', 
    name: 'John Doe', 
    date: 'June 28, 2018', 
    text: 'Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'
  },
  {
    image: blogimg1, 
    title: 'Qorem ipsum dolor sit amet, consectetur', 
    name: 'John Doe', 
    date: 'June 28, 2018', 
    text: 'Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'
  },
  {
    image: blogimg2, 
    title: 'Qorem ipsum dolor sit amet, consectetur', 
    name: 'John Doe', 
    date: 'June 28, 2018', 
    text: 'Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'
  },
]