import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '2ae'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5c3'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '5c8'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '10c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '90a'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '8fd'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '84a'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', '697'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '1d6'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '239'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', '1fe'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', '2fe'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '80a'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', '743'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', '9c3'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '696'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', 'd50'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', 'a1a'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', 'd73'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '677'),
    routes: [
      {
        path: '/docs/',
        component: ComponentCreator('/docs/', '621'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/aws/amplify',
        component: ComponentCreator('/docs/aws/amplify', '681'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/aws',
        component: ComponentCreator('/docs/category/aws', 'd26'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/code',
        component: ComponentCreator('/docs/category/code', '0f8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/design-systems',
        component: ComponentCreator('/docs/category/design-systems', '056'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/javascript',
        component: ComponentCreator('/docs/category/javascript', 'bb0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/leadership',
        component: ComponentCreator('/docs/category/leadership', '691'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/naming-conventions',
        component: ComponentCreator('/docs/category/naming-conventions', 'a4f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/network',
        component: ComponentCreator('/docs/category/network', '258'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/resources',
        component: ComponentCreator('/docs/category/resources', '0c2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/tools',
        component: ComponentCreator('/docs/category/tools', '50b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/utils',
        component: ComponentCreator('/docs/category/utils', 'b2e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/version-control',
        component: ComponentCreator('/docs/category/version-control', '4f8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/code/css',
        component: ComponentCreator('/docs/code/css', '223'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/code/html',
        component: ComponentCreator('/docs/code/html', '159'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/code/javascript/',
        component: ComponentCreator('/docs/code/javascript/', 'c0d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/code/javascript/javascript-objects',
        component: ComponentCreator('/docs/code/javascript/javascript-objects', '9eb'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/code/javascript/javscript-url-manipulation',
        component: ComponentCreator('/docs/code/javascript/javscript-url-manipulation', '2a8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/code/markdown',
        component: ComponentCreator('/docs/code/markdown', 'b9d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/code/typescript',
        component: ComponentCreator('/docs/code/typescript', '357'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/designsystems/',
        component: ComponentCreator('/docs/designsystems/', '205'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/designsystems/resources',
        component: ComponentCreator('/docs/designsystems/resources', '467'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/designsystems/terminology',
        component: ComponentCreator('/docs/designsystems/terminology', '3ec'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/designsystems/ui-component-libraries',
        component: ComponentCreator('/docs/designsystems/ui-component-libraries', 'a1f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/inspiration',
        component: ComponentCreator('/docs/inspiration', '575'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/leadership/servant-leadership',
        component: ComponentCreator('/docs/leadership/servant-leadership', '2c4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/naming/events',
        component: ComponentCreator('/docs/naming/events', '566'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/network/router',
        component: ComponentCreator('/docs/network/router', '456'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/resources/links',
        component: ComponentCreator('/docs/resources/links', '26c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tools/docker',
        component: ComponentCreator('/docs/tools/docker', '206'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tools/eslint',
        component: ComponentCreator('/docs/tools/eslint', '543'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tools/mermaid',
        component: ComponentCreator('/docs/tools/mermaid', 'a36'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tools/prettier',
        component: ComponentCreator('/docs/tools/prettier', '6b1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/utils/process',
        component: ComponentCreator('/docs/utils/process', '997'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/versioncontrol/github',
        component: ComponentCreator('/docs/versioncontrol/github', '463'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/docs-code',
    component: ComponentCreator('/docs-code', '067'),
    routes: [
      {
        path: '/docs-code/',
        component: ComponentCreator('/docs-code/', '45d'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/docs-prep',
    component: ComponentCreator('/docs-prep', '7b7'),
    routes: [
      {
        path: '/docs-prep/',
        component: ComponentCreator('/docs-prep/', '571'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs-prep/algorithms/',
        component: ComponentCreator('/docs-prep/algorithms/', '9da'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs-prep/algorithms/big-o',
        component: ComponentCreator('/docs-prep/algorithms/big-o', '718'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs-prep/algorithms/cache/lru-cache',
        component: ComponentCreator('/docs-prep/algorithms/cache/lru-cache', '885'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs-prep/algorithms/general/caesar-cipher',
        component: ComponentCreator('/docs-prep/algorithms/general/caesar-cipher', 'f3c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs-prep/algorithms/general/fizz-buzz',
        component: ComponentCreator('/docs-prep/algorithms/general/fizz-buzz', 'c06'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs-prep/algorithms/general/is-palindrome',
        component: ComponentCreator('/docs-prep/algorithms/general/is-palindrome', 'a20'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs-prep/algorithms/general/ransom-note',
        component: ComponentCreator('/docs-prep/algorithms/general/ransom-note', '42e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs-prep/algorithms/general/reverse-array-in-place',
        component: ComponentCreator('/docs-prep/algorithms/general/reverse-array-in-place', '5dc'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs-prep/algorithms/general/reverse-words',
        component: ComponentCreator('/docs-prep/algorithms/general/reverse-words', '722'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs-prep/algorithms/helpers/string-reversal',
        component: ComponentCreator('/docs-prep/algorithms/helpers/string-reversal', '7fa'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs-prep/algorithms/logarithms',
        component: ComponentCreator('/docs-prep/algorithms/logarithms', '730'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs-prep/algorithms/search/',
        component: ComponentCreator('/docs-prep/algorithms/search/', 'c1e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs-prep/algorithms/search/binary-search',
        component: ComponentCreator('/docs-prep/algorithms/search/binary-search', '470'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs-prep/algorithms/search/linear-search',
        component: ComponentCreator('/docs-prep/algorithms/search/linear-search', '2e4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs-prep/algorithms/sort/',
        component: ComponentCreator('/docs-prep/algorithms/sort/', '5bc'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs-prep/algorithms/sort/bubble-sort',
        component: ComponentCreator('/docs-prep/algorithms/sort/bubble-sort', '312'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs-prep/algorithms/sort/insertion-sort',
        component: ComponentCreator('/docs-prep/algorithms/sort/insertion-sort', 'c9a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs-prep/algorithms/sort/merge-sort',
        component: ComponentCreator('/docs-prep/algorithms/sort/merge-sort', 'ac2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs-prep/algorithms/time-and-space-complexity',
        component: ComponentCreator('/docs-prep/algorithms/time-and-space-complexity', '694'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs-prep/behavioral/evaluation',
        component: ComponentCreator('/docs-prep/behavioral/evaluation', '86d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs-prep/behavioral/general-questions',
        component: ComponentCreator('/docs-prep/behavioral/general-questions', 'c95'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs-prep/behavioral/leveling',
        component: ComponentCreator('/docs-prep/behavioral/leveling', 'b62'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs-prep/behavioral/manager-questions',
        component: ComponentCreator('/docs-prep/behavioral/manager-questions', '8d8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs-prep/category/algorithm-helpers',
        component: ComponentCreator('/docs-prep/category/algorithm-helpers', '0c9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs-prep/category/behavioral',
        component: ComponentCreator('/docs-prep/category/behavioral', '4ef'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs-prep/category/cache-algorithms',
        component: ComponentCreator('/docs-prep/category/cache-algorithms', 'dac'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs-prep/category/concepts',
        component: ComponentCreator('/docs-prep/category/concepts', '834'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs-prep/category/front-end',
        component: ComponentCreator('/docs-prep/category/front-end', '1ba'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs-prep/category/general-algorithms',
        component: ComponentCreator('/docs-prep/category/general-algorithms', '836'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs-prep/category/html',
        component: ComponentCreator('/docs-prep/category/html', 'ac7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs-prep/category/javascript',
        component: ComponentCreator('/docs-prep/category/javascript', '6f6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs-prep/category/search-algorithms',
        component: ComponentCreator('/docs-prep/category/search-algorithms', '5d6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs-prep/category/sort-algorithms',
        component: ComponentCreator('/docs-prep/category/sort-algorithms', '6d1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs-prep/category/system-design',
        component: ComponentCreator('/docs-prep/category/system-design', '44c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs-prep/data-structures/',
        component: ComponentCreator('/docs-prep/data-structures/', '3d8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs-prep/data-structures/binary-search-tree/',
        component: ComponentCreator('/docs-prep/data-structures/binary-search-tree/', '381'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs-prep/data-structures/binary-search-tree/breadth-first-search',
        component: ComponentCreator('/docs-prep/data-structures/binary-search-tree/breadth-first-search', 'b47'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs-prep/data-structures/binary-search-tree/depth-first-search',
        component: ComponentCreator('/docs-prep/data-structures/binary-search-tree/depth-first-search', 'fdf'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs-prep/data-structures/hash-table',
        component: ComponentCreator('/docs-prep/data-structures/hash-table', '979'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs-prep/data-structures/linked-list',
        component: ComponentCreator('/docs-prep/data-structures/linked-list', '556'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs-prep/front-end/browser-storage',
        component: ComponentCreator('/docs-prep/front-end/browser-storage', '493'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs-prep/front-end/css',
        component: ComponentCreator('/docs-prep/front-end/css', '348'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs-prep/front-end/data-retrieval',
        component: ComponentCreator('/docs-prep/front-end/data-retrieval', '892'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs-prep/front-end/dom',
        component: ComponentCreator('/docs-prep/front-end/dom', '3da'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs-prep/front-end/html/semantics',
        component: ComponentCreator('/docs-prep/front-end/html/semantics', '567'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs-prep/front-end/http',
        component: ComponentCreator('/docs-prep/front-end/http', '941'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs-prep/front-end/performance/',
        component: ComponentCreator('/docs-prep/front-end/performance/', 'cf0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs-prep/front-end/performance/performance-images',
        component: ComponentCreator('/docs-prep/front-end/performance/performance-images', 'e3b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs-prep/front-end/system-design/radio',
        component: ComponentCreator('/docs-prep/front-end/system-design/radio', '967'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs-prep/javascript/',
        component: ComponentCreator('/docs-prep/javascript/', 'acd'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs-prep/javascript/concepts/constructor-functions',
        component: ComponentCreator('/docs-prep/javascript/concepts/constructor-functions', '726'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs-prep/javascript/concepts/currying',
        component: ComponentCreator('/docs-prep/javascript/concepts/currying', 'f75'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs-prep/javascript/concepts/factory-functions',
        component: ComponentCreator('/docs-prep/javascript/concepts/factory-functions', 'a15'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs-prep/javascript/concepts/javascript-closures',
        component: ComponentCreator('/docs-prep/javascript/concepts/javascript-closures', 'dad'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs-prep/javascript/concepts/javascript-hoisting',
        component: ComponentCreator('/docs-prep/javascript/concepts/javascript-hoisting', '142'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs-prep/javascript/concepts/javascript-scope',
        component: ComponentCreator('/docs-prep/javascript/concepts/javascript-scope', 'a91'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs-prep/javascript/concepts/javascript-this-call-apply',
        component: ComponentCreator('/docs-prep/javascript/concepts/javascript-this-call-apply', '647'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs-prep/javascript/concepts/recursion',
        component: ComponentCreator('/docs-prep/javascript/concepts/recursion', '983'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs-prep/javascript/event-loop',
        component: ComponentCreator('/docs-prep/javascript/event-loop', 'd09'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs-prep/javascript/javascript-arrays',
        component: ComponentCreator('/docs-prep/javascript/javascript-arrays', '147'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs-prep/javascript/javascript-classes',
        component: ComponentCreator('/docs-prep/javascript/javascript-classes', 'b05'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs-prep/javascript/javascript-data-structures',
        component: ComponentCreator('/docs-prep/javascript/javascript-data-structures', '2f1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs-prep/javascript/javascript-map',
        component: ComponentCreator('/docs-prep/javascript/javascript-map', '39c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs-prep/javascript/javascript-prototype',
        component: ComponentCreator('/docs-prep/javascript/javascript-prototype', '464'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs-prep/javascript/javascript-questions',
        component: ComponentCreator('/docs-prep/javascript/javascript-questions', '2a3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs-prep/javascript/javascript-set',
        component: ComponentCreator('/docs-prep/javascript/javascript-set', '997'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs-prep/javascript/javascript-terms',
        component: ComponentCreator('/docs-prep/javascript/javascript-terms', '883'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs-prep/random/',
        component: ComponentCreator('/docs-prep/random/', 'c25'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs-prep/random/dynamic',
        component: ComponentCreator('/docs-prep/random/dynamic', '3ac'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs-prep/random/pointers-in-c',
        component: ComponentCreator('/docs-prep/random/pointers-in-c', '1d8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs-prep/react/',
        component: ComponentCreator('/docs-prep/react/', '6aa'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs-prep/react/react-hooks',
        component: ComponentCreator('/docs-prep/react/react-hooks', '91c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs-prep/technical/',
        component: ComponentCreator('/docs-prep/technical/', 'c9d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs-prep/technical/coding',
        component: ComponentCreator('/docs-prep/technical/coding', '45d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs-prep/technical/coding-event-emitter',
        component: ComponentCreator('/docs-prep/technical/coding-event-emitter', '7e0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs-prep/technical/coding-first-duplicate-in-array',
        component: ComponentCreator('/docs-prep/technical/coding-first-duplicate-in-array', '0a3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs-prep/technical/coding-flatten-array',
        component: ComponentCreator('/docs-prep/technical/coding-flatten-array', '4a0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs-prep/technical/coding-reduce-function',
        component: ComponentCreator('/docs-prep/technical/coding-reduce-function', '8dc'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs-prep/technical/coding-rotate-image-in-place',
        component: ComponentCreator('/docs-prep/technical/coding-rotate-image-in-place', 'b81'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs-prep/technical/coding-spiral-2d-array',
        component: ComponentCreator('/docs-prep/technical/coding-spiral-2d-array', 'bb6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs-prep/technical/count-unique-words-in-array',
        component: ComponentCreator('/docs-prep/technical/count-unique-words-in-array', 'd84'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs-prep/technical/first-unique-character-in-string-lc387',
        component: ComponentCreator('/docs-prep/technical/first-unique-character-in-string-lc387', 'c30'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs-prep/technical/kth-largest-element-lc215',
        component: ComponentCreator('/docs-prep/technical/kth-largest-element-lc215', '23c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs-prep/technical/merge-k-sorted-lists',
        component: ComponentCreator('/docs-prep/technical/merge-k-sorted-lists', '0c1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs-prep/technical/merge-sorted-array-lc88',
        component: ComponentCreator('/docs-prep/technical/merge-sorted-array-lc88', 'c8d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs-prep/technical/merge-two-sorted-lists-lc21',
        component: ComponentCreator('/docs-prep/technical/merge-two-sorted-lists-lc21', '19d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs-prep/technical/most-common-substring',
        component: ComponentCreator('/docs-prep/technical/most-common-substring', 'dde'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs-prep/technical/two-sum-lc1',
        component: ComponentCreator('/docs-prep/technical/two-sum-lc1', '6fa'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs-prep/technical/word-search-lc79',
        component: ComponentCreator('/docs-prep/technical/word-search-lc79', 'c8f'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '8a2'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
