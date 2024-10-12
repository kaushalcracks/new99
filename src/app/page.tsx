import ProductListSec from "@/components/common/ProductListSec";
import Brands from "@/components/homepage/Brands";
import DressStyle from "@/components/homepage/DressStyle";
import Header from "@/components/homepage/Header";
import { Product } from "@/types/product.types";
import { Review } from "@/types/review.types";

export const newArrivalsData: Product[] = [
  {
    id: 1,
    title: "T-shirt with Tape Details",
    srcUrl: "/images/pic1.png",
    gallery: ["/images/pic1.png", "/images/pic10.png", "/images/pic11.png"],
    price: 1200,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.5,
  },
  {
    id: 2,
    title: "Skinny Fit Jeans",
    srcUrl: "/images/pic2.png",
    gallery: ["/images/pic2.png"],
    price: 2600,
    discount: {
      amount: 0,
      percentage: 20,
    },
    rating: 3.5,
  },
  {
    id: 3,
    title: "Chechered Shirt",
    srcUrl: "/images/pic3.png",
    gallery: ["/images/pic3.png"],
    price: 1800,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.5,
  },
  {
    id: 4,
    title: "Sleeve Striped T-shirt",
    srcUrl: "/images/pic4.png",
    gallery: ["/images/pic4.png", "/images/pic10.png", "/images/pic11.png"],
    price: 1600,
    discount: {
      amount: 0,
      percentage: 30,
    },
    rating: 4.5,
  },
  {
    id: 100,
    title: "BIBA Women Calf Length Dress",
    srcUrl: "/images/img100.png",
    gallery: ["/images/img100.png"],
    price: 11000,
    discount: {
      amount: 10000,
      percentage: 10,
    },
    rating: 4.9,
  },
  {
    id: 101,
    title: "TURMS Anti Stain Polo Shirt",
    srcUrl: "/images/img101.png",
    gallery: ["/images/img101.png"],
    price: 2000,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.1,
  }
];

export const topSellingData: Product[] = [
  {
    id: 5,
    title: "Vertical Striped Shirt",
    srcUrl: "/images/pic5.png",
    gallery: ["/images/pic5.png", "/images/pic10.png", "/images/pic11.png"],
    price: 2320,
    discount: {
      amount: 0,
      percentage: 20,
    },
    rating: 5.0,
  },
  {
    id: 6,
    title: "Courage Graphic T-shirt",
    srcUrl: "/images/pic6.png",
    gallery: ["/images/pic6.png", "/images/pic10.png", "/images/pic11.png"],
    price: 1450,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.0,
  },
  {
    id: 7,
    title: "Loose Fit Bermuda Shorts",
    srcUrl: "/images/pic7.png",
    gallery: ["/images/pic7.png"],
    price: 800,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 3.0,
  },
  {
    id: 8,
    title: "Faded Skinny Jeans",
    srcUrl: "/images/pic8.png",
    gallery: ["/images/pic8.png"],
    price: 2100,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.5,
  },
  {
    id: 103,
    title: "Calvin Klein Men's Solid Classic Fit T-Shirt",
    srcUrl: "/images/img103.png",
    gallery: ["/images/img103.png"],
    price: 1500,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 5.0,
  },
  {
    id: 104,
    title: "Calvin Klein Men's Solid Slim Fit T-Shirt",
    srcUrl: "/images/img104.png",
    gallery: ["/images/img104.png"],
    price: 2000,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.0,
  }
];

export const relatedProductData: Product[] = [
  {
    id: 12,
    title: "Polo with Contrast Trims",
    srcUrl: "/images/pic12.png",
    gallery: ["/images/pic12.png", "/images/pic10.png", "/images/pic11.png"],
    price: 2420,
    discount: {
      amount: 0,
      percentage: 20,
    },
    rating: 4.0,
  },
  {
    id: 13,
    title: "Gradient Graphic T-shirt",
    srcUrl: "/images/pic13.png",
    gallery: ["/images/pic13.png", "/images/pic10.png", "/images/pic11.png"],
    price: 1450,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 3.5,
  },
  {
    id: 14,
    title: "Polo with Tipping Details",
    srcUrl: "/images/pic14.png",
    gallery: ["/images/pic14.png"],
    price: 1800,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.5,
  },
  {
    id: 15,
    title: "Black Striped T-shirt",
    srcUrl: "/images/pic15.png",
    gallery: ["/images/pic15.png"],
    price: 1500,
    discount: {
      amount: 0,
      percentage: 30,
    },
    rating: 5.0,
  },
];


export const gymSellingData: Product[] = [
  {
    id: 12,
    title: "Polo with Contrast Trims",
    srcUrl: "/images/N-Queen.png",
    gallery: ["/images/N-Queen.png"],
    price: 2420,
    discount: {
      amount: 0,
      percentage: 20,
    },
    rating: 4.0,
  },
  {
    id: 13,
    title: "Gradient Graphic T-shirt",
    srcUrl: "/images/N-Queen.png",
    gallery: ["/images/N-Queen.png"],
    price: 1450,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 3.5,
  },
  {
    id: 14,
    title: "Polo with Tipping Details",
    srcUrl: "/images/N-Queen.png",
    gallery: ["/images/N-Queen.png"],
    price: 1800,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.5,
  },
  {
    id: 15,
    title: "Black Striped T-shirt",
    srcUrl: "/images/N-Queen.png",
    gallery: ["/images/N-Queen.png"],
    price: 1500,
    discount: {
      amount: 0,
      percentage: 30,
    },
    rating: 5.0,
  },
];

