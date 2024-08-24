import imgCard_1 from '../assets/images/blog_1.jpg';
import imgCard_2 from '../assets/images/blog_2.jpg';
import imgCard_3 from '../assets/images/blog_3.jpg';

export function BlogService(){
   return  [
        {
            id: 1,
            title: 'Does my company call for an audit after three years of business operation ?',
            content: 'What kind of questions will I be asked during external auditing?',
            image: imgCard_1,
        },
        {
            id: 2,
            title: 'Lorem Ipsum',
            content: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
            image: imgCard_2,
        },
        {
            id: 3,
            title: 'Lorem Ipsum',
            content: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
            image: imgCard_3,
        },
    ]
}