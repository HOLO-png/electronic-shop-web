const img1 = require('../images/slides/iphone_11_PNG33.png').default;
const img2 = require('../images/slides/headphones_PNG101976.png').default;
const img3 = require('../images/slides/macbook_PNG11.png').default;

const heroSlides = [
    {
        title: 'Iphone với những tính năng vượt trội',
        description:
            'Apple luôn biết cách khiến người dùng háo hức mong chờ mỗi khi sắp ra mắt dòng iPhone mới. Và trong năm nay, iPhone 12 series cũng không ngoại lệ. Cùng tìm hiểu xem smartphone này có gì thú vị mà ai cũng chờ đợi nhé!',
        img: img1,
        path: '/catalog/iphone',
        color: 'blue',
    },
    {
        title: 'Phụ kiện điện thoại vô cùng độc đáo',
        description:
            'Thương hiệu Apple đã quá quen thuộc với những tín đồ yêu công nghệ trên toàn thế giới. Bên cạnh các sản phẩm chính, phụ kiện đi kèm của hãng cũng đi đầu về chất lượng. Cùng Điện máy XANH tìm hiểu kỹ hơn các loại phụ kiện của Apple? Có tốt và đáng mua không nhé!',
        img: img2,
        path: '/catalog/headphones',
        color: 'orange',
    },
    {
        title: 'Sở hữu những chiếc Macbook với giá rẻ',
        description:
            'MacBook thực chất là dòng sản phẩm máy tính xách tay của thương hiệu nổi tiếng Apple. Với thiết kế vô cùng đẹp mắt cùng hệ điều hành thân thiện, hiệu năng tốt đã giúp MacBook giành được thị phần của hệ điều hành MacOS.',
        img: img3,
        path: '/catalog/macbook',
        color: 'pink',
    },
];

export default heroSlides;