export const casual: Product[] = [
  {
    id: 105,
    title: "Bamboo Cay Mens Short Sleeve Hurricane",
    srcUrl: "/images/img105.png",
    gallery: ["/images/img105.png"],
    price: 5000,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.7,
  },
  {
    id: 106,
    title: "ZAFONI Tropical Shirt 1pc Yellow Men",
    srcUrl: "/images/img106.png",
    gallery: ["/images/img106.png"],
    price: 4000,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.8,
  },
  {
    id: 107,
    title: "ALVISH Casual Hawaiian Shirt for Men",
    srcUrl: "/images/img107.png",
    gallery: ["/images/img107.png"],
    price: 6000,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.8,
  },
  {
    id: 108,
    title: "Lymio Men's Striped Regular Fit Shirt",
    srcUrl: "/images/img108.png",
    gallery: ["/images/img108.png"],
    price: 900,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.6,
  },
  {
    id: 109,
    title: "COOFANDY Mens Button Down Beach Shirt",
    srcUrl: "/images/img109.png",
    gallery: ["/images/img109.png"],
    price: 8000,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.7,
  },
  {
    id: 110,
    title: "JMIERR Mens Quilted Shirt Jackets",
    srcUrl: "/images/img110.png",
    gallery: ["/images/img110.png"],
    price: 9000,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.9,
  }
 
];

export const formal: Product[] = [
  {
    id: 111,
    title: "Allen Solly Men's Slim Fit Shirt",
    srcUrl: "/images/img111.png",
    gallery: ["/images/img111.png"],
    price: 2000,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.2,
  },
  {
    id: 112,
    title: "Scott International Shirt for Men",
    srcUrl: "/images/img112.png",
    gallery: ["/images/img112.png"],
    price: 9000,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.2,
  },
  {
    id: 113,
    title: "Peter England Men's Regular Fit Shirt",
    srcUrl: "/images/img113.png",
    gallery: ["/images/img113.png"],
    price: 3000,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.4,
  },
  {
    id: 114,
    title: "Pinkmint Mens Long Sleeve Button Down Shirt",
    srcUrl: "/images/img114.png",
    gallery: ["/images/img114.png"],
    price: 4900,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.1,
  },
  {
    id: 115,
    title: "Louis Philippe Men Regular Fit ",
    srcUrl: "/images/img115.png",
    gallery: ["/images/img115.png"],
    price: 7600,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.2,
  },
  {
    id: 116,
    title: "Majestic Man Slim Fit Satin Cotton Formal Shirt",
    srcUrl: "/images/img116.png",
    gallery: ["/images/img116.png"],
    price: 12000,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.1,
  }
 
];

export const party: Product[] = [
  {
    id: 117,
    title: "GRECIILOOKS Shirt for Men | Mens Casual Shirt",
    srcUrl: "/images/img117.png",
    gallery: ["/images/img117.png"],
    price: 2400,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.1,
  },
  {
    id: 118,
    title: "CALVIN PARTY WEAR",
    srcUrl: "/images/img118.png",
    gallery: ["/images/img118.png"],
    price: 4000,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.8,
  },
  {
    id: 119,
    title: "ZEROYAA Mens Hipster Gold Rose Printed Slim Fit ",
    srcUrl: "/images/img119.png",
    gallery: ["/images/img119.png"],
    price: 3600,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.2,
  },
  {
    id: 120,
    title: "COOFANDY Women's Casual Pullover Sweatshirt Double",
    srcUrl: "/images/img120.png",
    gallery: ["/images/img120.png"],
    price: 9000,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.6,
  },
  {
    id: 121,
    title: "Amzdest 90s Clothing for women,Unisex Hip Hop outfit for party",
    srcUrl: "/images/img121.png",
    gallery: ["/images/img121.png"],
    price: 8000,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.7,
  },
  {
    id: 122,
    title: "shop4ever Pirate Skull & Crossbones T-Shirt",
    srcUrl: "/images/img122.png",
    gallery: ["/images/img122.png"],
    price: 6000,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.9,
  }
 
];

export const reviewsData: Review[] = [
  {
    id: 1,
    user: "Alex K.",
    content:
      '"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”',
    rating: 5,
    date: "August 14, 2023",
  },
  {
    id: 2,
    user: "Sarah M.",
    content: `"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”`,
    rating: 5,
    date: "August 15, 2023",
  },
  {
    id: 3,
    user: "Ethan R.",
    content: `"This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt."`,
    rating: 5,
    date: "August 16, 2023",
  },
  {
    id: 4,
    user: "Olivia P.",
    content: `"As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out."`,
    rating: 5,
    date: "August 17, 2023",
  },
  {
    id: 5,
    user: "Liam K.",
    content: `"This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion."`,
    rating: 5,
    date: "August 18, 2023",
  },
  {
    id: 6,
    user: "Samantha D.",
    content: `"I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt."`,
    rating: 5,
    date: "August 19, 2023",
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <Brands />
      <main className="my-[50px] sm:my-[72px]">
        <ProductListSec
          title="NEW ARRIVALS"
          data={newArrivalsData}
          viewAllLink="/shop#new-arrivals"
        />
        <div className="max-w-frame mx-auto px-4 xl:px-0">
          <hr className="h-[1px] border-t-black/10 my-10 sm:my-16" />
        </div>
        <div className="mb-[50px] sm:mb-20">
          <ProductListSec
            title="top selling"
            data={topSellingData}
            viewAllLink="/shop#top-selling"
          />
        </div>
        <div className="mb-[50px] sm:mb-20">
          <DressStyle />
        </div>
      </main>
    </>
  );
}
