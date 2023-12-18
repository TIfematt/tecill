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
  {href: '#properties', key:'support', title:'Properties'},
  {href: '/blog', key:'blog', title:'Blog'},
]

export const getFullYear = () => {
  const currentYear = new Date().getFullYear();
  return currentYear;
}