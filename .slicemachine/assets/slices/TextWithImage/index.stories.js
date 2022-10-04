import MyComponent from '../../../../slices/TextWithImage';

export default {
  title: 'slices/TextWithImage'
}


export const _Default = () => <MyComponent slice={{"variation":"default","version":"sktwi1xtmkfgx8626","items":[{}],"primary":{"text":[{"type":"heading1","text":"Began","spans":[]},{"type":"paragraph","text":"Consectetur aliqua irure commodo duis qui magna ut sint sunt dolor Lorem est in Lorem sit.","spans":[]}],"image":{"dimensions":{"width":1000,"height":1200},"alt":null,"copyright":null,"url":"https://images.prismic.io/nextjs-starter-prismic-multi-page/fcb2333d-d2b2-4cdc-acdd-f9558703472d_anders-jilden-Sc5RKXLBjGg-unsplash.jpg"}},"slice_type":"text_with_image","id":"_Default"}} />
_Default.storyName = ''

export const _WithButton = () => <MyComponent slice={{"variation":"withButton","version":"sktwi1xtmkfgx8626","items":[{}],"primary":{"text":[{"type":"paragraph","text":"Cupidatat aliquip ea fugiat eiusmod excepteur in.","spans":[]}],"buttonLink":{"link_type":"Web","url":"https://prismic.io"},"buttonText":"curve","image":{"dimensions":{"width":900,"height":500},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1607582278043-57198ac8da43"}},"slice_type":"text_with_image","id":"_WithButton"}} />
_WithButton.storyName = ''

export const _TextRight = () => <MyComponent slice={{"variation":"textRight","version":"sktwi1xtmkfgx8626","items":[{}],"primary":{"text":[{"type":"paragraph","text":"Eu do enim eu excepteur amet cillum id ea consequat est excepteur irure cupidatat aliqua commodo. Minim laboris sit exercitation esse ad sit Lorem eiusmod veniam aliquip magna cupidatat sint aute.","spans":[]}],"image":{"dimensions":{"width":1000,"height":1200},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"}},"slice_type":"text_with_image","id":"_TextRight"}} />
_TextRight.storyName = ''
