import images from "./images";


const wines=[
    {
        id:1,
        title:'Chapel Hill Sharez',
        Price:'$56',
        tags:'AU | Bottle'
    },
    {
        id:2,
        title:'Catena Malbee',
        Price:'$59',
        tags:'AU | Bottle'
    },
    {
        id:3,
        title:'La Viellw Rose',
        Price:'$71',
        tags:'FR | 750ml'
    },
    {
        id:4,
        title:'Rhino',
        Price:'$48',
        tags:'CA | 750ml'
    },
    {
        id:5,
        title:'Dark N Stormy',
        Price:'$25',
        tags:'Dark Rum | Ginger beer | Slice of lime'
    }
];

const cocktails =[
    {
        id:1,
        title:'Aperol Sprtiz',
        Price:'$23',
        tags:'IE | Villa Marchesi Prosecco | soda | 30ml'
    },
    {
        id:2,
        title:'Dark & Stormy',
        Price:'$18',
        tags:'Dark rum | Ginger beer | slce of lime'
    },
    {
        id:3,
        title:'Chapel Hill Sharez',
        Price:'$56',
        tags:'AU Bottle'
    },
    {
        id:4,
        title:'Daiuiri',
        Price:'$45',
        tags:'Rum | citrus juice | sugar'
    },
    {
        id:5,
        title:'Old fashioned',
        Price:'$56',
        tags:'AU Bottle'
    },
    {
        id:6,
        title:'Chapel Hill Sharez',
        Price:'$56',
        tags:'Bourbon | Brown sugar | Angosture Bitters'
    },
    {
        id:7,
        title:'Mensori',
        Price:'$56',
        tags:'AU Bottle | standard'
    }
]

const awards=[
    {
        id:1,
        imgUrl:images.award02,
        title:'Bib Guormood',
        subtitle:'Lorem owned awards from differedn organisations nworldwide imcludinh billboards'
    }, 
    {
        id:2,
        imgUrl:images.award01,
        title:'Lagos Bus School',
        subtitle:'Lorem owned awards from differedn organisations nworldwide imcludinh billboards'
    },
    {
        id:3,
        imgUrl:images.award05,
        title:'Governors awars',
        subtitle:'Lorem owned awards from differedn organisations nworldwide imcludinh billboards'
    },
    {
        id:4,
        imgUrl:images.award03,
        title:'Business awards',
        subtitle:'Lorem owned awards from differedn organisations nworldwide imcludinh billboards'
    },
   
]

export default{
    wines,
    cocktails,
    awards
}