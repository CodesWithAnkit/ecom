const INITIAL_STATE = {
  sections: [
    {
      title: 'hats',
      imageUrl:
        'https://images.unsplash.com/photo-1563208723-89b0a8cec3a5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1052&q=80',
      id: 1,
      linkUrl: 'shop/hats'
    },
    {
      title: 'jackets',
      imageUrl:
        'https://images.unsplash.com/photo-1551794840-8ae3b9c181f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
      id: 2,
      linkUrl: 'shop/jackets'
    },
    {
      title: 'sneakers',
      imageUrl:
        'https://images.unsplash.com/photo-1527090526205-beaac8dc3c62?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
      id: 3,
      linkUrl: 'shop/sneakers'
    },
    {
      title: 'womens',
      imageUrl:
        'https://images.unsplash.com/photo-1504194921103-f8b80cadd5e4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
      size: 'large',
      id: 4,
      linkUrl: 'shop/womens'
    },
    {
      title: 'mens',
      imageUrl:
        'https://images.unsplash.com/photo-1552085473-429730a886d1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=564&q=80',
      size: 'large',
      id: 5,
      linkUrl: 'shop/mens'
    }
  ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
