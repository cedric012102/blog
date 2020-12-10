// import React, { useReducer } from 'react';
import createDataContext from './createDataContext';

// const BlogContext = React.createContext(); d
//deleted because we created createDataContext.js

// export const BlogProvider = ({ children }) => {
//     const [blogPosts, dispatch] = useReducer(blogReducer, []);
//deleted because we created createDataContext.js

const blogReducer = (state, action) => {
    switch(action.type) {
        case 'add_blogpost':
            return [...state, { title: `Blog Post #${state.length + 1}`}];
            default: 
            return state;
    }
};




    const addBlogPost = (dispatch) => {
        return () => {
        dispatch({ type: 'add_blogpost'});
        };
    };

    // const addBlogPost = () => {
    //     setBlogPosts([...blogPosts, { title: `Blog Post #${blogPosts.length + 1}` }]);
    // }
  
       
    
//     return (
//     <BlogContext.Provider value={{ data: blogPosts, addBlogPost }}>
//         {children}
//     </BlogContext.Provider>
//     );
// };
//deleted because we created createDataContext.js

// export default BlogContext; 
//deleted because we created createDataContext.js

export const { Context, Provider } = createDataContext(blogReducer, 
    { addBlogPost},
    []
     );